import styled from 'styled-components';
import { fadeInSlideUp } from './keyframes';

interface Props {
    animationDelay?: string;
}

export const FadeInSlideUp = styled.div<Props>`
    animation: ${fadeInSlideUp} 0.15s ease-in-out forwards;
    animation-delay: ${(props) => props.animationDelay || '0s'};
    opacity: 0;
`;
