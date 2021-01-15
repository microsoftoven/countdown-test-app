import * as actionTypes from '../actions/types';
import { NotificationType, NotificationSize } from '../constants/notifications';

const initialState: NotificationState = {
    active: false,
    message: '',
    type: NotificationType.Info,
    size: NotificationSize.Small,
    autoDismiss: true,
};

export const notificationReducer = (
    state = initialState,
    action: ActionTypes
) => {
    switch (action.type) {
        case actionTypes.DISMISS_NOTIFICATION:
            return initialState;
        case actionTypes.UPDATE_NOTIFICATION:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
