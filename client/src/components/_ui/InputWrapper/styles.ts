import styled from 'styled-components';

// "font_size": null,
// "font_color": null,
// "font_family": null,
// "border_color": null,
// "field_height": 48,
// "border_radius": null,
// "background_color": "#ffeeeb",
// "placeholder_color": "#f22702"

export const StyledInputContainer = styled.div`
    margin: 0 0 30px;

    input,
    & > div {
        background-color: ${(props) =>
            props.theme.forms?.background_color || '#EEEEEE'};
        border: 1px solid
            ${(props) => props.theme.forms?.border_color || 'transparent'};
        border-radius: ${(props) => props.theme.forms?.border_radius || '8px'};
        color: ${(props) => props.theme.forms?.font_color || '#222222'};
        font-size: ${(props) => props.theme.forms?.font_size || '18px'};
        font-family: ${(props) =>
            props.theme.forms?.font_family || 'sans-serif'};
        height: ${(props) => props.theme.forms?.field_height + 'px' || 'auto'};
        transition: box-shadow 0.15s ease-in-out, border 0.15s ease-in-out;
    }

    &.invalid {
        & > input,
        & > div {
            border: 1px solid #f22702;
        }
    }

    & > div {
        padding-left: 15px;
    }

    div[class$='-ValueContainer'] {
        &,
        & * {
            margin: 0;
            padding: 0;
            max-height: ${(props) =>
                props.theme.forms?.field_height + 'px' || 'auto'};
        }
    }

    input {
        display: block;
        padding: 0 15px;
        width: 100%;

        ::placeholder {
            color: ${(props) =>
                props.theme.forms?.placeholder_color || '#777777'};
        }

        &:focus {
            outline: none;
        }
    }

    p {
        color: #f22702;
        font-weight: bold;
        font-size: 14px;
        font-style: italic;
    }
`;

export const StyledLabel = styled.label`
    color: ${(props) => props.theme.forms?.font_color || '#222222'};
    display: block;
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 10px;
`;
