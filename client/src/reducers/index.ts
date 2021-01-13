import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { themeReducer } from './themeReducer';


export const rootReducer = combineReducers<RootState>({
    user: userReducer,
    theme: themeReducer
});
