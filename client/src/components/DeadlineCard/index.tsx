import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import {
    StyledDeadlineCard,
    StyledDeadlineDate,
    StyledDeadlineTitle,
} from './styles';

interface Props extends IDeadline {}

export const DeadlineCard: React.FC<Props> = ({
    _id,
    timestamp,
    title,
    userID,
}) => {
    let date = dayjs(timestamp).format('MMMM D, YYYY h:mma');
    return (
        <StyledDeadlineCard>
            <Link to={`/deadlines/${_id}`}>
                <StyledDeadlineDate>{date}</StyledDeadlineDate>

                <StyledDeadlineTitle>{title}</StyledDeadlineTitle>
            </Link>
        </StyledDeadlineCard>
    );
};
