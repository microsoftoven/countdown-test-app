import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Modal from '../../_ui/Modal';
import { Input } from '../../_ui/Input';
import { Title } from '../../_ui/Title';

interface Props {
    onClose: () => void;
}

const DeadlineEditor: React.FC<Props> = ({ onClose }) => {
    return (
        <Modal
            onClose={() => {
                onClose();
            }}
        >
            <div>
                <Title text='new deadline' tag='h3' />

                <form>
                    <Input
                        type='text'
                        name='title'
                        label='Title'
                        handleChange={(e) => {
                            console.log(e.target.value);
                        }}
                    />

                    <Input
                        type='datetime-local'
                        name='datetime'
                        label='Date / Time'
                        handleChange={(e) => {
                            console.log(e.target.value);
                        }}
                    />

                    <button>Cancel</button>

                    <button>Save</button>

                    <button>Delete</button>
                </form>
            </div>
        </Modal>
    );
};

export default connect((state: RootState) => {
    return {};
})(DeadlineEditor);
