import React from 'react';
import { ReactSVG } from 'react-svg';

import { StyledAddButton } from './styles';
import addButton from '../../../assets/images/button-add.svg';

interface Props {
    handleClick?: (e?: React.ChangeEvent<HTMLInputElement> | any) => void;
}

export const AddButton: React.FC<Props> = ({ handleClick }) => {
    return (
        <StyledAddButton
            data-testid='add-button'
            onClick={(e) => {
                if (handleClick) {
                    handleClick(e);
                }
            }}
        >
            <ReactSVG src={addButton} />
        </StyledAddButton>
    );
};
