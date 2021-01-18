import React from 'react';
import { StyledTagline } from './styles';

interface Props {
    text: string;
}

export const Tagline: React.FC<Props> = ({ text }) => {
    return <StyledTagline>{text}</StyledTagline>;
};
