import {News, NewsType} from '../../types';
import {AddNewNewsAction, DeleteNewsAction, FetchNewsByTypeAction, SetNewsListAction} from './types/newsActionTypes';

export const FETCH_NEWS_BY_TYPE = 'FETCH_NEWS_BY_TYPE';
export const SET_NEWS_LIST = 'SET_NEWS_LIST';
export const ADD_NEW_NEWS = 'ADD_NEW_NEWS';
export const DELETE_NEWS = 'DELETE_NEWS';

export const fetchNewsByTypeAction = (newsType: NewsType): FetchNewsByTypeAction => ({
    type: FETCH_NEWS_BY_TYPE,
    newsType,
});

export const setNewsListAction = (news: News[]): SetNewsListAction => ({
    type: SET_NEWS_LIST,
    news,
});

export const addNewNewsAction = (data: Omit<News, '_id'>): AddNewNewsAction => ({
    type: ADD_NEW_NEWS,
    data,
});

export const deleteNewsAction = (newsId: string): DeleteNewsAction => ({
    type: DELETE_NEWS,
    newsId,
});
