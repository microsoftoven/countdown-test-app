import * as actionTypes from '../actions/types';

const initialState: UserState = {
    _id: undefined,
};

export const userReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.FETCH_USER:
        case actionTypes.FETCH_USER_ERROR:
            return state;
        case actionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
