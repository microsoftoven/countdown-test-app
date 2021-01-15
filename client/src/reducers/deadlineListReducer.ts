import * as actionTypes from '../actions/types';

const initialState: DeadlineListState = [];

export const deadlineListReducer = (
    state = initialState,
    action: ActionTypes
) => {
    switch (action.type) {
        case actionTypes.FETCH_DEADLINE_LIST:
        case actionTypes.FETCH_DEADLINE_LIST_ERROR:
            return state;
        case actionTypes.FETCH_DEADLINE_LIST_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
