import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import { StaticRouter, Router } from 'react-router-dom';
import { EditButton } from './index';
import { act } from 'react-dom/test-utils';

test('click fires on edit button', async () => {
    const handleClick = jest.fn();

    render(
        <StaticRouter>
            <EditButton handleClick={handleClick} link='/deadlines' />
        </StaticRouter>
    );

    fireEvent.click(screen.getByTestId('edit-button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
});

test('edit button routes to specified link on anchor click', async () => {
    const handleClick = jest.fn();
    const root = document.createElement('div');
    const history = createMemoryHistory();

    document.body.appendChild(root);

    render(
        <Router history={history}>
            <EditButton handleClick={handleClick} link='/deadlines/' />
        </Router>,
        root
    );

    act(() => {
        const btnLink = document.querySelector('.btn a');
        btnLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(history.location.pathname).toBe('/deadlines/');
});
