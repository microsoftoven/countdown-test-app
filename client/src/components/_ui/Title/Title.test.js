import { fireEvent, render, screen } from '@testing-library/react';

import { Title } from './index';

test('title renders children', async () => {
    render(<Title>Hello!</Title>);

    const text = await screen.findByText(/hello!/i);
    expect(text).toBeInTheDocument();
});

test('title fires passed click event if sticky', async () => {
    const handleClick = jest.fn();

    render(
        <Title sticky={true} handleClick={handleClick}>
            Hello!
        </Title>
    );

    fireEvent.click(screen.getByTestId('title'));

    expect(handleClick).toHaveBeenCalledTimes(1);
});
