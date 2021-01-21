import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './index';

test('click is triggered on button', async () => {
    const handleClick = jest.fn();

    render(<Button handleClick={handleClick} />);

    fireEvent.click(screen.getByTestId('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
});

test('button renders text', async () => {
    render(<Button text='button text' />);

    const text = await screen.findByText(/button text/i);
    expect(text).toBeInTheDocument();
});

test('button renders pending status', async () => {
    render(<Button text='button text' pending={true} />);

    // const text = await screen.findByText(/button text/i);
    expect(screen.getByTestId('button')).toHaveClass('pending');
});

test('button renders success status', async () => {
    render(<Button text='button text' success={true} />);

    // const text = await screen.findByText(/button text/i);
    expect(screen.getByTestId('button')).toHaveClass('success');
});
