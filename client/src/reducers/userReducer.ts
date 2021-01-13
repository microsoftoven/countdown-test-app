import * as actionTypes from '../actions/types';

// const initialState: RootState = {
//     user: {},
//     theme: {}
// };

const initialState = {}

export const userReducer = (state: UserState = initialState, action: ActionTypes) => {
    switch(action.type) {
        case actionTypes.FETCH_USER:
            console.log(action);
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}
