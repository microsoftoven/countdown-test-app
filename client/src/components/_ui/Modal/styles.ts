import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: rgba(240, 240, 240, 0.74);
    backdrop-filter: blur(10px);
    bottom: 0;
    left: 0;
    opacity: 0;
    padding: 20px 20px 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: opacity 0.15s ease-in-out;
    z-index: 10;

    @media screen and (min-width: 768px) {
        align-items: center;
        padding: 20px;
    }

    & > div {
        max-width: 600px;
        position: relative;
        transform: translateY(5px);
        transition: transform 0.15s ease-in-out;
        width: 100%;
    }

    &.visible {
        opacity: 1;

        & > div {
            transform: translateY(0);
        }
    }

    .close-btn {
        position: absolute;
        right: 10px;
        top: 10px;

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
    padding: 60px 20px 30px;

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
