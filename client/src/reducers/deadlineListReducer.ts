import * as actionTypes from '../actions/types';

const initialState: DeadlineListState = [];

export const deadlineListReducer = (
    state = initialState,
    action: ActionTypes
) => {
    switch (action.type) {
        case actionTypes.FETCH_DEADLINE_LIST:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_DEADLINE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                deadlines: action.payload,
            };
        case actionTypes.FETCH_DEADLINE_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                notification: {
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
