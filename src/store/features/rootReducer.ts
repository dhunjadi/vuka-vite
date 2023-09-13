import {combineReducers} from '@reduxjs/toolkit';
import {userSlice} from './userSlice';
import {newsSlice} from './newsSlice';

export const rootReducer = combineReducers({
    [userSlice.name]: userSlice.reducer,
    [newsSlice.name]: newsSlice.reducer,
});

export default rootReducer;
