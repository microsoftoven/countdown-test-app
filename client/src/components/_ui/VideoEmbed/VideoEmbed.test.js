import { render, screen } from '@testing-library/react';

import { VideoEmbed } from './index';

test('video embed renders iframe', async () => {
    render(
        <VideoEmbed src='https://www.google.com' title='Title goes here!' />
    );

    const embed = await screen.findByTestId('video-embed');
    const iframe = await screen.findByTestId('video-embed-iframe');

    expect(embed).toContainElement(iframe);
});
