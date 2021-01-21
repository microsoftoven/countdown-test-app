import { render, screen } from '@testing-library/react';

import { Tagline } from './index';

test('tagline renders text', async () => {
    render(<Tagline text='Hi from tagline!' />);

    const text = await screen.findByText(/Hi from tagline!/i);
    expect(text).toBeInTheDocument();
});
