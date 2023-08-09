/* eslint-disable no-console */
import axios from 'axios';
import {API_URL} from '../constants';
import {News} from '../types';

const getAccessToken = () => {
    return localStorage.getItem('access_token');
};

const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
};

export const getAllNews = async () => {
    return await axios
        .get(`${API_URL}/news`, {headers})
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const getNewsByType = async (type: string) => {
    return await axios
        .get(`${API_URL}/news/${type}`, {headers})
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const addNewNews = async (data: Omit<News, '_id'>) => {
    return await axios
        .post(`${API_URL}/news/new`, data, {headers})
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const deleteNews = async (id: string) => {
    return await axios
        .delete(`${API_URL}/news/delete/${id}`, {headers})
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const editNews = async (id: string, updateData: Omit<News, '_id'>) => {
    return await axios
        .put(`${API_URL}/news/edit/${id}`, updateData, {headers})
        .then((res) => res.data)
        .catch((err) => console.log(err));
};
