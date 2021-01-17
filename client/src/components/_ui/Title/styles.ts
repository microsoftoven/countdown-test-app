import styled from 'styled-components';

export const StyledTitle = styled.div`
    border-bottom: 1px solid
        ${(props) => props.theme.global?.primary_border_color || '#cccccc'};
    color: ${(props) => props.theme.global?.primary_text_color || '#222222'};
    margin: 0 0 30px;
    text-align: center;

    h2 {
        font-size: 40px;
        margin: 20px 0 12px;
    }

    h3 {
        font-size: 28px;
        font-weight: 600;
        margin: 20px 0 12px;
    }
`;
