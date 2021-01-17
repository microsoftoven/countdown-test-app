import styled from 'styled-components';

export const StyledCloseSVG = styled.svg`
    path {
        fill: #777777;
        transition: fill 0.15s ease-in-out;
    }
`;

export const StyledCloseButton = styled.button`
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    padding: 10px;

    &:focus {
        outline: none;
    }

    &:hover path {
        fill: #f22702;
    }
`;
