import styled from 'styled-components';

export const StyledDeadlineCard = styled.li`
    background-color: #ffffff;
    border-radius: 16px;
    border: 1px solid
        ${(props) => props.theme.global?.primary_border_color || '#eeeeee'};
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: flex;
    list-style-type: none;
    margin: 0 0 30px;
    transition: box-shadow 0.15s ease-in-out;

    &:hover {
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
    }

    a {
        display: block;
        flex-grow: 1;
        padding: 15px;
        text-decoration: none;

        @media screen and (min-width: 768px) {
            padding: 20px;
        }
    }
`;

// F22702
export const StyledDeadlineDate = styled.div`
    color: ${(props) => props.theme.global?.primary_active_color || 'blue'};
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 12px;
`;

export const StyledDeadlineTitle = styled(StyledDeadlineDate)`
    color: ${(props) => props.theme.text?.primary_text_color || '#222222'};
    margin: 0;
`;

export const StyledDeadlineCardEditButton = styled.div`
    a,
    button {
        height: 100%;
    }

    a {
        display: flex;
        align-items: flex-end;

        @media screen and (min-width: 375px) {
            align-items: center;
        }

        @media screen and (min-width: 768px) {
            padding: 30px;
        }
    }
`;
