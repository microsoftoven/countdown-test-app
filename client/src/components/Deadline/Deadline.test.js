import { render, screen, act } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Deadline from './index';

describe('deadline single view', () => {
    const mockStore = configureStore([]);
    let container = null;
    let store;

    beforeEach(() => {
        store = mockStore({
            state: 'sample state',
        });
    });

    beforeEach(() => {
        // setup a DOM element as a render target
        fetch.resetMocks();
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        container.remove();
        container = null;
    });

    test('deadline single view renders countdown', async () => {
        const date = new Date();
        date.setMonth(date.getMonth() + 1);

        const data = {
            pending: false,
            success: false,
            deadline: {
                _id: 'sampleid',
                title: 'Sample Deadline',
                userID: 'sampleuserID',
                timestamp: date.toISOString(),
            },
        };

        const fakeDeadline = {
            pending: false,
            success: false,
            deadline: {
                _id: 'sampleid',
                title: 'Sample Deadline',
                userID: 'sampleuserID',
                timestamp: date.toISOString(),
            },
        };

        const fetchDeadline = () => {
            return fakeDeadline;
        };

        render(
            <Provider store={store}>
                <StaticRouter>
                    <Deadline
                        activeDeadline={fakeDeadline}
                        match={{
                            params: {
                                id: 'sampleid',
                            },
                        }}
                        fetchDeadline={fetchDeadline}
                    />
                </StaticRouter>
            </Provider>
        );

        const countdown = await screen.findByTestId('countdown');
        expect(countdown).toBeInTheDocument();
    });
});
