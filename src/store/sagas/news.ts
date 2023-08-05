import {ForkEffect, call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_NEWS_BY_TYPE, setNewsListAction} from '../actions/newsActions';
import {News} from '../../types';
import {getNewsByType} from '../../services/newsService';
import {FetchNewsByTypeAction} from '../actions/types/newsActionTypes';

export function* fetchNewsByTypeSaga(action: FetchNewsByTypeAction): Generator<void> | void {
    const response: News[] = yield call(getNewsByType, action.newsType);
    yield put(setNewsListAction(response));
}

export function* watchNewsSaga(): Generator<ForkEffect<never>, void> {
    yield takeLatest(FETCH_NEWS_BY_TYPE, fetchNewsByTypeSaga);
}
