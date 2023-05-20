import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getCurrentUser } from './util/APIUtil';
import { ACCESS_TOKEN } from './constants';
import './App.css';
import SciFiScreen from './login/SciFiScreen';
import Home from './home/Home';
import PrivateRoute from './util/PrivateRoute';

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
                <BrowserRouter>
                    <Routes>
                        <PrivateRoute path="/" element={<Home />} authenticated={this.state.authenticated} currentUser={this.state.currentUser} />
                        <Route path="/login" element={<SciFiScreen title="Login" screenStack={6} />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
