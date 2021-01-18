import React from 'react';
import { StyledTitle } from './styles';

interface Props {}

export const DisplayTitle: React.FC<Props> = () => {
    return (
        <StyledTitle>
            <span>count</span>down
        </StyledTitle>
    );
};
