import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { themeReducer } from './themeReducer';
import { deadlineListReducer } from './deadlineListReducer';
import { deadlineReducer } from './deadlineReducer';

export const rootReducer = combineReducers<RootState>({
    user: userReducer,
    theme: themeReducer,
    deadlineList: deadlineListReducer,
    activeDeadline: deadlineReducer,
});
