/* eslint-disable no-console */
import {createAsyncThunk} from '@reduxjs/toolkit';
import {News, NewsType} from '../../types/newsTypes';
import axios from 'axios';
import {API_URL} from '../../constants';

const getAccessToken = () => {
    return localStorage.getItem('access_token');
};

const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
};

export const fetchNews = createAsyncThunk('news/getNewsByType', async (type: NewsType) => {
    try {
        const response = await axios.get(`${API_URL}/news/${type}`, {headers});
        return response.data;
    } catch (err) {
        console.error('Error fetching news:', err);
        throw new Error('Failed to fetch news. Please try again later.');
    }
});

export const createNewNews = createAsyncThunk('news/createNewNews', async (data: Omit<News, '_id'>) => {
    try {
        const response = await axios.post(`${API_URL}/news/new`, data, {headers});
        return response.data;
    } catch (error) {
        console.error('Error creating news:', error);
        throw new Error('Failed to create news. Please try again later.');
    }
});

export const updateNews = createAsyncThunk('news/updateNews', async ({id, data}: {id: string; data: Omit<News, '_id'>}) => {
    try {
        const response = await axios.put(`${API_URL}/news/edit/${id}`, data, {headers});
        return response.data;
    } catch (error) {
        console.error('Error updating news:', error);
        throw new Error('Failed to update news. Please try again later.');
    }
});

export const deleteNews = createAsyncThunk('news/deleteNews', async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/news/delete/${id}`, {headers});
        return response.data;
    } catch (error) {
        console.error('Error updating news:', error);
        throw new Error('Failed to delete news. Please try again later.');
    }
});
