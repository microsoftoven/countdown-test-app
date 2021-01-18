import React from 'react';
import { StyledFooter } from './styles';

interface Props {}

export const Footer: React.FC<Props> = (props) => {
    return (
        <StyledFooter>
            ©{new Date().getFullYear()} <strong>count</strong>down.app
        </StyledFooter>
    );
};
