import React from 'react';
import { StyledPage, StyledPageAlignCenter } from './styles';

interface Props {}

export const Page: React.FC<Props> = ({ children }) => {
    return <StyledPage className='ctnd__page'>{children}</StyledPage>;
};

export const PageAlignCenter: React.FC<Props> = ({ children }) => {
    return (
        <StyledPageAlignCenter className='ctnd__page'>
            <div>{children}</div>
        </StyledPageAlignCenter>
    );
};
