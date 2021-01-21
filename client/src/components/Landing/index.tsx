import React from 'react';

import { PageAlignCenter } from '../_layout/Page';
import { LandingDescription } from './styles';
import { Countdown } from '../Countdown';
import { DisplayTitle } from '../_ui/DisplayTitle';
import { Tagline } from '../_ui/Tagline';
import { FadeInSlideUp } from '../_utilities/animations';

export const Landing = () => {
    let countdownDate = new Date();
    countdownDate.setMonth(countdownDate.getMonth() + 1);

    return (
        <div data-testid='landing-wrapper'>
            <PageAlignCenter>
                <FadeInSlideUp animationDelay='.05s'>
                    <DisplayTitle />
                </FadeInSlideUp>

                <FadeInSlideUp animationDelay='.1s'>
                    <Tagline text='hit your deadlines.' />
                </FadeInSlideUp>

                <FadeInSlideUp animationDelay='.15s'>
                    <Countdown date={countdownDate} />
                </FadeInSlideUp>

                <FadeInSlideUp animationDelay='.2s'>
                    <LandingDescription>
                        <p>
                            Countdown is a free web app that helps you manage
                            your deadlines with a simple, intuitive interface.
                        </p>
                    </LandingDescription>
                </FadeInSlideUp>
            </PageAlignCenter>
        </div>
    );
};
