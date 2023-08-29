import {User} from '../../types/userTypes';
import {SetLoggedinUserAction, UserLoginRequestAction, UserLogoutAction} from './types/userActionTypes';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const SET_LOGGEDIN_USER = 'SET_LOGGEDIN_USER';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLoginRequestAction = (email: string, password: string): UserLoginRequestAction => ({
    type: USER_LOGIN_REQUEST,
    email,
    password,
});

export const setLoggedinUserAction = (user: User): SetLoggedinUserAction => ({
    type: SET_LOGGEDIN_USER,
    user,
});

export const userLogoutAction = (): UserLogoutAction => ({
    type: USER_LOGOUT,
});
