import {combineReducers} from 'redux';
import {UserReducerState, userReducer} from './userReducer';
import {NewsReducerState, newsReducer} from './newsReducer';

export interface StoreState {
    userReducer: UserReducerState;
    newsReducer: NewsReducerState;
}

export const rootReducer = combineReducers({
    userReducer,
    newsReducer,
});
