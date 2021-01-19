import styled from 'styled-components';

export const StyledDisplayDate = styled.div`
    font-size: 20px;
    margin: 0 0 40px;
    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: 30px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 40px;
    }
`;

export const StyledDeadlineContent = styled.div`
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: center;

    @media screen and (min-width: 768px) {
        margin: 0 0 60px;
    }
`;
