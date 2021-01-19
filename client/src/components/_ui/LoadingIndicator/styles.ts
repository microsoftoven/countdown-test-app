import styled from 'styled-components';

export const StyledLoadingIndicator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    &.fullscreen {
        height: 100vh;
    }
`;
