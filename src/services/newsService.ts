import axios from 'axios';

export const getAllNews = async () => {
    return axios.get('http://localhost:4000/news');
};
