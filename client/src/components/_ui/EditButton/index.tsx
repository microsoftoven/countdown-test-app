import React from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import editButton from '../../../assets/images/button-edit.svg';

import { StyledEditButton } from './styles';

interface Props {
    handleClick?: () => void;
    link: string;
}

export const EditButton: React.FC<Props> = ({ handleClick, link }) => {
    return (
        <StyledEditButton
            onClick={() => {
                if (handleClick) {
                    handleClick();
                }
            }}
        >
            <Link to={link}>
                <ReactSVG src={editButton} />
            </Link>
        </StyledEditButton>
    );
};
