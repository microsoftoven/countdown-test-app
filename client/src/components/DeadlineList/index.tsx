import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

import { StyledDeadlineList } from './styles';
import { Page } from '../_layout/Page';
import { AddButton } from '../_ui/AddButton';
import { Title } from '../_ui/Title';
import { DeadlineCard } from '../DeadlineCard';
import { FadeInSlideUp } from '../_utilities/animations';

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

            {deadlineList && (
                <StyledDeadlineList>{deadlines}</StyledDeadlineList>
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