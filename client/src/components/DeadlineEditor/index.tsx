import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Modal } from '../_ui/Modal';
import { DateTimePicker } from '@atlaskit/datetime-picker';
import { InputWrapper } from '../_ui/InputWrapper';
import { Redirect } from 'react-router-dom';
import { Title } from '../_ui/Title';
import { Button } from '../_ui/Button';
import { StyledModalButtonWrapper } from '../_ui/Modal/styles';

interface Props {
    onCancel?: () => void;
    addDeadline: (data: IDeadline) => void;
    resetDeadline: () => void;
    user: UserState;
    activeDeadline?: DeadlineState;
    action: 'add' | 'edit';
    match: any;
}

const DeadlineEditor: React.FC<Props> = (props) => {
    const { addDeadline, activeDeadline, user, resetDeadline } = props;

    const action = props.match.params.action
        ? props.match.params.action
        : 'add';

    const [modalVisible, setModalVisible] = useState<boolean>(true);
    const [redirect, setRedirect] = useState<string | null>(null);
    const [title, setTitle] = useState<string>('');
    const [datetime, setDatetime] = useState<string>(new Date().toISOString());
    const [currentDatetime, setCurrentDatetime] = useState<string>(
        new Date().toISOString()
    );
    const [titleError, setTitleError] = useState<boolean>(false);
    const [dateError, setDateError] = useState<boolean>(false);

    useEffect(() => {
        datetime === '' || datetime < currentDatetime
            ? setDateError(true)
            : setDateError(false);
    }, [datetime, currentDatetime]);

    useEffect(() => {
        if (activeDeadline?.success) {
            setTimeout(() => {
                handleClose();
            }, 2000);
        }
    }, [activeDeadline]);

    const handleClose = () => {
        let destination = window.location.pathname.replace(action, '');

        setModalVisible(false);

        setTimeout(() => {
            runCleanup();
            setRedirect(destination);
        }, 150);
    };

    const runCleanup = () => {
        setTitle('');
        setDatetime(new Date().toISOString());
        setTitleError(false);
        setDateError(false);
        resetDeadline();
    };

    if (redirect) {
        return <Redirect push to={redirect} />;
    }

    return (
        <Modal onClose={handleClose} isVisible={modalVisible}>
            <Title tag='h3'>new deadline</Title>

            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (!titleError && title !== '' && !dateError && user._id) {
                        let payload: IDeadline = {
                            userID: user._id,
                            title: title,
                            timestamp: datetime,
                        };

                        addDeadline(payload);
                    }
                }}
            >
                <InputWrapper
                    name='title'
                    label='Title'
                    error={titleError}
                    errorMessage='This field is required.'
                >
                    <input
                        value={title}
                        type='text'
                        name='title'
                        required
                        onChange={(e) => {
                            setTitle(e.target.value);

                            setTitleError(e.target.value === '' ? true : false);
                        }}
                    />
                </InputWrapper>

                <InputWrapper
                    name='timestamp'
                    label='Date / Time'
                    error={dateError}
                    errorMessage='Please select a date and time in the future.'
                >
                    <DateTimePicker
                        defaultValue={currentDatetime}
                        timeIsEditable
                        onChange={(value) => {
                            try {
                                setCurrentDatetime(new Date().toISOString());
                                setDatetime(new Date(value).toISOString());
                            } catch (e) {
                                console.log(e);
                            }
                        }}
                    />
                </InputWrapper>

                <StyledModalButtonWrapper>
                    <Button
                        text='cancel'
                        type='button'
                        buttonStyle='secondary'
                        handleClick={(e) => {
                            handleClose();
                        }}
                    />

                    <Button
                        text='save'
                        type='submit'
                        buttonStyle='primary'
                        pending={activeDeadline?.pending}
                        success={activeDeadline?.success}
                    />
                </StyledModalButtonWrapper>

                {/* <Button
                    text='delete'
                    type='danger'
                    handleClick={() => {
                        console.log('delete');
                    }}
                /> */}
            </form>
        </Modal>
    );
};

export default connect((state: RootState) => {
    return {
        user: state.user,
        activeDeadline: state.activeDeadline,
    };
}, actions)(DeadlineEditor);
