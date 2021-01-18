import styled from 'styled-components';

// export const StyledHeader = styled.div`
//   background: ${props => props.theme.global.body_color};
// `;

export const StyledHeader = styled.div`
    padding: 20px;

    @media screen and (min-width: 768px) {
        padding: 30px;
    }
`;

export const StyledNav = styled.nav`
    align-items: center;
    color: ${(props) => props.theme.text?.primary_text_color || '#222222'};
    display: flex;
    justify-content: space-between;

    a {
        text-decoration: none;
    }
`;

export const StyledTitleContainer = styled.div`
    align-items: center;
    color: ${(props) => props.theme.text?.primary_text_color || '#222222'};
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    text-decoration: none;

    @media screen and (min-width: 768px) {
        font-size: 30px;
    }
`;

export const StyledTitle = styled.div`
    text-decoration: none;

    span {
        font-weight: 700;
    }
`;

export const AppLogo = styled.img`
    height: 36px;
    margin: 0 20px 0 0;
    width: 36px;

    @media screen and (min-width: 768px) {
        height: 46px;
        width: 46px;
    }
`;

export const StyledMenu = styled.ul`
    margin: 0;
    padding: 0;

    li {
        display: inline-block;
        list-style-type: none;
    }
`;

export const StyledMenuItem = styled.li`
    margin: 0 0 0 30px;

    a {
        color: ${(props) => props.theme.text?.primary_text_color || '#222222'};
        font-weight: 700;
        transition: color 0.15s ease-in-out;

        &:hover {
            color: ${(props) =>
                props.theme.global?.primary_active_color || 'blue'};
        }
    }
`;

export const SignInButtonWrapper = styled.div`
    #path-1 {
        fill: #ffffff;
        transition: fill 0.15s ease-in-out;
    }

    &:hover {
        #path-1 {
            fill: #eeeeee;
        }
    }
`;
