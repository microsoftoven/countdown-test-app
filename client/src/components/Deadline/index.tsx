import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import DeadlineEditor from '../_views/DeadlineEditor';
import Modal from '../_ui/Modal';
import { Page } from '../_layout/Page';
import { Title } from '../_ui/Title';
import { LoadingIndicator } from '../_ui/LoadingIndicator';
import { Countdown } from '../Countdown';
import { AddButton } from '../_ui/AddButton';

interface Props {
    fetchDeadline: (data: IDeadline) => void;
    updateModal: (data: IModal) => void;
    match: any;
    activeDeadline: DeadlineState;
}

const Deadline: React.FC<Props> = (props) => {
    const { activeDeadline, fetchDeadline, updateModal } = props;
    const [deadlineID, setDeadlineID] = useState<any>(props.match.params.id);
    const [deadline, setDeadline] = useState<IDeadline | null>(null);

    const toggleModal = () => {
        updateModal({ show: true });
    };

    useEffect(() => {
        fetchDeadline({ _id: deadlineID });
    }, [deadlineID, fetchDeadline]);

    useEffect(() => {}, []);

    console.log(activeDeadline);

    return <Page></Page>;

    // if (deadline !== null) {
    //     return (
    //         <Page>
    //             <Title tag='h1'>{deadline.title}</Title>

    //             <Countdown date={new Date()} />

    //             <AddButton handleClick={toggleModal} />

    //             <Modal>
    //                 <DeadlineEditor />
    //             </Modal>
    //         </Page>
    //     );
    // } else {
    //     return <LoadingIndicator />;
    // }
};

export default connect((state: RootState) => {
    return {
        activeDeadline: state.activeDeadline
            ? state.activeDeadline
            : { success: false, pending: false, deadline: {} },
    };
}, actions)(Deadline);
