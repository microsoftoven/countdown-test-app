import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import App from './App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

test('renders application', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    expect(getByTestId('app-loading')).toBeTruthy();
});
