import {ForkEffect, call, put, takeLatest} from 'redux-saga/effects';
import {ADD_NEW_NEWS, DELETE_NEWS, FETCH_NEWS_BY_TYPE, fetchNewsByTypeAction, setNewsListAction} from '../actions/newsActions';
import {News} from '../../types';
import {addNewNews, deleteNews, getNewsByType} from '../../services/newsService';
import {AddNewNewsAction, DeleteNewsAction, FetchNewsByTypeAction} from '../actions/types/newsActionTypes';

export function* fetchNewsByTypeSaga(action: FetchNewsByTypeAction): Generator<void> | void {
    const response: News[] = yield call(getNewsByType, action.newsType);
    yield put(setNewsListAction(response));
}

export function* addNewNewsSaga(action: AddNewNewsAction): Generator<void> | void {
    yield call(addNewNews, action.data);
    yield put(fetchNewsByTypeAction('general'));
}

export function* deleteNewsSaga(action: DeleteNewsAction): Generator<void> | void {
    yield call(deleteNews, action.newsId);
    yield put(fetchNewsByTypeAction('general'));
}

export function* watchNewsSaga(): Generator<ForkEffect<never>, void> {
    yield takeLatest(FETCH_NEWS_BY_TYPE, fetchNewsByTypeSaga);
    yield takeLatest(ADD_NEW_NEWS, addNewNewsSaga);
    yield takeLatest(DELETE_NEWS, deleteNewsSaga);
}
