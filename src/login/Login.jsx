import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import SciFiScreen from './SciFiScreen';

export default class Login extends Component {
    componentDidMount() {
        console.log(this.props.location)
    }

    render() {
        console.log(this.props)
        if (this.props.authenticated) {
            return <Navigate
                to={{
                    pathname: "/",
                    state: { from: this.props.location }
                }} />;
        }

        return (
            <SciFiScreen title="Login" screenStack={5} />
        )
    }
}