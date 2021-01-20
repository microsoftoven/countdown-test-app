import * as actionTypes from '../actions/types';

const initialState: DeadlineListState = {
    pending: false,
    success: false,
    deadlines: [],
};

export const deadlineListReducer = (
    state = initialState,
    action: ActionTypes
) => {
    switch (action.type) {
        case actionTypes.FETCH_DEADLINE_LIST:
            return {
                ...state,
                pending: true,
                success: false,
            };
        case actionTypes.FETCH_DEADLINE_LIST_ERROR:
            return {
                ...state,
                pending: false,
                success: false,
            };
        case actionTypes.FETCH_DEADLINE_LIST_SUCCESS:
            return {
                ...state,
                ...action.payload,
                pending: false,
                success: true,
            };
        default:
            return state;
    }
};
