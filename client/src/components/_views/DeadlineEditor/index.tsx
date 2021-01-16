import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Modal } from '../../_ui/Modal';

interface Props {}

const DeadlineEditor: React.FC<Props> = () => {
    useEffect(() => {}, []);

    return (
        <Modal>
            <>
                <h2>Add Deadline</h2>

                <input type='text' placeholder='title' />

                <input type='text' placeholder='date' />

                <button>Cancel</button>

                <button>Save</button>

                <button>Delete</button>
            </>
        </Modal>
    );
};

export default connect((state: RootState) => {})(DeadlineEditor);
