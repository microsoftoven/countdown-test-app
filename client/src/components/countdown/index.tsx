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

export const Countdown: React.FC<Props> = ({ date }) => {
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
    };

    useEffect(() => {
        let time = 0;
        if (!countdownComplete) {
            const timer = setTimeout(() => {
                calculateRemainingTime(date);

                time = 1000;
            }, time);

            return () => clearTimeout(timer);
        }
    });

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
                    <StyledNumber>
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
            <StyledCountdownWrapper>
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
            <StyledCountdownWrapper>
                <div style={{ display: 'inline-block' }}>
                    {displaySections.length > 0 && (
                        <StyledCountdown>{displaySections}</StyledCountdown>
                    )}
                </div>
            </StyledCountdownWrapper>
        );
    }
};
