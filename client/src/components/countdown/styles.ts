import styled from 'styled-components';

export const StyledCountdownWrapper = styled.div`
    text-align: center;
`;

export const StyledCountdown = styled.div`
    background-color: #ffffff;
    border-radius: 16px;
    border: 1px solid
        ${(props) => props.theme.global?.primary_border_color || '#eeeeee'};
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 240px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        min-width: 0px;
        padding: 20px;
    }
`;

export const StyledCountdownComplete = styled(StyledCountdown)`
    align-items: center;
    height: 75px;
    justify-content: center;
    margin: 0 auto;
    min-width: 0;
    width: 75px;
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

export const StyledCountdownCompleteMessage = styled.p`
    color: #49c02b;
    font-size: 20px;
    font-weight: 700;

    @media screen and (min-width: 768px) {
        font-size: 25px;
    }
`;
