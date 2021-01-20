import React from 'react';
import { StyledFooter } from './styles';

interface Props {}

export const Footer: React.FC<Props> = (props) => {
    return (
        <StyledFooter data-testid='footer'>
            ©{new Date().getFullYear()} <strong>count</strong>down.app
        </StyledFooter>
    );
};
