import styled from 'styled-components';

export const StyledEditButton = styled.button`
    -webkit-appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;

    svg {
        font-size: 10px;
        height: 30px;
        width: 30px;
    }

    svg {
        path {
            fill: #888;
            transition: fill 0.15s ease-in-out;
        }
    }

    &:hover,
    &:focus,
    &:active {
        outline: none;

        svg path {
            fill: ${(props) =>
                props.theme.global?.primary_active_color || 'blue'};
        }
    }
`;
