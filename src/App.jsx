import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import './App.css';
import SciFiScreen from './components/login/SciFiScreen';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: false,
            currentUser: null,
            loading: true
        }
    }

    LoadLoggedInUser() {
        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    authenticated: true,
                    loading: false
                });
            }).catch(error => {
                this.setState({
                    loading: false
                });
            });
    }

    logout() {
        localStorage.removeItem(ACCESS_TOKEN);
        this.setState({
            authenticated: false,
            currentUser: null
        });
    }

    componentDidMount() {
        this.LoadLoggedInUser();
    }

    render() {
        return (
            <div className='app'>
                <Switch>
                    <Route path="/" />
                    <Route path="/login" element={<SciFiScreen title="Login" screenStack={6} />} />
                </Switch>
            </div>
        )
    }
}
