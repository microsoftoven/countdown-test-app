import React from 'react';
import { StyledTitle } from './styles';

interface Props {
    text: string;
    tag: 'h1' | 'h2' | 'h3';
}

export const Title: React.FC<Props> = ({ text, tag = 'h2' }) => {
    const Tag = tag;

    return (
        <StyledTitle>
            <Tag>{text}</Tag>
        </StyledTitle>
    );
};
