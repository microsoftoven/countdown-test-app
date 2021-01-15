import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import { ThemeProvider } from 'styled-components';

// import { Header } from './components/Header';
import { PrivateRoute } from './components/PrivateRoute';
import { Header } from './components/Header';
import { Landing } from './components/Landing';
import { DeadlineList } from './components/DeadlineList';
import { Deadline } from './components/Deadline';

interface State {
    theme: any;
}

interface Props {
    fetchUser: Function,
    fetchTheme: Function,
    user: UserState,
    theme: ThemeState
}

class App extends React.Component<Props, State> {
    state: State = {
        theme: null,
    };

    componentDidMount() {
        this.props.fetchTheme();
        this.props.fetchUser();
    }

    render() {
        return (
            this.props.theme && (
                <ThemeProvider theme={this.props.theme.data}>
                    <BrowserRouter>
                        <Header user={this.props.user} />

                        <Switch>
                            <Route exact path='/' component={Landing} />
                            <PrivateRoute exact path='/deadlines' component={DeadlineList} user={this.props.user} redirectTo="/" />
                            <PrivateRoute path='/deadlines/:title' component={Deadline} user={this.props.user} redirectTo="/" />
                        </Switch>
                    </BrowserRouter>
                </ThemeProvider>
            )
        );
    }
}

export default connect((state: RootState) => {
    return { 
        user: state.user,
        theme: state.theme
    };
}, actions)(App);

