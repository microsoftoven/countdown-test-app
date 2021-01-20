import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './index';

beforeEach(() => {
    fetch.resetMocks();
});

test('header renders successfully', () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );

    expect(getByTestId('header')).toBeTruthy();
});

test('header renders logged in links', async () => {
    const user = await fetch.mockResponseOnce(
        JSON.stringify({ _id: 'sampleid' })
    );

    render(
        <BrowserRouter>
            <Header user={user} />
        </BrowserRouter>
    );

    const deadlineLink = await screen.findByText(/deadlines/i);
    expect(deadlineLink).toBeInTheDocument();
});
