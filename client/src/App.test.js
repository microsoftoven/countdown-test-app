import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import App from './App';

describe('App tests', () => {
    const mockStore = configureStore([]);

    let store;

    beforeEach(() => {
        store = mockStore({
            theme: {
                data: {
                    data: {},
                },
                themeLoading: false,
            },
            user: {
                _id: null,
            },
        });
    });

    test('renders application', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(getByTestId('header')).toBeTruthy();
    });
});
