import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { count } from 'console';
// import * as duration from 'dayjs/plugin/duration';
const duration = require('dayjs/plugin/duration');
dayjs.extend(duration);

// var duration = require('dayjs/plugin/duration');
// import { StyledCountdown } from './styles';

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

        /*
         * Code below:
         * If we were only doing days, hours, minutes, and seconds...sure!
         * However, anything further than that is a WHOLE lot of logic that we can
         * simply use a library for, like yeap years.. different days in months.. etc. DayJS to the rescue!
         * You can uncomment this and comment out the duration logic with dayJS to test it out if you'd like.
         */
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

        // TODO: correctly type countdownDuration
        const countdownDuration: any = dayjs.duration(
            dayjs(date).diff(dayjs(currentDateTime))
        );

        setRemainingTime(countdownDuration.$d);
    };

    useEffect(() => {
        if (!countdownComplete) {
            const timer = setTimeout(() => {
                calculateRemainingTime(date);
            }, 1000);

            return () => clearTimeout(timer);
        }
    });

    let displayTime: Array<Object> = [];

    for (let key in remainingTime) {
        if (key === 'milliseconds') continue;

        displayTime.push(
            <li className='countdown__list-item' key={`countdown-${key}`}>
                <span className='countdown__list-item--number'>
                    {remainingTime[key]}
                </span>

                <span className='countdown__list-item--interval'>{key}</span>
            </li>
        );
    }

    return (
        <div>
            <ul className='countdown__list'>{displayTime}</ul>
        </div>
    );
};
