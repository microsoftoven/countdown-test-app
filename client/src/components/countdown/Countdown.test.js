import { render, screen } from '@testing-library/react';
import dayjs from 'dayjs';
import { Countdown } from './index';

const duration = require('dayjs/plugin/duration');
dayjs.extend(duration);

test('countdown renders correct time', async () => {
    let date = new Date();
    date.setMonth(date.getMonth() + 1);

    const remainingTime = dayjs.duration(
        dayjs(date).subtract(1, 'millisecond').diff(dayjs(new Date()))
    ).$d;

    render(<Countdown date={date} noTimeout={true} />);

    for (let key in remainingTime) {
        if (key === 'milliseconds') continue;

        const timer = document.querySelector(`.${key}`);

        expect(remainingTime[key].toString()).toStrictEqual(
            timer.dataset.number.toString()
        );
    }
});

test('countdown displays as complete when timer reaches zero', async () => {
    let date = new Date();
    date.setMonth(date.getMonth() - 1);

    render(<Countdown date={date} />);

    const countdown = await screen.findByTestId('countdown-complete');
    expect(countdown).toBeInTheDocument();
});
