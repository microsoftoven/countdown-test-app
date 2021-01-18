import React from 'react';

import { PageAlignCenter } from '../../_layout/Page';
import { LandingDescription } from './styles';
import { Countdown } from '../../Countdown';
// import { Button } from '../../_ui/Button';
import { DisplayTitle } from '../../_ui/DisplayTitle';
import { Tagline } from '../../_ui/Tagline';

export const Landing = () => {
    let countdownDate = new Date();
    countdownDate.setMonth(countdownDate.getMonth() + 1);

    return (
        <PageAlignCenter>
            <DisplayTitle />

            <Tagline text='hit your deadlines.' />

            <Countdown date={countdownDate} />

            <LandingDescription>
                <p>
                    Countdown is a free web app that helps you manage your
                    deadlines with a simple, intuitive interface.
                </p>
            </LandingDescription>
        </PageAlignCenter>
    );
};
