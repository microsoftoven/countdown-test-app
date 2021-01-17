import styled from 'styled-components';
import {
    fadeIn,
    fadeOut,
    slideUp,
    slideDown,
} from '../../_utilities/keyframes';

export const StyledModalWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;

    animation: ${fadeIn} 0.2s ease-in-out forwards;
    background-color: rgba(240, 240, 240, 0.74);
    backdrop-filter: blur(10px);
    bottom: 0;
    left: 0;
    opacity: 0;
    padding: 20px 20px 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;

    @media screen and (min-width: 768px) {
        align-items: center;
        padding: 20px;
    }

    & > div {
        animation: ${slideUp} 0.2s ease-in-out forwards;
        max-width: 600px;
        position: relative;
        width: 100%;
    }

    &.fadeModal {
        animation: ${fadeOut} 0.1s ease-in-out forwards;

        & > div {
            animation: ${slideDown} 0.1s ease-in-out forwards;
        }
    }

    .close-btn {
        position: absolute;
        right: 20px;
        top: 20px;

        @media screen and (min-width: 768px) {
            top: 30px;
            right: 30px;
        }
    }

    &,
    * {
        box-sizing: border-box;
    }
`;

export const StyledModal = styled.div`
    font-size: ${(props) => props.theme.modal?.font_size || '18px'};
    color: ${(props) => props.theme.modal?.font_color || '#222222'};
    font-family: ${(props) => props.theme.modal?.font_family || 'sans-serif'};
    border-color: ${(props) =>
        props.theme.modal?.border_color || 'transparent'};
    border-radius: ${(props) =>
        props.theme.modal?.border_radius || '24px 24px 0 0'};
    background-color: ${(props) =>
        props.theme.modal?.background_color || '#FFFFFF'};
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.13);
    padding: 60px 30px 30px;

    @media screen and (min-width: 768px) {
        border-radius: ${(props) => props.theme.modal?.border_radius || '24px'};
        padding: 60px 40px 40px;
    }
`;

export const StyledModalButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
        margin: 0 20px 0 0;

        &:last-of-type {
            margin: 0;
        }
    }
`;
