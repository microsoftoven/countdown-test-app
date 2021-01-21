import { fireEvent, render, screen } from '@testing-library/react';

import { Modal } from './index';

test('modal renders children', async () => {
    render(
        <Modal>
            <p>Hi from modal!</p>
        </Modal>
    );

    const text = await screen.findByText(/Hi from modal!/i);
    expect(text).toBeInTheDocument();
});

test('modal has visible class on isVisible prop pass', () => {
    render(
        <Modal isVisible={true}>
            <p>Hi from modal!</p>
        </Modal>
    );

    const modal = screen.getByTestId('modal');
    expect(modal).toHaveClass('visible');
});

test('modal fires passed onClose function', () => {
    const handleClose = jest.fn();

    render(
        <Modal isVisible={true} onClose={handleClose}>
            <p>Hi from modal!</p>
        </Modal>
    );

    fireEvent.click(screen.getByTestId('modal'));

    expect(handleClose).toHaveBeenCalledTimes(1);
});
