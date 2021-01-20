import { render, screen } from '@testing-library/react';
import App from '../../../App';

import { AppWrapper } from '../AppWrapper';

test('app wrapper renders children', async () => {
    render(
        <AppWrapper>
            <p>Hello!</p>
        </AppWrapper>
    );

    const child = await screen.findByText(/Hello/i);
    expect(child).toBeInTheDocument();
});
