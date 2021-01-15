import * as actionTypes from '../actions/types';

const initialState: DeadlineState = {};

export const deadlineReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.FETCH_DEADLINE:
        case actionTypes.FETCH_DEADLINE_ERROR:
        case actionTypes.ADD_DEADLINE:
        case actionTypes.ADD_DEADLINE_SUCCESS:
        case actionTypes.ADD_DEADLINE_ERROR:
        case actionTypes.UPDATE_DEADLINE_ERROR:
        case actionTypes.DELETE_DEADLINE:
        case actionTypes.DELETE_DEADLINE_SUCCESS:
        case actionTypes.DELETE_DEADLINE_ERROR:
            return state;
        case actionTypes.FETCH_DEADLINE_SUCCESS:
        case actionTypes.UPDATE_DEADLINE:
        case actionTypes.UPDATE_DEADLINE_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
