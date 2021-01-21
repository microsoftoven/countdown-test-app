import { render, screen } from '@testing-library/react';

import { Logout } from './index';

test('logout page renders', async () => {
    render(<Logout />);

    const logout = await screen.findByTestId('logout-page');

    expect(logout).toBeInTheDocument();
});
