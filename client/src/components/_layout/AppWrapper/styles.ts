import styled from 'styled-components';
import bgMobile from '../../../assets/images/bg-mobile.png';
// import bgDesktop from '../../../assets/images/bg-desktop.png';
import bgDesktopTop from '../../../assets/images/bg-desktop-top.png';
import bgDesktopBottom from '../../../assets/images/bg-desktop-bottom.png';

export const StyledAppWrapper = styled.section`
    background: ${(props) => props.theme.global.body_color || '#FFFFFF'};
    background-image: url(${bgDesktopTop}), url(${bgDesktopBottom});
    background-position: top right, bottom left;
    background-size: 600px;
    background-repeat: no-repeat;
    background-attachment: scroll;
    color: ${(props) => props.theme.text.primary_text_color || '#222222'};
    display: flex;
    flex-direction: column;
    font-family: ${(props) =>
        props.theme.primary_font_family.regular || 'sans-serif'};
    min-height: 100vh;

    @media screen and (min-width: 768px) {
        background-position: top center, bottom center;
        background-size: 100%;
    }

    &,
    * {
        box-sizing: border-box;
    }
`;
