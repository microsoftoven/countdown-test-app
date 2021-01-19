import React from 'react';
import {
    StyledPage,
    StyledPageAlignCenter,
    StyledPageFlexColumn,
} from './styles';

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

export const PageFlexColumn: React.FC<Props> = ({ children }) => {
    return (
        <StyledPageFlexColumn className='ctnd__page'>
            {children}
        </StyledPageFlexColumn>
    );
};
