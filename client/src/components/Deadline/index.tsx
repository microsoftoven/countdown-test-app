import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import DeadlineEditor from '../_views/DeadlineEditor';
import Modal from '../_ui/Modal';
import { Page } from '../_layout/Page';
import { Title } from '../_ui/Title';
import { LoadingIndicator } from '../_ui/LoadingIndicator';

interface Props {
    fetchDeadline: (data: IDeadline) => void;
    match: any;
    activeDeadline?: DeadlineState;
}

const Deadline: React.FC<Props> = (props) => {
    const { activeDeadline, fetchDeadline } = props;
    let loading = true;

    const [deadlineID, setDeadlineID] = useState<any>(props.match.params.id);

    useEffect(() => {
        fetchDeadline({ _id: deadlineID });
    }, [deadlineID, fetchDeadline]);

    return (
        <Page>
            <Title tag='h1'>deadlines</Title>

            {/* {!activeDeadline?.success && <LoadingIndicator />} */}

            {loading && <LoadingIndicator />}

            {/* <button
                onClick={() => {
                    fetchDeadline({ id: deadlineID });
                }}
            >
                fetch deadline
            </button> */}

            {/* {deadlineList && (
                <StyledDeadlineList>{displayDeadlineList()}</StyledDeadlineList>
            )} */}

            {/* <AddButton handleClick={toggleModal} /> */}

            <Modal>{/* <DeadlineEditor /> */}</Modal>
        </Page>
    );
};

export default connect((state: RootState) => {
    return {
        activeDeadline: state.activeDeadline,
    };
}, actions)(Deadline);
