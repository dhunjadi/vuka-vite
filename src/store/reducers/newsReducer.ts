import {News} from '../../types';
import {SET_NEWS_LIST} from '../actions/newsActions';
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
        default:
            return state;
    }
};
