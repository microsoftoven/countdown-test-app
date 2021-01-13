import { all } from 'redux-saga/effects';

import userSaga from './userSaga';
import themeSaga from './themeSaga';

export default function* rootSaga() {
    yield all([
        userSaga(),
        themeSaga()
    ])
}