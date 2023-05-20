import React from 'react';
import {
    Navigate
} from 'react-router-dom';

function PrivateRoute({ element: Element, authenticated, ...rest }) {
    return authenticated ? <Element /> : <Navigate to="/login" />

    // if (authenticated) {
    //     return props => <Element {...rest} {...props} />
    //     // return <Element {...rest} {...props}/>
    // }

    // return props => <Navigate to={{
    //     pathname: '/login',
    //     state: { from: props.location }
    // }}
    // />
    // <Route
    //     {...rest}
    //     render={props =>
    //         authenticated ? 
    //             <Element {...rest} {...props} /> :
    //             <Navigate to={{
    //                 pathname: '/login',
    //                 state: { from: props.location }
    //             }}
    //             />

    //     }
    // />
};

export default PrivateRoute;