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
import { DeadlineList } from './components/_views/DeadlineList';
import { Deadline } from './components/Deadline';

interface State {
    // showModal: boolean;
}

interface Props {
    fetchUser: Function;
    fetchTheme: Function;
    user: UserState;
    theme: ThemeState;
}

class App extends React.Component<Props, State> {
    state: State = {
        // showModal: false,
    };

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
                                <PrivateRoute
                                    exact
                                    path='/deadlines'
                                    component={DeadlineList}
                                    user={this.props.user}
                                    redirectTo='/'
                                />
                                <PrivateRoute
                                    path='/deadlines/:title'
                                    component={Deadline}
                                    user={this.props.user}
                                    redirectTo='/'
                                />
                            </Switch>

                            <Footer user={this.props.user} />
                        </BrowserRouter>
                    </AppWrapper>
                </ThemeProvider>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}

export default connect((state: RootState) => {
    return {
        user: state.user,
        theme: state.theme,
    };
}, actions)(App);
