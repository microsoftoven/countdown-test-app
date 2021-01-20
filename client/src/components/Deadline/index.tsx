import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import dayjs from 'dayjs';
import * as actions from '../../actions';

import {
    StyledDisplayDate,
    StyledDeadlineContent,
    StyledDeadlineEditButton,
} from './styles';

import { PageFlexColumn } from '../_layout/Page';
import { Title } from '../_ui/Title';
import { LoadingIndicator } from '../_ui/LoadingIndicator';
import { Countdown } from '../Countdown';
import { AddButton } from '../_ui/AddButton';
import { FadeInSlideUp, FadeIn } from '../_utilities/animations';
import { EditButton } from '../_ui/EditButton';

interface Props {
    fetchDeadline: (data: IDeadline) => void;
    match: any;
    activeDeadline: DeadlineState;
}

const Deadline: React.FC<Props> = (props) => {
    const { activeDeadline, fetchDeadline, match } = props;

    const [editorPath, setEditorPath] = useState<string>(
        window.location.pathname
    );

    useEffect(() => {
        let url = editorPath.substr(-1) === '/' ? editorPath : editorPath + '/';

        setEditorPath(url);
    }, [editorPath]);

    useEffect(() => {
        fetchDeadline({ _id: match.params.id });
    }, [match, fetchDeadline]);

    if (activeDeadline.deadline?.timestamp) {
        return (
            <PageFlexColumn>
                <FadeIn animationDelay='.075s'>
                    <Title tag='h1' className='ctdn__ctdn-title'>
                        {activeDeadline.deadline.title}

                        <StyledDeadlineEditButton>
                            <EditButton link={`${editorPath}edit`} />
                        </StyledDeadlineEditButton>
                    </Title>
                </FadeIn>

                <StyledDeadlineContent>
                    <div>
                        <FadeInSlideUp animationDelay='.1s'>
                            <StyledDisplayDate>
                                {dayjs(
                                    activeDeadline.deadline.timestamp
                                ).format('MMMM D, YYYY h:mma')}
                            </StyledDisplayDate>
                        </FadeInSlideUp>

                        <FadeInSlideUp animationDelay='.15s'>
                            <Countdown
                                date={
                                    new Date(activeDeadline.deadline.timestamp)
                                }
                            />
                        </FadeInSlideUp>

                        <Link to={`${editorPath}add`}>
                            <AddButton />
                        </Link>
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
