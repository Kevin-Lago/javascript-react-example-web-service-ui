import React, { Component } from 'react';
import { ACCESS_TOKEN } from '../constants';
import { Navigate } from 'react-router-dom'

class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {
        const token = this.getUrlParameter('token');
        console.log(token);
        const error = this.getUrlParameter('error');
        console.log(error)

        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            return <Navigate to={{
                pathname: "/profile",
                state: { from: this.props.location }
            }} />;
        } else {
            return <Navigate to={{
                pathname: "/login",
                state: {
                    from: this.props.location,
                    error: error
                }
            }} />;
        }
    }
}

export default OAuth2RedirectHandler;