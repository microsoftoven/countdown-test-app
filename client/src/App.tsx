import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import { AppWrapper } from './components/_layout/AppWrapper';
import PrivateRoute from './components/PrivateRoutes';
import { Header } from './components/_layout/Header';
import { Footer } from './components/_layout/Footer';
import { Landing } from './components/Landing';
import { Logout } from './components/Logout';
import { LoadingIndicator } from './components/_ui/LoadingIndicator';
import DeadlineEditor from './components/DeadlineEditor';
import DeadlineList from './components/DeadlineList';
import Deadline from './components/Deadline';

interface State {}

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

                            <Route exact path='/' component={Landing} />

                            <Route path='/logged-out' component={Logout} />

                            <PrivateRoute
                                path='/deadlines'
                                component={DeadlineList}
                                user={this.props.user}
                            />

                            <PrivateRoute
                                path='/deadlines/add'
                                component={DeadlineEditor}
                                user={this.props.user}
                            />

                            <PrivateRoute
                                path='/deadlines/:id/:action'
                                component={DeadlineEditor}
                                user={this.props.user}
                            />

                            <PrivateRoute
                                path='/deadline/:id/:action'
                                component={DeadlineEditor}
                                user={this.props.user}
                            />

                            <PrivateRoute
                                path='/deadline/:id'
                                component={Deadline}
                                user={this.props.user}
                            />
                            {/* </PrivateRoutes> */}
                            <Footer />
                        </BrowserRouter>
                    </AppWrapper>
                </ThemeProvider>
            );
        } else {
            return (
                <div data-testid='app-loading'>
                    <LoadingIndicator fullscreen={true} />
                </div>
            );
        }
    }
}

export default connect((state: RootState) => {
    return {
        user: state.user,
        theme: state.theme,
    };
}, actions)(App);
