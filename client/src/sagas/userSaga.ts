import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/types';

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
        yield put({ type: actionTypes.FETCH_USER_ERROR, message: e.message });
    }
}

export function* userSaga() {
    yield takeEvery(actionTypes.FETCH_USER, fetchUser);
}

export default userSaga;
