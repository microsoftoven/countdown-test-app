import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './index';

test('page wrapper renders children', async () => {
    const handleClick = jest.fn();

    render(<Button handleClick={handleClick} />);

    fireEvent.click(screen.getByTestId('add-button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
});
