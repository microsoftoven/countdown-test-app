import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import {
    StyledDeadlineCard,
    StyledDeadlineDate,
    StyledDeadlineTitle,
    StyledDeadlineCardEditButton,
} from './styles';

import { EditButton } from '../_ui/EditButton';

interface Props extends IDeadline {}

export const DeadlineCard: React.FC<Props> = ({
    _id,
    timestamp = new Date().toString(),
    title,
    userID,
}) => {
    // let date = dayjs(timestamp).format('MMMM D, YYYY h:mma');
    let complete = new Date() > new Date(timestamp) ? true : false;

    return (
        <StyledDeadlineCard
            className={classNames({
                complete: complete,
            })}
        >
            <Link to={`/deadline/${_id}`}>
                <StyledDeadlineDate
                    className={classNames({
                        complete: complete,
                    })}
                >
                    {dayjs(timestamp).format('MMMM D, YYYY h:mma')}
                    {complete && <span> (Complete)</span>}
                </StyledDeadlineDate>

                <StyledDeadlineTitle>{title}</StyledDeadlineTitle>
            </Link>

            <StyledDeadlineCardEditButton>
                <EditButton link={`/deadlines/${_id}/edit`} />
            </StyledDeadlineCardEditButton>
        </StyledDeadlineCard>
    );
};
