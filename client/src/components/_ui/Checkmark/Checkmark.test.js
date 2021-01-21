import { render, screen } from '@testing-library/react';

import { Checkmark } from './index';

test('checkmark renders svg', () => {
    render(<Checkmark />);

    const checkmark = screen.getByTestId('checkmark');
    const svg = screen.getByTestId('svg');

    expect(checkmark).toContainElement(svg);
});
