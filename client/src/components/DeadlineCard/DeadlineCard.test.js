import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';

import { DeadlineCard } from './index';

test('deadline card renders date and title', async () => {
    render(
        <StaticRouter>
            <DeadlineCard date={new Date().toString()} title='deadline title' />
        </StaticRouter>
    );

    const title = await screen.findByText(/deadline title/i);
    const date = await screen.findByTestId('deadline-date');

    expect(title).toBeInTheDocument();
    expect(date).not.toBeEmptyDOMElement();
});
