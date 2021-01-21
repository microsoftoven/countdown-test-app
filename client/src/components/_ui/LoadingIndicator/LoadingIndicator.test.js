import { render, screen } from '@testing-library/react';

import { LoadingIndicator } from './index';

test('loading indicator renders svg', () => {
    render(<LoadingIndicator />);

    const loadingIndicator = screen.getByTestId('loading-indicator');
    const svg = screen.getByTestId('loading-svg');

    expect(loadingIndicator).toContainElement(svg);
});
