import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { StyledModalWrapper, StyledModal } from './styles';

import { CloseButton } from '../../_ui/CloseButton';

interface Props {
    onClose?: () => void;
    isVisible: boolean;
}

export const Modal: React.FC<Props> = ({ children, onClose, isVisible }) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
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
        setModalVisible(false);

        if (onClose) {
            onClose();
        }
    };

    useEffect(() => {
        setModalVisible(isVisible);
    }, [isVisible]);

    useEffect(() => {
        document.addEventListener('keydown', handleEscapeKey, true);
        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('keydown', handleEscapeKey, true);
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <StyledModalWrapper
            className={classNames({
                visible: modalVisible,
            })}
            data-testid='modal'
        >
            <div>
                <CloseButton handleClick={handleClose} />

                <div ref={modalRef}>
                    <StyledModal>{children}</StyledModal>
                </div>
            </div>
        </StyledModalWrapper>
    );
};
