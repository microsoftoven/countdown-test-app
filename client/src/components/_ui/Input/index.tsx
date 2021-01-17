import React from 'react';
import { StyledInputContainer, StyledInput, StyledLabel } from './styles';

interface Props {
    type: string;
    placeholder?: string;
    label: string;
    name: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({
    type = 'text',
    handleChange,
    placeholder,
    label,
    name,
}) => {
    return (
        <StyledInputContainer>
            {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}

            <StyledInput
                type={type}
                onChange={(e) => {
                    handleChange(e);
                }}
                placeholder={placeholder}
            />
        </StyledInputContainer>
    );
};
