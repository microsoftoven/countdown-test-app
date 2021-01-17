import React from 'react';
import classNames from 'classnames';
import { StyledButton } from './styles';

interface Props {
    handleClick: () => void;
    text: string;
    disabled?: boolean;
    className?: string;
    buttonType?: 'primary' | 'secondary' | 'knockout' | 'danger';
}

export const Button: React.FC<Props> = ({
    text,
    handleClick,
    disabled,
    className,
    buttonType = 'primary',
}) => {
    return (
        <StyledButton
            className={classNames(className, buttonType)}
            onClick={() => {
                if (!disabled) handleClick();
            }}
        >
            {text}
        </StyledButton>
    );
};
