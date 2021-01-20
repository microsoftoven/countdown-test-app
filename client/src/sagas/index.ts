import { all } from 'redux-saga/effects';

import userSaga from './userSaga';
import themeSaga from './themeSaga';
import deadlineListSaga from './deadlineListSaga';
import deadlineSaga from './deadlineSaga';

import { take } from 'redux-saga/effects';

function* logActions() {
    while (true) {
        const action = yield take(); // correct
        console.log(action);
    }
}

export default function* rootSaga() {
    yield all([
        userSaga(),
        themeSaga(),
        deadlineListSaga(),
        deadlineSaga(),
        logActions(),
    ]);
}
