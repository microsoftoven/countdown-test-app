import React from 'react';
import * as actionTypes from '../actions/types';

const initialState: ModalState = {
    show: false,
};

export const modalReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.UPDATE_MODAL:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
