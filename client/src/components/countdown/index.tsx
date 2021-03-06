import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import {
    StyledCountdownWrapper,
    StyledCountdown,
    StyledCountdownComplete,
    StyledCountdownCompleteMessage,
    StyledCountdownRow,
    StyledCountdownItem,
    StyledNumber,
    StyledDuration,
} from './styles';

import { Checkmark } from '../_ui/Checkmark';
import { FadeInSlideUp } from '../_utilities/animations';

const _chunk = require('lodash/chunk');
const duration = require('dayjs/plugin/duration');
dayjs.extend(duration);

// Write your countdown code in this component
interface Props {
    date: Date;
    noTimeout?: boolean; // for testing
}

interface RemainingTime {
    [key: string]: any;
    years?: number;
    months?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

export const Countdown: React.FC<Props> = ({ date, noTimeout }) => {
    const [remainingTime, setRemainingTime] = useState<RemainingTime>({});
    const [countdownComplete, setCountdownComplete] = useState<boolean>(false);

    const calculateRemainingTime = (date: Date) => {
        const currentDateTime: Date = new Date();
        const difference = Math.round(
            (date.getTime() - currentDateTime.getTime()) / 1000
        );

        if (difference <= 0) {
            setCountdownComplete(true);
            return;
        }

        const countdownDuration: any = dayjs.duration(
            dayjs(date).diff(dayjs(currentDateTime))
        );

        setRemainingTime(countdownDuration.$d);

        // let delta = difference;

        // let days = Math.floor(delta / 86400);
        // delta -= days * 86400;
        // let hours = Math.floor(delta / 3600);
        // delta -= hours * 3600;
        // let minutes = Math.floor(delta / 60);
        // delta -= minutes * 60;
        // let seconds = delta;

        // setRemainingTime({
        //     days: days,
        //     hours: hours,
        //     minutes: minutes,
        //     seconds: seconds,
        // });
    };

    useEffect(() => {
        let time = 0;
        if (!countdownComplete && !noTimeout) {
            const timer = setTimeout(() => {
                calculateRemainingTime(date);

                time = 1000;
            }, time);

            return () => clearTimeout(timer);
        }
    });

    useEffect(() => {
        if (noTimeout) {
            calculateRemainingTime(date);
        }
    }, []);

    const setupTimeDisplay = () => {
        let result: Array<Object> = [];

        for (let key in remainingTime) {
            const count: any = remainingTime[key];
            let displayKey: string = key;
            let classes: string =
                key !== 'seconds' && count === 0 ? 'hide' : '';

            if (key === 'milliseconds') continue;

            if (count === 1) displayKey = displayKey.slice(0, -1);

            result.push(
                <StyledCountdownItem
                    key={`countdown-${key}`}
                    className={classes}
                >
                    <StyledNumber
                        className={key}
                        data-number={`${remainingTime[key]}`}
                    >
                        {key === 'seconds' && count < 10 && 0}
                        {remainingTime[key]}
                    </StyledNumber>

                    <StyledDuration>{displayKey}</StyledDuration>
                </StyledCountdownItem>
            );
        }

        return result;
    };

    if (countdownComplete) {
        return (
            <StyledCountdownWrapper data-testid='countdown-complete'>
                <StyledCountdownComplete>
                    <Checkmark />
                </StyledCountdownComplete>

                <FadeInSlideUp animationDelay='.2s'>
                    <StyledCountdownCompleteMessage>
                        Countdown Complete!
                    </StyledCountdownCompleteMessage>
                </FadeInSlideUp>
            </StyledCountdownWrapper>
        );
    } else {
        let displayTime: Array<Array<Object>> = _chunk(setupTimeDisplay(), 3);

        let displaySections = displayTime.map((section, i) => {
            return (
                <StyledCountdownRow key={`displaySection-${i}`}>
                    {section}
                </StyledCountdownRow>
            );
        });

        return (
            <StyledCountdownWrapper data-testid='countdown'>
                <div style={{ display: 'inline-block' }}>
                    {displaySections.length > 0 && (
                        <StyledCountdown>{displaySections}</StyledCountdown>
                    )}
                </div>
            </StyledCountdownWrapper>
        );
    }
};
