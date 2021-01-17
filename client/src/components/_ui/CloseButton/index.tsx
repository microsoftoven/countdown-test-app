import React from 'react';
import { StyledCloseSVG, StyledCloseButton } from './styles';

interface Props {
    handleClick: () => void;
}

export const CloseButton: React.FC<Props> = ({ handleClick }) => {
    return (
        <StyledCloseButton
            onClick={(e) => {
                handleClick();
            }}
            className='close-btn'
        >
            <StyledCloseSVG
                width='30'
                height='30'
                viewBox='0 0 44 44'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M43.151 1.69607C44.2155 2.76055 44.2155 4.48642 43.151 5.55091L26.0795 22.6224L43.7016 40.2445C44.7661 41.309 44.7661 43.0349 43.7016 44.0993C42.6371 45.1638 40.9113 45.1638 39.8468 44.0993L22.2246 26.4772L5.15321 43.5486C4.08872 44.6131 2.36285 44.6131 1.29836 43.5486C0.233878 42.4841 0.233878 40.7583 1.29836 39.6938L18.3698 22.6224L1.84902 6.10162C0.784529 5.03714 0.784529 3.31127 1.84902 2.24678C2.9135 1.1823 4.63938 1.1823 5.70386 2.24678L22.2246 18.7675L39.2961 1.69607C40.3606 0.631584 42.0865 0.631584 43.151 1.69607Z'
                />
            </StyledCloseSVG>
        </StyledCloseButton>
    );
};
