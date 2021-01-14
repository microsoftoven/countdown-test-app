import * as actionTypes from '../actions/types';

const initialState: NotificationState = {
    active: false,
    message: '',
    type: NotificationType.Info,
    size: NotificationSize.Small,
    autoDismiss: true,
};

export const userReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.DISMISS_NOTIFICATION:
            return {
                ...state,
                notification: { ...initialState },
            };
        default:
            return state;
    }
};
