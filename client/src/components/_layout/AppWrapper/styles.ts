import styled from 'styled-components';

export const StyledAppWrapper = styled.section`
    background: ${(props) => props.theme.global.body_color || '#FFFFFF'};
    min-height: 100vh;
`;
