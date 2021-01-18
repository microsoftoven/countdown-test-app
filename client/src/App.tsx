import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import { AppWrapper } from './components/_layout/AppWrapper';
import { PrivateRoute } from './components/PrivateRoute';
import { Header } from './components/_layout/Header';
import { Footer } from './components/_layout/Footer';
import { Landing } from './components/_views/Landing';
import { Logout } from './components/_views/Logout';
import { LoadingIndicator } from './components/_ui/LoadingIndicator';
import DeadlineList from './components/_views/DeadlineList';
import Deadline from './components/Deadline';

interface State {
    // showModal: boolean;
}

interface Props {
    fetchUser: Function;
    fetchTheme: Function;
    addDeadline: Function;
    user: UserState;
    theme: ThemeState;
}

class App extends React.Component<Props, State> {
    state: State = {};

    componentDidMount() {
        this.props.fetchTheme();
        this.props.fetchUser();
    }

    render() {
        if (!this.props.theme.themeLoading) {
            return (
                <ThemeProvider theme={this.props.theme.data.data}>
                    <AppWrapper>
                        <BrowserRouter>
                            <Header user={this.props.user} />

                            <Switch>
                                <Route exact path='/' component={Landing} />
                                <Route path='/logged-out' component={Logout} />
                                <PrivateRoute
                                    exact
                                    path='/deadlines'
                                    component={DeadlineList}
                                    user={this.props.user}
                                    redirectTo='/'
                                />
                                <Route
                                    path='/deadlines/:id'
                                    component={Deadline}
                                    user={this.props.user}
                                    redirectTo='/'
                                />
                            </Switch>

                            <Footer />
                        </BrowserRouter>
                    </AppWrapper>
                </ThemeProvider>
            );
        } else {
            return <LoadingIndicator fullscreen={true} />;
        }
    }
}

export default connect((state: RootState) => {
    return {
        user: state.user,
        theme: state.theme,
    };
}, actions)(App);
