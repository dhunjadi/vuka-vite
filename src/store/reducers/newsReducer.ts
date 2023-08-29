import {News} from '../../types/newsTypes';
import {DELETE_NEWS, SET_NEWS_LIST} from '../actions/newsActions';
import {NewsAction} from '../actions/types/newsActionTypes';

export interface NewsReducerState {
    newsList: News[];
}

const initialState: NewsReducerState = {
    newsList: [],
};

export const newsReducer = (state: NewsReducerState = initialState, action: NewsAction) => {
    switch (action.type) {
        case SET_NEWS_LIST:
            return {
                ...state,
                newsList: action.news,
            };
        case DELETE_NEWS:
            return {
                ...state,
                newsList: [...state.newsList.filter((news) => news._id !== action.newsId)],
            };
        default:
            return state;
    }
};
