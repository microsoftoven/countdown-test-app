import React from 'react';
import { PageAlignCenter } from '../_layout/Page';
import { VideoEmbed } from '../_ui/VideoEmbed';

interface Props {}

export const Logout: React.FC<Props> = () => {
    return (
        <PageAlignCenter>
            <div data-testid='logout-page'>
                <p>Byeee!</p>

                <br />

                <VideoEmbed
                    title='Bacon Pancakes'
                    url='https://www.youtube.com/embed/cUYSGojUuAU'
                />
            </div>
        </PageAlignCenter>
    );
};
