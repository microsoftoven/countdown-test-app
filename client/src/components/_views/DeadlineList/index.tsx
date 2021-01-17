import React, { useState } from 'react';

import DeadlineEditor from '../DeadlineEditor';
import { AddButton } from '../../_ui/AddButton';

interface Props {}

export const DeadlineList: React.FC<Props> = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [activeDeadline, setActiveDeadline] = useState<string | null>(null);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <h2>deadlines</h2>

            <ul>
                <li>Deadline 1</li>
                <li>Deadline 2</li>
                <li>Deadline 3</li>
            </ul>

            <AddButton text='Add Deadline' handleClick={toggleModal} />

            {showModal && <DeadlineEditor onClose={toggleModal} />}
        </div>
    );
};
