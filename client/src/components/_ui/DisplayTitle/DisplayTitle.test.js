import { render, screen } from '@testing-library/react';

import { DisplayTitle } from './index';

test('display title renders text', async () => {
    render(<DisplayTitle />);

    const text = await screen.findByText('count');
    expect(text).toBeInTheDocument();
});
