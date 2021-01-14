import * as actionTypes from '../actions/types';

const initialState: ThemeState = {
    data: {},
};

export const themeReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.FETCH_THEME:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_THEME_SUCCESS:
            return {
                ...state,
                loading: false,
                theme: action.payload,
            };
        case actionTypes.FETCH_THEME_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                notification: {
                    active: true,
                    message: action.message,
                    type: NotificationType.Error,
                    size: NotificationSize.Small,
                    autoDismiss: true,
                },
            };
        default:
            return state;
    }
};
