import styled from 'styled-components';

export const StyledDisplayDate = styled.div`
    font-size: 20px;
    margin: 0 0 24px;
    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: 30px;
        margin: 0 0 40px;
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

export const StyledDeadlineEditButton = styled.div`
    bottom: -40px;
    position: absolute;
    right: 0;

    @media screen and (min-width: 375px) {
        bottom: -50px;
    }

    &,
    div {
        font-size: 10px;
        height: 30px;
        width: 30px;
    }
`;
