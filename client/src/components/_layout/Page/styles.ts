import styled from 'styled-components';

export const StyledPage = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    max-width: 700px;
    padding: 60px 20px;
    width: 100%;

    @media screen and (min-width: 768px) {
        padding: 30px;
    }
`;

export const StyledPageAlignCenter = styled(StyledPage)`
    display: flex;
    align-items: center;

    & > div {
        width: 100%;
    }
`;
