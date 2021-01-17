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
    justify-content: space-between;

    &,
    .ctdn__logo {
        color: ${(props) => props.theme.text?.primary_text_color || '#222222'};
        align-items: center;
        display: flex;

        img {
            margin: 0 20px 0 0;
        }
    }

    .ctdn__logo {
        font-size: 20px;
        text-decoration: none;

        @media screen and (min-width: 768px) {
            font-size: 30px;
        }
    }
`;

export const StyledLogoHeader = styled.a`
    display: inline-block;
    text-decoration: none;
`;

export const AppLogo = styled.img`
    height: 36px;
    width: 36px;

    @media screen and (min-width: 768px) {
        height: 46px;
        width: 46px;
    }
`;
