import {News, NewsType} from '../../../types';
import {FETCH_NEWS_BY_TYPE, SET_NEWS_LIST} from '../newsActions';

export type FetchNewsByTypeAction = {
    type: typeof FETCH_NEWS_BY_TYPE;
    newsType: NewsType;
};

export type SetNewsListAction = {
    type: typeof SET_NEWS_LIST;
    news: News[];
};

export type NewsAction = FetchNewsByTypeAction | SetNewsListAction;
