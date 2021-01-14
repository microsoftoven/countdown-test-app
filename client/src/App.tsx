import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';

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
                    <Header />
                </ThemeProvider>
            )
            
            // this.props.theme && (
            //     <ThemeProvider theme={this.props.theme}>
            //         <BrowserRouter>
            //             <div>
            //                 {/* <Header /> */}

            //                 <div className='container'>
            //                     <Switch>
            //                         {/* <Route exact path='/' component={Landing} />

            //                         {this.props.auth._id &&
            //                             <Route path='/deadlines' component={Deadlines} />
            //                         }

            //                         <Route component={NoRoutes} /> */}
            //                     </Switch>
            //                 </div>
            //             </div>
            //         </BrowserRouter>
            //         {/* <Countdown /> */}
            //     </ThemeProvider>
            // )
        );
    }
}

export default connect((state: RootState) => {
    return { 
        user: state.user,
        theme: state.theme
    };
}, actions)(App);

