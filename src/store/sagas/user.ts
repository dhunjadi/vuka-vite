import {call, put, takeLatest} from 'redux-saga/effects';
import {USER_LOGIN_REQUEST, setLoggedinUserAction} from '../actions/userActions';
import {User} from '../../types';
import {login} from '../../services/userServices';
import {AnyAction} from 'redux';

export function* loginSaga(action: AnyAction) {
  const response: User = yield call(login, action.email, action.password);
  if (response) yield put(setLoggedinUserAction(response));
}

export function* watchUserSaga() {
  yield takeLatest(USER_LOGIN_REQUEST, loginSaga);
}
