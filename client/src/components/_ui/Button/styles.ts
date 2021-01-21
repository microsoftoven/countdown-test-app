import styled from 'styled-components';

export const StyledButton = styled.button`
    -webkit-appearance: none;
    border: 3px solid transparent;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    max-height: 50px;
    padding: 12px 18px;
    transition: all 0.15s ease-in-out;

    &.primary {
        background-color: ${(props) =>
            props.theme.buttons?.primary_button_background_color || 'blue'};
        border-color: ${(props) =>
            props.theme.buttons?.primary_button_border_color || 'blue'};
        border-radius: ${(props) =>
            props.theme.buttons?.primary_button_border_radius + 'px' || '10px'};
        color: ${(props) =>
            props.theme.buttons?.primary_button_text_color || '#FFFFFF'};

        &:hover,
        &:focus {
            outline: none;
            background-color: ${(props) =>
                props.theme.buttons?.primary_button_text_color || '#FFFFFF'};
            color: ${(props) =>
                props.theme.buttons?.primary_button_background_color || 'blue'};
        }
    }

    &.secondary {
        background-color: ${(props) =>
            props.theme.buttons?.secondary_button_background_color ||
            '#777777'};
        border-color: ${(props) =>
            props.theme.buttons?.secondary_button_border_color || '#777777'};
        border-radius: ${(props) =>
            props.theme.buttons?.secondary_button_border_radius + 'px' ||
            '10px'};
        color: ${(props) =>
            props.theme.buttons?.secondary_button_text_color || '#FFFFFF'};

        &:hover,
        &:focus {
            outline: none;
            background-color: ${(props) =>
                props.theme.buttons?.secondary_button_text_color || '#FFFFFF'};
            color: ${(props) =>
                props.theme.buttons?.secondary_button_background_color ||
                'blue'};
        }
    }

    &.knockout {
        background-color: ${(props) =>
            props.theme.buttons?.knockout_button_background_color || '#FFFFFF'};
        border-color: ${(props) =>
            props.theme.buttons?.knockout_button_border_color || 'blue'};
        border-radius: ${(props) =>
            props.theme.buttons?.knockout_button_border_radius + 'px' ||
            '10px'};
        color: ${(props) =>
            props.theme.buttons?.knockout_button_text_color || 'blue'};

        &:hover,
        &:focus {
            outline: none;
            background-color: ${(props) =>
                props.theme.buttons?.knockout_button_text_color || '#FFFFFF'};
            color: '#FFFFFF';
        }
    }

    &.danger {
        background-color: red;
        color: #ffffff;
        border-color: red;
        border-radius: ${(props) =>
            props.theme.buttons?.primary_button_border_radius + 'px' || '10px'};

        &:hover,
        &:focus {
            outline: none;
            background-color: #ffffff;
            color: red;
        }

        &.pending {
            background-color: red !important;
        }
    }

    &.pending {
        &,
        &:focus,
        &:active {
            background-color: ${(props) =>
                props.theme.buttons?.primary_button_background_color || 'blue'};
            pointer-events: none;
            padding: 8px 20px;
        }
    }

    &.success,
    &.success:focus,
    &.success:active {
        background-color: #49c02b;
        border-color: #49c02b;
        color: #ffffff;
        cursor: normal;
        pointer-events: none;
    }
`;
