import React from 'react';

import { Countdown } from '../../Countdown';
// import { Button } from '../../_ui/Button';

export const Landing = () => {
    let countdownDate = new Date('2022-02-03');

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>
                <strong>count</strong>down
            </h1>

            <span className='tagline'>hit your deadlines.</span>

            <Countdown date={countdownDate} />

            <p>
                Countdown is a free web app that helps you manage your deadlines
                with a simple, intuitive interface.
            </p>
        </div>
    );
};
