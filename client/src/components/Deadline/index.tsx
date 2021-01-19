import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import dayjs from 'dayjs';

import { StyledDisplayDate, StyledDeadlineContent } from './styles';

import DeadlineEditor from '../DeadlineEditor';
import { PageFlexColumn } from '../_layout/Page';
import { Title } from '../_ui/Title';
import { LoadingIndicator } from '../_ui/LoadingIndicator';
import { Countdown } from '../Countdown';
import { AddButton } from '../_ui/AddButton';
import { FadeInSlideUp } from '../_utilities/animations';

interface Props {
    fetchDeadline: (data: IDeadline) => void;
    match: any;
    activeDeadline: DeadlineState;
}

const Deadline: React.FC<Props> = (props) => {
    const { activeDeadline, fetchDeadline } = props;
    const [deadlineID, setDeadlineID] = useState<any>(props.match.params.id);

    useEffect(() => {
        fetchDeadline({ _id: deadlineID });
    }, [deadlineID, fetchDeadline]);

    if (activeDeadline.deadline.timestamp) {
        return (
            <PageFlexColumn>
                <Title tag='h1'>{activeDeadline.deadline.title}</Title>

                <StyledDeadlineContent>
                    <div>
                        <FadeInSlideUp animationDelay='.05s'>
                            <StyledDisplayDate>
                                {dayjs(
                                    activeDeadline.deadline.timestamp
                                ).format('MMMM D, YYYY h:mma')}
                            </StyledDisplayDate>
                        </FadeInSlideUp>

                        <FadeInSlideUp animationDelay='.1s'>
                            <Countdown
                                date={
                                    new Date(activeDeadline.deadline.timestamp)
                                }
                            />
                        </FadeInSlideUp>

                        <AddButton handleClick={() => {}} />
                    </div>
                </StyledDeadlineContent>
            </PageFlexColumn>
        );
    } else {
        return <LoadingIndicator />;
    }
};

export default connect((state: RootState) => {
    return {
        activeDeadline: state.activeDeadline
            ? state.activeDeadline
            : { success: false, pending: false, deadline: {} },
    };
}, actions)(Deadline);
