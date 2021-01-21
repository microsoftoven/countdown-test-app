import { render, screen } from '@testing-library/react';

import { Landing } from './index';

test('landing page renders', async () => {
    render(<Landing />);

    const wrapper = await screen.findByTestId('landing-wrapper');

    expect(wrapper).toBeInTheDocument();
});
