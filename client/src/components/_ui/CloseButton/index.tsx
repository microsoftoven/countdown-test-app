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
                    d='M42.3941 1.08301C43.8381 2.52703 43.8381 4.86824 42.3941 6.31226L26.9678 21.7386L42.917 37.6877C44.361 39.1318 44.361 41.473 42.917 42.917C41.473 44.361 39.1318 44.361 37.6877 42.917L21.7385 26.9678L6.31226 42.394C4.86825 43.8381 2.52703 43.8381 1.08301 42.394C-0.361004 40.95 -0.361004 38.6088 1.08301 37.1648L16.5093 21.7386L1.6059 6.8352C0.161882 5.39119 0.161882 3.04998 1.6059 1.60596C3.04992 0.161943 5.39113 0.161943 6.83515 1.60596L21.7385 16.5093L37.1648 1.08301C38.6089 -0.361004 40.9501 -0.361004 42.3941 1.08301Z'
                />
            </StyledCloseSVG>
        </StyledCloseButton>
    );
};
