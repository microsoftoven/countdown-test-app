import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch: (arg0: { type: any; payload: any; }) => void) => {
    const res = await fetch('/api/current_user');
    const body = await res.json();

    dispatch({ type: FETCH_USER, payload: body });
};
