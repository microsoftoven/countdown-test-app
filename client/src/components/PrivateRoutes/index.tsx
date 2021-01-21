import React from 'react';
import {
    Redirect,
    Route,
    RouteComponentProps,
    withRouter,
} from 'react-router-dom';

interface Props extends RouteComponentProps {
    user: IUser;
    path: string;
    component: any;
}

const PrivateRoute: React.FC<Props> = (props: Props) => {
    const { user } = props;

    if (user._id === null && props.path === props.history.location.pathname) {
        return <Redirect to='/' />;
    } else {
        return <Route {...props} />;
    }
};

export default withRouter(PrivateRoute);
