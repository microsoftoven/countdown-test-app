import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/types';

export async function fetchThemeAPI() {
    fetch(
        'https://api.koala.io/marketing/v1/device-configurations/alias/web-config',
        {
            method: 'GET',
            headers: {
                'X-Organization-Id': '1',
            },
        }
    )
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            throw error;
        });
}

export function* fetchTheme() {
    try {
        const theme = yield call(fetchThemeAPI);
        yield put({ type: actionTypes.FETCH_THEME_SUCCESS, payload: theme });
    } catch (e) {
        yield put({ type: actionTypes.FETCH_THEME_ERROR, message: e.message });
    }
}

export function* themeSaga() {
    yield takeEvery(actionTypes.FETCH_THEME, fetchTheme);
}

export default themeSaga;
