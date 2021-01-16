import styled from 'styled-components';

// export const StyledHeader = styled.div`
//   background: ${props => props.theme.global.body_color};
// `;

export const StyledHeader = styled.div`
    padding: 20px;

    @media screen and (min-width: 768px) {
        padding: 46px;
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
