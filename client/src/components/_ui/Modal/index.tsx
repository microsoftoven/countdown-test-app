import React, { useEffect, useState, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { StyledModalWrapper, StyledModal } from './styles';
import * as actionTypes from '../../../actions/types';

import { CloseButton } from '../../_ui/CloseButton';

const modalRoot = document.getElementById('modal-root');

interface Props {
    // modalState?: ModalState;
}

const Modal: React.FC<Props> = ({ children }) => {
    // const [fade, setFade] = useState<boolean>(false);
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
            // dispatch({
            //     type: actionTypes.UPDATE_MODAL,
            //     payload: { show: false },
            // });
        }
    };

    const handleClose = () => {
        // dispatch({
        //     type: actionTypes.UPDATE_MODAL,
        //     payload: { show: false },
        // });
    };

    // useEffect(() => {
    //     if (modalState?.show) {
    //         modalRoot?.appendChild(element);
    //         document.addEventListener('keydown', handleEscapeKey, true);
    //         document.addEventListener('click', handleClickOutside, true);

    //         return () => {
    //             modalRoot?.removeChild(element);
    //             document.removeEventListener('keydown', handleEscapeKey, true);
    //             document.removeEventListener('click', handleClickOutside, true);
    //         };
    //     }
    // }, [modalState]);

    return createPortal(
        <StyledModalWrapper>
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
    return {
        // modalState: state.modalState,
    };
})(Modal);
