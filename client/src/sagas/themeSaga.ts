import { call, put, takeEvery } from 'redux-saga/effects';


export async function getThemeAPI() {
    try {
        const res = await fetch(
            'https://api.koala.io/marketing/v1/device-configurations/alias/web-config',
            {
                method: 'GET',
                headers: {
                    'X-Organization-Id': '1',
                },
            }
        );

        const body = await res.json();

        return body;
    } catch(error) {
        return error;
    }
}

export function* fetchTheme() {
    const theme = yield call(getThemeAPI);
    yield put({type: 'FETCH_THEME', payload: theme})
}

export function* themeSaga() {
    yield takeEvery('REQUEST_THEME', fetchTheme);
}

export default themeSaga;
