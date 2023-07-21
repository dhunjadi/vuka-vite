import {User} from '../../types';
import {SetLoggedinUserAction, UserLoginRequestAction} from './types/userActionTypes';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const SET_LOGGEDIN_USER = 'SET_LOGGEDIN_USER';

export const userLoginRequestAction = (email: string, password: string): UserLoginRequestAction => ({
  type: USER_LOGIN_REQUEST,
  email,
  password,
});

export const setLoggedinUserAction = (user: User): SetLoggedinUserAction => ({
  type: SET_LOGGEDIN_USER,
  user,
});
