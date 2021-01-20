import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { StyledButton } from './styles';
import loadingButton from '../../../assets/images/button-loading.svg';
import { ReactSVG } from 'react-svg';

interface Props {
    handleClick?: (e?: React.ChangeEvent<HTMLInputElement> | any) => void;
    text: string;
    disabled?: boolean;
    className?: string;
    buttonStyle?: 'primary' | 'secondary' | 'knockout' | 'danger';
    type?: 'button' | 'submit' | 'reset' | undefined;
    pending?: boolean;
    success?: boolean;
    successText?: string;
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
    successText = 'Saved!',
}) => {
    const buttonContent = pending ? (
        <ReactSVG src={loadingButton} />
    ) : success ? (
        successText
    ) : (
        text
    );

    return (
        <StyledButton
            className={classNames(className, buttonStyle, {
                pending: pending,
                success: pending,
            })}
            onClick={(e) => {
                if (!disabled && handleClick) {
                    handleClick(e);
                }
            }}
            type={type}
        >
            {buttonContent}
        </StyledButton>
    );
};
