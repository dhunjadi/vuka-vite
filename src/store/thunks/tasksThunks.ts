/* eslint-disable no-console */
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../constants';

const getAccessToken = () => {
    return localStorage.getItem('access_token');
};

const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
};

export const fetchAllTasks = createAsyncThunk('tasks/fetchAll', async () => {
    try {
        const response = await axios.get(`${API_URL}/tasks`, {headers});
        return response.data;
    } catch (err) {
        console.error('Error fetching tasks:', err);
        throw new Error('Failed to fetch tasks. Please try again later.');
    }
});
