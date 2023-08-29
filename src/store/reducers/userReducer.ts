import {User} from '../../types/userTypes';
import {UserAction} from '../actions/types/userActionTypes';
import {SET_LOGGEDIN_USER, USER_LOGOUT} from '../actions/userActions';

export interface UserReducerState {
    loggedInUser: User;
}

const initialState: UserReducerState = {
    loggedInUser: {_id: '', fName: '', lName: '', email: '', imgSrc: '', role: 'admin'},
};

export const userReducer = (state: UserReducerState = initialState, action: UserAction) => {
    switch (action.type) {
        case SET_LOGGEDIN_USER:
            return {
                ...state,
                loggedInUser: action.user,
            };
        case USER_LOGOUT:
            return initialState;
        default:
            return state;
    }
};
