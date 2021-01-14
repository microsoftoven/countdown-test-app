import * as actionTypes from '../actions/types';

const initialState: UserState = {};

export const userReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.FETCH_USER:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case actionTypes.FETCH_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                notification: {
                    active: true,
                    message: action.message,
                    type: NotificationType.Error,
                    size: NotificationSize.Large,
                    autoDismiss: false,
                },
            };
        default:
            return state;
    }
};
