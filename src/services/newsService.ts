/* eslint-disable no-console */
import axios from 'axios';
import {API_URL} from '../constants';

export const getAllNews = async () => {
    return await axios
        .get(`${API_URL}/news`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const getNewsByType = async (type: string) => {
    return await axios
        .get(`${API_URL}/news/${type}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

export const addNewNews = async () => {
    await axios
        .post(`${API_URL}/news/new`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};
