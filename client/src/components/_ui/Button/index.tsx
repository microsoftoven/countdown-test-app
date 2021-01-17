import React from 'react';
import classNames from 'classnames';
import { StyledButton } from './styles';
import loadingButton from '../../../assets/images/button-loading.svg';
import { ReactSVG } from 'react-svg';

interface Props {
    handleClick: (e?: React.ChangeEvent<HTMLInputElement> | any) => void;
    text: string;
    disabled?: boolean;
    className?: string;
    buttonStyle?: 'primary' | 'secondary' | 'knockout' | 'danger';
    type?: 'button' | 'submit' | 'reset' | undefined;
    pending?: boolean;
    success?: boolean;
}

export const Button: React.FC<Props> = ({
    text,
    handleClick,
    disabled,
    className,
    buttonStyle = 'primary',
    type = 'button',
    pending = false,
    success = false,
}) => {
    const buttonContent = pending ? (
        <ReactSVG src={loadingButton} />
    ) : success ? (
        'Saved!'
    ) : (
        text
    );

    return (
        <StyledButton
            className={classNames(className, buttonStyle, {
                pending: pending,
                success: success,
            })}
            onClick={(e) => {
                if (!disabled) handleClick(e);
            }}
            type={type}
        >
            {buttonContent}
        </StyledButton>
    );
};
