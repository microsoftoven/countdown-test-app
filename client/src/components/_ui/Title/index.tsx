import React from 'react';
import classNames from 'classnames';
import { StyledTitle, StickyTitle } from './styles';

interface Props {
    tag?: 'h1' | 'h2' | 'h3';
    sticky?: boolean;
    handleClick?: () => void;
}

export const Title: React.FC<Props> = ({
    children,
    tag = 'h2',
    sticky = false,
    handleClick,
}) => {
    const Tag = tag;

    if (sticky) {
        return (
            <StickyTitle>
                <StyledTitle
                    className={classNames({
                        clickable: handleClick ? true : false,
                    })}
                    onClick={() => {
                        if (handleClick) {
                            handleClick();
                        }
                    }}
                >
                    <Tag>{children}</Tag>
                </StyledTitle>
            </StickyTitle>
        );
    } else {
        return (
            <StyledTitle>
                <Tag>{children}</Tag>
            </StyledTitle>
        );
    }
};
