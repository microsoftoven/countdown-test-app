import { Location } from 'history';
import React from 'react';
import { Button } from '../../_ui/Button';

interface Props {
    text: string;
    handleClick: () => void;
}

export const AddButton: React.FC<Props> = ({ text, handleClick }) => {
    return (
        <Button handleClick={handleClick} buttonType='primary' text={text} />
    );
};
