import styled from 'styled-components';

export const StyledAddButton = styled.button`
    -webkit-appearance: none;
    background-color: ${(props) =>
        props.theme.buttons?.primary_button_background_color || 'blue'};
    border: 3px solid
        ${(props) => props.theme.buttons?.primary_button_border_color || 'blue'};
    border-radius: 50px;
    color: ${(props) =>
        props.theme.buttons?.primary_button_text_color || '#FFFFFF'};
    cursor: pointer;
    height: 65px;
    padding: 0;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 65px;
    transition: all 0.15s ease-in-out;

    @media screen and (min-width: 768px) {
        bottom: 30px;
        height: 80px;
        right: 30px;
        width: 80px;
    }

    &,
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    svg {
        height: 30px;
        width: 30px;

        @media screen and (min-width: 768px) {
            height: 35px;
            width: 35px;
        }

        path {
            stroke: #ffffff;
            transition: stroke 0.15s ease-in-out;
        }
    }

    &:hover,
    &:focus {
        outline: none;
        background-color: ${(props) =>
            props.theme.buttons?.primary_button_text_color || '#FFFFFF'};
        color: ${(props) =>
            props.theme.buttons?.primary_button_background_color || 'blue'};

        svg path {
            stroke: ${(props) =>
                props.theme.buttons?.primary_button_background_color || 'blue'};
        }
    }
`;
