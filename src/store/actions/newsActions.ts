import {News, NewsType} from '../../types';
import {FetchNewsByTypeAction, SetNewsListAction} from './types/newsActionTypes';

export const FETCH_NEWS_BY_TYPE = 'FETCH_NEWS_BY_TYPE';
export const SET_NEWS_LIST = 'SET_NEWS_LIST';

export const fetchNewsByTypeAction = (newsType: NewsType): FetchNewsByTypeAction => ({
    type: FETCH_NEWS_BY_TYPE,
    newsType,
});

export const setNewsListAction = (news: News[]): SetNewsListAction => ({
    type: SET_NEWS_LIST,
    news,
});
