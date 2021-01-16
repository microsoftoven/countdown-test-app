import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

interface Props {
    parent?: any;
    className?: string;
}

export const Modal: React.FC<Props> = ({ children, parent, className }) => {
    const element: Element = document.createElement('div');

    useEffect(() => {
        modalRoot?.appendChild(element);

        return () => {
            modalRoot?.removeChild(element);
        };
    });

    return createPortal(children, element);
};
