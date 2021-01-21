import React from 'react';
import { Page } from '../_layout/Page';
import { VideoEmbed } from '../_ui/VideoEmbed';

interface Props {}

export const Logout: React.FC<Props> = () => {
    return (
        <div data-testid='logout-page'>
            <Page>
                <p>Byeee!</p>

                <br />

                <VideoEmbed
                    title='Bacon Pancakes'
                    url='https://www.youtube.com/embed/0_EW8aNgKlA'
                />
            </Page>
        </div>
    );
};
