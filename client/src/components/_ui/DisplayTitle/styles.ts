import styled from 'styled-components';

export const StyledTitle = styled.h1`
    border-bottom: 1px solid
        ${(props) => props.theme.global?.primary_border_color || '#cccccc'};
    color: ${(props) => props.theme.global?.primary_text_color || '#222222'};
    font-size: 12.5vw;
    font-weight: 500;
    line-height: 1;
    margin: 0 0 20px;
    padding: 0 0 19px;
    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: 100px;
    }

    span {
        font-weight: 700;
    }
`;
