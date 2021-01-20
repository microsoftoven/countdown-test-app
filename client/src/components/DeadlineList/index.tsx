import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

import { StyledDeadlineList, StyledEmptyMessage } from './styles';
import { Page } from '../_layout/Page';
import { AddButton } from '../_ui/AddButton';
import { Title } from '../_ui/Title';
import { DeadlineCard } from '../DeadlineCard';
import { FadeInSlideUp, FadeIn } from '../_utilities/animations';
import { LoadingIndicator } from '../_ui/LoadingIndicator';

interface Props {
    fetchDeadlineList: () => void;
    deadlineList: IDeadlineList;
}

const DeadlineList: React.FC<Props> = ({ fetchDeadlineList, deadlineList }) => {
    useEffect(() => {
        fetchDeadlineList();
    }, []);

    let deadlines: Array<Object> = [];

    if (deadlineList.deadlines) {
        deadlines = deadlineList.deadlines.map((deadline: IDeadline, i) => {
            return (
                <FadeInSlideUp
                    animationDelay={`${i * 0.05}s`}
                    key={deadline._id}
                >
                    <DeadlineCard key={`deadline-${i}`} {...deadline} />
                </FadeInSlideUp>
            );
        });
    }

    if (deadlineList.pending) {
        return <LoadingIndicator />;
    }

    return (
        <Page>
            <Title
                tag='h1'
                sticky={true}
                handleClick={() => {
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                }}
            >
                deadlines
            </Title>

            {deadlines.length > 0 && (
                <FadeIn animationDelay='.1s'>
                    <StyledDeadlineList>{deadlines}</StyledDeadlineList>
                </FadeIn>
            )}

            {deadlines.length <= 0 && (
                <StyledEmptyMessage>
                    <h3>
                        No deadlines to display. Add a deadline to get started!
                    </h3>
                </StyledEmptyMessage>
            )}

            <Link to='/deadlines/add'>
                <AddButton />
            </Link>
        </Page>
    );
};

export default connect((state: RootState) => {
    return {
        deadlineList: state.deadlineList,
    };
}, actions)(DeadlineList);
