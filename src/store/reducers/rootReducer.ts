import {combineReducers} from 'redux';
import {UserReducerState, userReducer} from './userReducer';

export interface StoreState {
  userReducer: UserReducerState;
}

export const rootReducer = combineReducers({
  userReducer,
});
