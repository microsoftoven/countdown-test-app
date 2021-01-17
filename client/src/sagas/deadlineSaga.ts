import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/types';
import * as notificationTypes from '../constants/notifications';

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
        yield all([
            put({
                type: actionTypes.FETCH_DEADLINE_ERROR,
                message: error.message,
            }),
            put({
                type: actionTypes.UPDATE_NOTIFICATION,
                payload: notificationTypes.NOTIFICATION_FETCH_DEADLINE_ERROR,
            }),
        ]);
    }
}

export async function addDeadlineAPI(data: IDeadline) {
    const result = await fetch(`/api/deadlines/`, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });

    return result;
}

export function* addDeadline(action: any) {
    try {
        const result = yield call(addDeadlineAPI, action.payload);

        yield all([
            put({
                type: actionTypes.ADD_DEADLINE_SUCCESS,
                payload: result,
            }),
            put({ type: actionTypes.FETCH_DEADLINE_LIST }),
            put({
                type: actionTypes.UPDATE_NOTIFICATION,
                payload: notificationTypes.NOTIFICATION_ADD_DEADLINE_SUCCESS,
            }),
        ]);
    } catch (error) {
        yield all([
            put({
                type: actionTypes.ADD_DEADLINE_ERROR,
                message: error.message,
            }),
            put({
                type: actionTypes.UPDATE_NOTIFICATION,
                payload: notificationTypes.NOTIFICATION_ADD_DEADLINE_ERROR,
            }),
        ]);
    }
}

export async function updateDeadlineAPI(data: IDeadline) {
    const result = await fetch(`/api/deadlines/${data._id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
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
        yield all([
            put({
                type: actionTypes.UPDATE_DEADLINE_SUCCESS,
                message: result.message,
                payload: result.data,
            }),
            put({ type: actionTypes.FETCH_DEADLINE_LIST }),
            put({
                type: actionTypes.UPDATE_NOTIFICATION,
                payload: notificationTypes.NOTIFICATION_UPDATE_DEADLINE_SUCCESS,
            }),
        ]);
    } catch (error) {
        yield all([
            put({
                type: actionTypes.UPDATE_DEADLINE_ERROR,
                message: error.message,
            }),
            put({
                type: actionTypes.UPDATE_NOTIFICATION,
                payload: notificationTypes.NOTIFICATION_UPDATE_DEADLINE_ERROR,
            }),
        ]);
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
        yield all([
            put({ type: actionTypes.DELETE_DEADLINE_ERROR }),
            put({
                type: actionTypes.UPDATE_NOTIFICATION,
                payload: notificationTypes.NOTIFICATION_DELETE_DEADLINE_ERROR,
            }),
        ]);
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
