import { call, put, all, takeLatest, delay } from 'redux-saga/effects';
import * as actionTypes from '../actions/types';

export async function fetchDeadlineAPI(id: string) {
    const result = await fetch(`/api/deadlines/${id}`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            throw error;
        });

    return result;
}

export function* fetchDeadline(action: any) {
    try {
        const deadline = yield call(fetchDeadlineAPI, action.payload._id);
        yield put({
            type: actionTypes.FETCH_DEADLINE_SUCCESS,
            payload: deadline,
        });
    } catch (error) {
        yield put({
            type: actionTypes.FETCH_DEADLINE_ERROR,
            message: error.message,
        });
    }
}

export async function addDeadlineAPI(data: IDeadline) {
    const result = await fetch(`/api/deadlines/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            throw error;
        });

    return result;
}

export function* addDeadline(action: any) {
    try {
        const result = yield call(addDeadlineAPI, action.payload);

        yield delay(500);
        if (action.payload.redirectOnSave !== null) {
            const redirectURL = `/deadline/${result.deadline._id}`;

            console.log(redirectURL);

            yield put({
                type: actionTypes.ADD_DEADLINE_SUCCESS,
                payload: {
                    redirectOnSave: redirectURL,
                },
            });
        } else {
            yield put({
                type: actionTypes.ADD_DEADLINE_SUCCESS,
                payload: {
                    ...result,
                    redirectOnSave: false,
                },
            });

            yield delay(1000);

            // TODO: send flag when on single vs archive
            yield put({ type: actionTypes.FETCH_DEADLINE_LIST });
        }
    } catch (error) {
        yield put({
            type: actionTypes.ADD_DEADLINE_ERROR,
            message: error.message,
        });
    }
}

export async function updateDeadlineAPI(data: IDeadline) {
    const result = await fetch(`/api/deadlines/${data._id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            throw error;
        });

    return result;
}

export function* updateDeadline(action: any) {
    try {
        const result = yield call(updateDeadlineAPI, action.payload);

        yield delay(500);
        yield put({
            type: actionTypes.UPDATE_DEADLINE_SUCCESS,
            payload: result,
        });
        yield delay(1000);
        yield put({ type: actionTypes.FETCH_DEADLINE_LIST });
    } catch (error) {
        yield put({
            type: actionTypes.UPDATE_DEADLINE_ERROR,
            message: error.message,
        });
    }
}

export async function deleteDeadlineAPI(data: IDeadline) {
    const result = fetch(`/api/deadlines/${data._id}`, { method: 'DELETE' })
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            throw error;
        });

    return result;
}

export function* deleteDeadline(action: any) {
    try {
        yield call(deleteDeadlineAPI, action.payload);

        yield all([
            put({
                type: actionTypes.DELETE_DEADLINE_SUCCESS,
            }),
            put({ type: actionTypes.FETCH_DEADLINE_LIST }),
        ]);
    } catch (error) {
        yield put({ type: actionTypes.DELETE_DEADLINE_ERROR });
    }
}

export function* deadlineSaga() {
    yield all([
        takeLatest(actionTypes.FETCH_DEADLINE, fetchDeadline),
        takeLatest(actionTypes.ADD_DEADLINE, addDeadline),
        takeLatest(actionTypes.UPDATE_DEADLINE, updateDeadline),
        takeLatest(actionTypes.DELETE_DEADLINE, deleteDeadline),
    ]);
}

export default deadlineSaga;
