import styled from 'styled-components';

export const StyledTitle = styled.div`
    border-bottom: 1px solid
        ${(props) => props.theme.global?.primary_border_color || '#cccccc'};
    color: ${(props) => props.theme.global?.primary_text_color || '#222222'};
    margin: 0 0 30px;
    text-align: center;

    h1 {
        margin: 0 0 20px;

        @media screen and (min-width: 768px) {
            font-size: 50px;
        }
    }

    h2 {
        font-size: 40px;
        margin: 20px 0 12px;
    }

    h3 {
        font-size: 28px;
        font-weight: 600;
        margin: 20px 0 12px;
    }

    &.clickable {
        cursor: pointer;
    }
`;

export const StickyTitle = styled.div`
    padding: 20px 0 0;
    position: sticky;
    top: 0;

    &::before {
        bottom: 0;
        content: '';
        display: block;
        background-color: ${(props) =>
            props.theme.global?.body_color || '#FFFFFF'};
        left: -20px;
        position: absolute;
        right: -20px;
        top: 0;
        z-index: -1;

        @media screen and (min-width: 768px) {
            border-radius: 20px 20px 0 0;
        }
    }
`;
