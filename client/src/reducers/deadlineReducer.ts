import * as actionTypes from '../actions/types';

const initialState: DeadlineState = {};

export const deadlineReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.FETCH_DEADLINE:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_DEADLINE_SUCCESS:
            return {
                ...state,
                loading: false,
                activeDeadline: action.payload,
            };
        case actionTypes.FETCH_DEADLINE_ERROR:
            return {
                ...state,
                loading: false,
                activeDeadline: {},
                notification: {
                    active: true,
                    message: action.message,
                    type: NotificationType.Error,
                    size: NotificationSize.Large,
                    autoDismiss: false,
                },
            };
        case actionTypes.ADD_DEADLINE:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.ADD_DEADLINE_SUCCESS:
            return {
                ...state,
                loading: false,
                notification: {
                    active: true,
                    message: action.message,
                    type: NotificationType.Success,
                    size: NotificationSize.Small,
                    autoDismiss: true,
                },
            };
        case actionTypes.ADD_DEADLINE_ERROR:
            return {
                ...state,
                loading: false,
                notification: {
                    active: true,
                    message: action.message,
                    type: NotificationType.Error,
                    size: NotificationSize.Small,
                    autoDismiss: false,
                },
            };
        case actionTypes.UPDATE_DEADLINE:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.UPDATE_DEADLINE_SUCCESS:
            return {
                ...state,
                loading: false,
                notification: {
                    active: true,
                    message: action.message,
                    type: NotificationType.Success,
                    size: NotificationSize.Small,
                    autoDismiss: true,
                },
            };
        case actionTypes.UPDATE_DEADLINE_ERROR:
            return {
                ...state,
                loading: false,
                notification: {
                    active: true,
                    message: action.message,
                    type: NotificationType.Error,
                    size: NotificationSize.Small,
                    autoDismiss: false,
                },
            };
        case actionTypes.DELETE_DEADLINE:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.DELETE_DEADLINE_SUCCESS:
            return {
                ...state,
                loading: false,
                notification: {
                    active: true,
                    message: action.message,
                    type: NotificationType.Success,
                    size: NotificationSize.Small,
                    autoDismiss: true,
                },
            };
        case actionTypes.DELETE_DEADLINE_ERROR:
            return {
                ...state,
                loading: false,
                notification: {
                    active: true,
                    message: action.message,
                    type: NotificationType.Error,
                    size: NotificationSize.Small,
                    autoDismiss: false,
                },
            };
        default:
            return state;
    }
};
