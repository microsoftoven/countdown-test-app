import styled from 'styled-components';
import { fadeInSlideUp, fadeIn } from './keyframes';

interface Props {
    animationDelay?: string;
}

export const FadeIn = styled.div<Props>`
    animation: ${fadeIn} 0.15s ease-in-out forwards;
    animation-delay: ${(props) => props.animationDelay || '0s'};
    opacity: 0;
`;

export const FadeInSlideUp = styled.div<Props>`
    animation: ${fadeInSlideUp} 0.15s ease-in-out forwards;
    animation-delay: ${(props) => props.animationDelay || '0s'};
    opacity: 0;
`;
