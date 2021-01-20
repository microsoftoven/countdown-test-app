import { render, screen } from '@testing-library/react';

import { Page, PageAlignCenter, PageFlexColumn } from './index';

test('page wrapper renders children', async () => {
    render(
        <Page>
            <p>Hello!</p>
        </Page>
    );

    const child = await screen.findByText(/Hello/i);
    expect(child).toBeInTheDocument();
});

test('page align center wrapper renders children', async () => {
    render(
        <PageAlignCenter>
            <p>Hello!</p>
        </PageAlignCenter>
    );

    const child = await screen.findByText(/Hello/i);
    expect(child).toBeInTheDocument();
});

test('page with flex columns wrapper renders children', async () => {
    render(
        <PageFlexColumn>
            <p>Hello!</p>
        </PageFlexColumn>
    );

    const child = await screen.findByText(/Hello/i);
    expect(child).toBeInTheDocument();
});
