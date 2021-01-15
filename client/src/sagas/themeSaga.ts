import { call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/types';

export async function fetchThemeAPI() {
    const result = await fetch(
        'https://api.koala.io/marketing/v1/device-configurations/alias/web-config',
        {
            method: 'GET',
            headers: {
                'X-Organization-Id': '1',
            },
        }
    )
        .then((res) => res.json())
        .then((res) => {
            return res;
        })
        .catch((error) => {
            throw error;
        });

    return result;
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
    yield takeLatest(actionTypes.FETCH_THEME, fetchTheme);
}

export default themeSaga;
