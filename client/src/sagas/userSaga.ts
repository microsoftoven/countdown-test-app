import { call, put, takeEvery } from 'redux-saga/effects';


export async function getCurrentUserAPI() {
    try {
        const res = await fetch('/api/current_user');
        const body = await res.json();

        return body;
    } catch(error) {
        return error;
    }
}

export function* fetchUser() {
    const user = yield call(getCurrentUserAPI);
    yield put({type: 'FETCH_USER', payload: user})
}

export function* userSaga() {
    yield takeEvery('REQUEST_USER', fetchUser);
}

export default userSaga;
