import * as actionTypes from './types';

export function fetchUser() {
    return {
        type: actionTypes.REQUEST_USER
    }
};

export function fetchTheme() {
    return {
        type: actionTypes.REQUEST_THEME
    }
}
