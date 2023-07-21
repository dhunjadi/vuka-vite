import {User} from '../../types';
import {UserActions} from '../actions/types/userActionTypes';
import {SET_LOGGEDIN_USER} from '../actions/userActions';

export interface UserReducerState {
  loggedInUser: User;
}

const initialState: UserReducerState = {
  loggedInUser: {_id: '', fName: '', lName: '', email: '', password: '', imgSrc: '', role: ''},
};

export const userReducer = (state: UserReducerState = initialState, action: UserActions) => {
  switch (action.type) {
    case SET_LOGGEDIN_USER:
      return {
        ...state,
        loggedInUser: action.user,
      };
    default:
      return state;
  }
};