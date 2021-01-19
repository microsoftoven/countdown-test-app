import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { DateTimePicker } from '@atlaskit/datetime-picker';
import { InputWrapper } from '../_ui/InputWrapper';
import { Title } from '../_ui/Title';
import { Button } from '../_ui/Button';
import { StyledModalButtonWrapper } from '../_ui/Modal/styles';

interface Props {
    onCancel?: () => void;
    addDeadline: (data: IDeadline) => void;
    resetDeadline: () => void;
    // updateModal: (data: IModal) => void;
    user: UserState;
    activeDeadline?: DeadlineState;
    type?: 'add' | 'edit';
}

const DeadlineEditor: React.FC<Props> = ({
    onCancel,
    addDeadline,
    resetDeadline,
    activeDeadline,
    user,
    // updateModal,
}) => {
    const [title, setTitle] = useState<string | undefined>(undefined);
    const [datetime, setDatetime] = useState<string>(new Date().toISOString());
    const [currentDatetime, setCurrentDatetime] = useState<string>(
        new Date().toISOString()
    );
    const [titleError, setTitleError] = useState<boolean>(false);
    const [dateError, setDateError] = useState<boolean>(false);

    useEffect(() => {
        title === '' ? setTitleError(true) : setTitleError(false);
    }, [title]);

    useEffect(() => {
        datetime === '' || datetime < currentDatetime
            ? setDateError(true)
            : setDateError(false);
    }, [datetime, currentDatetime]);

    useEffect(() => {
        clearState();

        return () => {
            // console.log('clearing deadline modal');
            setTimeout(() => {
                resetDeadline();
            }, 150);
        };
    }, [resetDeadline]);

    const clearState = () => {
        setTitle(undefined);
        setDatetime(new Date().toISOString());
        setTitleError(false);
        setDateError(false);
    };

    return (
        <div>
            <Title tag='h3'>new deadline</Title>

            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (!titleError && !dateError && user._id) {
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
                        onChange={(e) => setTitle(e.target.value)}
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
                            setCurrentDatetime(new Date().toISOString());
                            setDatetime(new Date(value).toISOString());
                        }}
                    />
                </InputWrapper>

                <StyledModalButtonWrapper>
                    <Button
                        text='cancel'
                        type='button'
                        buttonStyle='secondary'
                        handleClick={(e) => {
                            // updateModal({ show: false });
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
        </div>
    );
};

export default connect((state: RootState) => {
    return {
        user: state.user,
        activeDeadline: state.activeDeadline,
    };
}, actions)(DeadlineEditor);
