import React from 'react';

interface Props {
    handleClick: () => void;
    text: string;
}

export const Button: React.FC<Props> = ({ text, handleClick }) => {
    return (
        <button
            onClick={() => {
                handleClick();
            }}
        >
            {text}
        </button>
    );
};
