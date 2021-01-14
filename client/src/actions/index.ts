import * as actionTypes from './types';

export function fetchUser() {
    return {
        type: actionTypes.FETCH_USER,
    };
}

export function fetchTheme() {
    return {
        type: actionTypes.FETCH_THEME,
    };
}

export function fetchDeadlineList() {
    return {
        type: actionTypes.FETCH_DEADLINE_LIST,
    };
}

export function fetchDeadline(data: IDeadline) {
    return {
        type: actionTypes.FETCH_DEADLINE,
        payload: data,
    };
}

export function addDeadline(data: IDeadline) {
    return {
        type: actionTypes.ADD_DEADLINE,
        payload: data,
    };
}

export function updateDeadline(data: IDeadline) {
    return {
        type: actionTypes.UPDATE_DEADLINE,
        payload: data,
    };
}

export function deleteDeadline(data: IDeadline) {
    return {
        type: actionTypes.DELETE_DEADLINE,
        payload: data,
    };
}

export function dismissNotification() {
    return {
        type: actionTypes.DISMISS_NOTIFICATION,
    };
}
