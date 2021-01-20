import { render } from '@testing-library/react';
import { Footer } from './index';

test('footer renders successfully', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('footer')).toBeTruthy();
});
