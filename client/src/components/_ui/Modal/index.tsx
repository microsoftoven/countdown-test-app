import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createPortal } from 'react-dom';
import { StyledModalWrapper, StyledModal } from './styles';
import classNames from 'classnames';

import { CloseButton } from '../../_ui/CloseButton';

const modalRoot = document.getElementById('modal-root');

interface Props {
    onClose?: () => void;
    children: any;
    parent?: any;
    className?: string;
}

const Modal: React.FC<Props> = ({ children, parent, onClose, className }) => {
    const [fade, setFade] = useState<boolean>(false);
    const element: Element = document.createElement('div');
    const modalRef = useRef<HTMLDivElement>(null);

    const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    };

    const handleClickOutside = (event: Event) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
        ) {
            handleClose();
        }
    };

    const handleClose = () => {
        setFade(true);

        setTimeout(() => {
            if (onClose) {
                onClose();
            }
        }, 150);
    };

    useEffect(() => {
        modalRoot?.appendChild(element);
        document.addEventListener('keydown', handleEscapeKey, true);
        document.addEventListener('click', handleClickOutside, true);

        return () => {
            modalRoot?.removeChild(element);
            document.removeEventListener('keydown', handleEscapeKey, true);
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return createPortal(
        <StyledModalWrapper
            className={classNames(classNames, {
                fadeModal: fade,
            })}
        >
            <div>
                <CloseButton handleClick={handleClose} />

                <div ref={modalRef}>
                    <StyledModal>{children}</StyledModal>
                </div>
            </div>
        </StyledModalWrapper>,
        element
    );
};

export default connect((state: RootState) => {
    return {};
})(Modal);
