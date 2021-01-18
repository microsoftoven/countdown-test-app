import styled from 'styled-components';

export const StyledDeadlineCard = styled.li`
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.13);
    list-style-type: none;
    margin: 0 0 30px;
    padding: 15px;

    @media screen and (min-width: 768px) {
        padding: 20px;
    }

    a {
        text-decoration: none;
    }
`;

// F22702
export const StyledDeadlineDate = styled.div`
    color: ${(props) => props.theme.global?.primary_active_color || 'blue'};
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 20px;
`;

export const StyledDeadlineTitle = styled(StyledDeadlineDate)`
    color: ${(props) => props.theme.text?.primary_text_color || '#222222'};
    margin: 0;
`;
