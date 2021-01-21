import { render, screen, fireEvent } from '@testing-library/react';

import { CloseButton } from './index';

test('click is triggered on button', async () => {
    const handleClick = jest.fn();

    render(<CloseButton handleClick={handleClick} />);

    fireEvent.click(screen.getByTestId('close-btn'));

    expect(handleClick).toHaveBeenCalledTimes(1);
});
