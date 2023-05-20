import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getCurrentUser } from './util/APIUtil';
import { ACCESS_TOKEN } from './constants';
import './App.css';
// import SciFiScreen from './login/SciFiScreen';
import Home from './home/Home';
import PrivateRoute from './util/PrivateRoute';
import Login from './login/Login';
import OAuth2RedirectHandler from './oauth2/OAuth2RedirectHandler';
import NotFound from './notfound/NotFound';
import Profile from './profile/Profile';

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
                        <Route path="/" element={<PrivateRoute><Home authenticated={this.state.authenticated} currentUser={this.state.currentUser} /></PrivateRoute>} />
                        {/* <PrivateRoute path="/" element={<Home />} authenticated={this.state.authenticated} currentUser={this.state.currentUser} /> */}
                        <Route path="/login" element={<Login authenticated={this.state.authenticated} {...this.props} />} />
                        <Route path="/profile" element={<PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={<Profile />} />} />
                        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
                        <Route component={NotFound}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
