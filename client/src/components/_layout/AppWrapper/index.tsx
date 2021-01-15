import React from 'react';
import { StyledAppWrapper } from './styles';

interface Props {

}

export const AppWrapper: React.FC<Props> = ({children}) => {
    return (
        <StyledAppWrapper className="ctapp">
            {children}
        </StyledAppWrapper>
    )
}