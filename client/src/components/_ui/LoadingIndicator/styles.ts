import styled from 'styled-components';

export const StyledLoadingIndicator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;

    &.fullscreen {
        height: 100vh;
    }
`;
