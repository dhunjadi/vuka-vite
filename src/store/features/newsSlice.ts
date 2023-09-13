import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {News} from '../../types/newsTypes';
import {createNewNews, fetchNews} from '../thunks/newsThunks';

export type NewsSliceState = {
    newsList: News[];
    isLoading: boolean;
};

const initialState: NewsSliceState = {
    newsList: [],
    isLoading: false,
};

export const newsSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state: NewsSliceState) => {
            state.isLoading = true;
        });
        builder.addCase(fetchNews.fulfilled, (state: NewsSliceState, action: PayloadAction<News[]>) => {
            state.newsList = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchNews.rejected, (state: NewsSliceState) => {
            state.isLoading = false;
        });
        builder.addCase(createNewNews.pending, (state: NewsSliceState) => {
            state.isLoading = true;
        });
        builder.addCase(createNewNews.fulfilled, (state: NewsSliceState, action) => {
            state.newsList = [...state.newsList, action.payload];
            state.isLoading = false;
        });
        builder.addCase(createNewNews.rejected, (state: NewsSliceState) => {
            state.isLoading = false;
        });
    },
});

export default newsSlice.reducer;
