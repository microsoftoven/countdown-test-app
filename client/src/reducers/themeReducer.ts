import * as actionTypes from '../actions/types';

// const initialState: RootState = {
//     user: {},
//     theme: {}
// };
const initialState = {
    data: {}
};

export const themeReducer = (state: ThemeState = initialState, action: ActionTypes) => {
    switch(action.type) {
        case actionTypes.FETCH_THEME:
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}
