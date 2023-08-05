import {User} from '../../../types';
import {SET_LOGGEDIN_USER, USER_LOGIN_REQUEST} from '../userActions';

export type UserLoginRequestAction = {
    type: typeof USER_LOGIN_REQUEST;
    email: string;
    password: string;
};

export type SetLoggedinUserAction = {
    type: typeof SET_LOGGEDIN_USER;
    user: User;
};

export type UserAction = UserLoginRequestAction | SetLoggedinUserAction;
