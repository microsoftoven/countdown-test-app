import * as actionTypes from '../actions/types';

const initialState: DeadlineState = {
    pending: false,
    success: false,
    deadline: {},
};

export const deadlineReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.FETCH_DEADLINE_ERROR:
        case actionTypes.ADD_DEADLINE_ERROR:
        case actionTypes.UPDATE_DEADLINE_ERROR:
        case actionTypes.DELETE_DEADLINE:
        case actionTypes.DELETE_DEADLINE_SUCCESS:
        case actionTypes.DELETE_DEADLINE_ERROR:
        case actionTypes.FETCH_DEADLINE:
            return state;
        case actionTypes.FETCH_DEADLINE_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case actionTypes.ADD_DEADLINE:
        case actionTypes.UPDATE_DEADLINE:
            return {
                ...state,
                pending: true,
                success: false,
            };
        case actionTypes.ADD_DEADLINE_SUCCESS:
        case actionTypes.UPDATE_DEADLINE_SUCCESS:
            return {
                ...state,
                ...action.payload,
                pending: false,
                success: true,
            };
        case actionTypes.RESET_DEADLINE_STATUS:
            return {
                ...state,
                pending: false,
                success: false,
            };
        default:
            return state;
    }
};
