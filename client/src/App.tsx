import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import { RootState } from './reducers';

// import * as actions from '../actions';
import { ThemeProvider } from 'styled-components';

// Components
// import { Countdown } from './components/countdown';
import { Header } from './components/Header';
import { Deadlines } from './components/Deadlines';
import { Landing } from './components/Landing';
import { NoRoutes } from './components/NoRoutes';

interface State {
    theme: any;
}

interface Props {
    fetchUser: Function,
    auth: {
        id: string
    }
}

class App extends React.Component<Props, State> {
    state: State = {
        theme: null,
    };

    componentDidMount() {
        this.props.fetchUser();
        this.fetchTheme();
    }

    fetchTheme = () => {
        fetch(
            'https://api.koala.io/marketing/v1/device-configurations/alias/web-config',
            {
                method: 'GET',
                headers: {
                    'X-Organization-Id': '1',
                },
            }
        )
            .then((res) => res.json())
            .then(
                (result) => this.setState({ theme: result }),
                (error) => console.log(error)
            );
    };

    render() {
        console.log(this.props);
        const data = this.state.theme?.data?.data;

        return (
            this.state.theme && (
                <ThemeProvider theme={data}>
                    {/* <Countdown /> */}
                    <BrowserRouter>
                        <div>
                            <Header />

                            <div className='container'>
                                <Switch>
                                    <Route exact path='/' component={Landing} />

                                    {this.props.auth._id &&
                                        <Route path='/deadlines' component={Deadlines} />
                                    }

                                    <Route component={NoRoutes} />
                                </Switch>
                            </div>
                        </div>
                    </BrowserRouter>
                </ThemeProvider>
            )
        );
    }
}

export default connect((state: RootState) => {
    return { auth: state.auth };
}, actions)(App);
