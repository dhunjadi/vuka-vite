import {User} from '../../../types/userTypes';
import {SET_LOGGEDIN_USER, USER_LOGIN_REQUEST, USER_LOGOUT} from '../userActions';

export type UserLoginRequestAction = {
    type: typeof USER_LOGIN_REQUEST;
    email: string;
    password: string;
};

export type SetLoggedinUserAction = {
    type: typeof SET_LOGGEDIN_USER;
    user: User;
};

export type UserLogoutAction = {
    type: typeof USER_LOGOUT;
};

export type UserAction = UserLoginRequestAction | SetLoggedinUserAction | UserLogoutAction;
