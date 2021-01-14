import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/types';

export async function fetchDeadlineListAPI() {
    fetch('/api/deadlines')
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            throw error;
        });
}

export function* fetchDeadlineList() {
    try {
        const deadlineList = yield call(fetchDeadlineListAPI);
        yield put({
            type: actionTypes.FETCH_DEADLINE_LIST_SUCCESS,
            payload: deadlineList,
        });
    } catch (error) {
        yield put({
            type: actionTypes.FETCH_DEADLINE_LIST_ERROR,
            message: error.message,
        });
    }
}

export function* deadlineListSaga() {
    yield takeEvery(actionTypes.FETCH_DEADLINE_LIST, fetchDeadlineList);
}

export default deadlineListSaga;
