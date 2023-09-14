import {combineReducers} from '@reduxjs/toolkit';
import {userSlice} from './userSlice';
import {newsSlice} from './newsSlice';
import {tasksSlice} from './tasksSlice';

export const rootReducer = combineReducers({
    [userSlice.name]: userSlice.reducer,
    [newsSlice.name]: newsSlice.reducer,
    [tasksSlice.name]: tasksSlice.reducer,
});

export default rootReducer;
