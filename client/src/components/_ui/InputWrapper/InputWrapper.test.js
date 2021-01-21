import { render, screen } from '@testing-library/react';

import { InputWrapper } from './index';

test('input renders children', async () => {
    render(
        <InputWrapper>
            <input type='text' />
        </InputWrapper>
    );

    const input = document.querySelector('input');
    expect(input).toBeInTheDocument();
});

test('input renders error message', async () => {
    render(
        <InputWrapper error={true} errorMessage={'whoops!'}>
            <input type='text' />
        </InputWrapper>
    );

    const text = await screen.findByText(/whoops!/i);
    expect(text).toBeInTheDocument();
});
