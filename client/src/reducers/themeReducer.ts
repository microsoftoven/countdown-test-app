import * as actionTypes from '../actions/types';

const initialState: ThemeState = {
    themeLoading: true,
    data: {
        data: {},
    },
};

export const themeReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.FETCH_THEME:
        case actionTypes.FETCH_THEME_ERROR:
            return state;
        case actionTypes.FETCH_THEME_SUCCESS:
            return {
                ...state,
                ...action.payload,
                themeLoading: false,
            };
        default:
            return state;
    }
};
