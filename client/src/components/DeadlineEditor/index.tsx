import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Modal } from '../_ui/Modal';
import { DateTimePicker } from '@atlaskit/datetime-picker';
import { InputWrapper } from '../_ui/InputWrapper';
import { Redirect } from 'react-router-dom';
import { Title } from '../_ui/Title';
import { Button } from '../_ui/Button';
import {
    StyledModalButtonWrapper,
    StyledModalButtonSpacer,
} from '../_ui/Modal/styles';

interface Props {
    onCancel?: () => void;
    addDeadline: (data: IDeadline) => void;
    resetDeadline: () => void;
    fetchDeadline: (data: IDeadline) => void;
    updateDeadline: (data: IDeadline) => void;
    user: UserState;
    activeDeadline?: DeadlineState;
    action: 'add' | 'edit';
    match: any;
}

const DeadlineEditor: React.FC<Props> = (props) => {
    const {
        addDeadline,
        activeDeadline,
        user,
        resetDeadline,
        fetchDeadline,
        updateDeadline,
    } = props;

    const [deadlineID, setDeadlineID] = useState<string>('');
    const [formAction, setFormAction] = useState<string>('add');
    const [editMode, setEditMode] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(true);
    const [redirect, setRedirect] = useState<string | null>(null);

    const [title, setTitle] = useState<string>('');
    const [datetime, setDatetime] = useState<string>(new Date().toISOString());
    const [currentDatetime, setCurrentDatetime] = useState<string>(
        new Date().toISOString()
    );
    const [titleError, setTitleError] = useState<boolean>(false);
    const [dateError, setDateError] = useState<boolean>(false);

    const runCleanup = useCallback(() => {
        setTitle('');
        setDatetime(new Date().toISOString());
        setTitleError(false);
        setDateError(false);
        setEditMode(false);
        resetDeadline();
    }, [resetDeadline]);

    const handleClose = useCallback(() => {
        let destination = activeDeadline?.redirectOnSave
            ? activeDeadline.redirectOnSave
            : window.location.pathname.replace(formAction, '');

        setModalVisible(false);

        setTimeout(() => {
            runCleanup();
            setRedirect(destination);
        }, 150);
    }, [formAction, runCleanup, activeDeadline?.redirectOnSave]);

    useEffect(() => {
        if (props.match.params.id) {
            setDeadlineID(props.match.params.id);
        }

        if (props.match.params.action === 'edit') {
            setFormAction('edit');
            setEditMode(true);
            fetchDeadline({ _id: deadlineID });
        }
    }, [props.match.params]);

    useEffect(() => {
        if (editMode && activeDeadline?.deadline) {
            const deadline: IDeadline = { ...activeDeadline?.deadline };

            if (deadline.title && deadline.timestamp) {
                setTitle(deadline.title);
                setCurrentDatetime(new Date(deadline.timestamp).toISOString());
                setDatetime(new Date(deadline.timestamp).toISOString());
            }
        }
    }, [editMode, activeDeadline?.deadline]);

    useEffect(() => {
        datetime === '' || datetime < currentDatetime
            ? setDateError(true)
            : setDateError(false);
    }, [datetime, currentDatetime]);

    useEffect(() => {
        // if (
        //     activeDeadline?.redirectOnSave &&
        //     activeDeadline?.redirectOnSave !== deadlineID
        // ) {
        //     setRedirect(activeDeadline.redirectOnSave);
        // } else if

        if (activeDeadline?.success) {
            setTimeout(() => {
                handleClose();
            }, 1000);
        }
    }, [activeDeadline, handleClose]);

    if (redirect) {
        return <Redirect push to={redirect} />;
    }

    return (
        <Modal onClose={handleClose} isVisible={modalVisible}>
            <Title tag='h3'>{formAction} deadline</Title>

            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (titleError || title === '' || dateError || !user._id) {
                        return;
                    }

                    let payload: IDeadline = {
                        userID: user._id,
                        title: title,
                        timestamp: datetime,
                    };

                    if (editMode) {
                        payload._id = deadlineID;
                        updateDeadline(payload);
                    } else {
                        payload.redirectOnSave =
                            deadlineID !== '' ? 'redirect' : null;
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
                        value={datetime}
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
                    {editMode && (
                        <Button
                            text='delete'
                            type='button'
                            buttonStyle='danger'
                            handleClick={(e) => {
                                console.log('delete me!');
                            }}
                        />
                    )}

                    <StyledModalButtonSpacer />

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
            </form>
        </Modal>
    );
};

export default connect((state: RootState) => {
    return {
        user: state.user,
        activeDeadline: state.activeDeadline
            ? state.activeDeadline
            : {
                  success: false,
                  pending: false,
                  deadline: {
                      title: '',
                      timestamp: '',
                  },
              },
    };
}, actions)(DeadlineEditor);
