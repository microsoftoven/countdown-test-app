import React from 'react';
import classNames from 'classnames';
import { StyledInputContainer, StyledLabel } from './styles';

interface Props {
    label: string;
    name: string;
    error?: boolean;
    errorMessage?: string;
}

export const InputWrapper: React.FC<Props> = ({
    children,
    label,
    name,
    error,
    errorMessage,
}) => {
    return (
        <StyledInputContainer
            className={classNames({
                invalid: error,
            })}
        >
            {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}

            {children}

            {error && errorMessage && <p>{errorMessage}</p>}
        </StyledInputContainer>
    );
};
