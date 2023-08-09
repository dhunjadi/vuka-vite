import {News, NewsType} from '../../../types';
import {ADD_NEW_NEWS, DELETE_NEWS, EDIT_NEWS, FETCH_NEWS_BY_TYPE, SET_NEWS_LIST} from '../newsActions';

export type FetchNewsByTypeAction = {
    type: typeof FETCH_NEWS_BY_TYPE;
    newsType: NewsType;
};

export type SetNewsListAction = {
    type: typeof SET_NEWS_LIST;
    news: News[];
};

export type AddNewNewsAction = {
    type: typeof ADD_NEW_NEWS;
    data: Omit<News, '_id'>;
};

export type DeleteNewsAction = {
    type: typeof DELETE_NEWS;
    newsId: string;
};

export type EditNewsAction = {
    type: typeof EDIT_NEWS;
    id: string;
    updateData: Omit<News, '_id'>;
};

export type NewsAction = FetchNewsByTypeAction | SetNewsListAction | AddNewNewsAction | DeleteNewsAction;
