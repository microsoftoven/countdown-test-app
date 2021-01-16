import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
    user: IUser;
    redirectTo: string;
}

export const PrivateRoute: React.FC<Props> = ({ ...rest }) => {
    if (rest.user._id === null) {
        console.log('redirecting');
        return <Redirect to={rest.redirectTo} />;
    } else {
        return <Route {...rest} />;
    }
};
