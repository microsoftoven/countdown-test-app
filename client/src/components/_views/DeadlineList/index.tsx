import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import * as actions from '../../../actions';

import { StyledDeadlineList } from './styles';
import DeadlineEditor from '../DeadlineEditor';
import Modal from '../../_ui/Modal';
import { Page } from '../../_layout/Page';
import { AddButton } from '../../_ui/AddButton';
import { Title } from '../../_ui/Title';
import { DeadlineCard } from '../../DeadlineCard';

interface Props {
    fetchDeadlineList: () => void;
    updateModal: (data: IModal) => void;
    deadlineList: IDeadlineList;
}

const DeadlineList: React.FC<Props> = ({
    fetchDeadlineList,
    deadlineList,
    updateModal,
}) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [listPage, setListPage] = useState<number>(1);

    const dispatch = useDispatch();

    const toggleModal = () => {
        setShowModal(true);
        updateModal({ show: true });
    };

    useEffect(() => {
        fetchDeadlineList();

        // do pagination

        return () => {
            // do cleanup
        };
    }, []);

    useEffect(() => {
        // fetch paged deadlines
    }, [listPage]);

    const displayDeadlineList = () => {
        let result: Array<Object> = [];

        if (deadlineList.deadlines) {
            result = deadlineList.deadlines.map((deadline: IDeadline, i) => {
                return <DeadlineCard key={`deadline-${i}`} {...deadline} />;
            });
        }

        return result;
    };

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
                <StyledDeadlineList>{displayDeadlineList()}</StyledDeadlineList>
            )}

            <AddButton handleClick={toggleModal} />

            <Modal>
                <DeadlineEditor />
            </Modal>
        </Page>
    );
};

export default connect((state: RootState) => {
    return {
        deadlineList: state.deadlineList,
    };
}, actions)(DeadlineList);
