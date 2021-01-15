import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/types';
import * as notificationTypes from '../constants/notifications';

export async function fetchUserAPI() {
    const result = await fetch('/api/current_user')
        .then((res) => res.json())
        .then((res) => {
            return res;
        })
        .catch((error) => {
            throw error;
        });

    return result;
}

export function* fetchUser() {
    try {
        const user = yield call(fetchUserAPI);

        yield put({ type: actionTypes.FETCH_USER_SUCCESS, payload: user });
    } catch (e) {
        yield all([
            put({ type: actionTypes.FETCH_USER_ERROR, message: e.message }),
            put({
                type: actionTypes.UPDATE_NOTIFICATION,
                payload: notificationTypes.NOTIFICATION_FETCH_USER_ERROR,
            }),
        ]);
    }
}

export function* userSaga() {
    yield takeEvery(actionTypes.FETCH_USER, fetchUser);
}

export default userSaga;
