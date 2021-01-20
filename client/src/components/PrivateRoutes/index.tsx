import React from 'react';
import { Redirect, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
    user: IUser;
    redirectTo: string;
}

export const PrivateRoutes: React.FC<Props> = ({
    children,
    redirectTo,
    user,
}) => {
    if (user._id === null) {
        return <Redirect to={redirectTo} />;
    } else {
        return <>{children}</>;
    }
};
