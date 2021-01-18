import styled from 'styled-components';

export const StyledCountdownWrapper = styled.div`
    text-align: center;
`;

export const StyledCountdown = styled.div`
    background-color: #ffffff;
    border-radius: 16px;
    // box-shadow: 0 0 12px rgba(0, 0, 0, 0.13);
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        padding: 20px;
    }
`;

export const StyledCountdownItem = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 33.3333%;

    @media screen and (min-width: 768px) {
        padding: 15px;
        width: 100%;
    }

    &.hide {
        display: none;
    }
`;

export const StyledCountdownRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledNumber = styled.span`
    font-size: 30px;
    font-weight: 700;
`;

export const StyledDuration = styled.span`
    font-size: 16px;

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`;

// TODO:
export const StyledCountdownDone = styled.div`
    color: green;
`;
