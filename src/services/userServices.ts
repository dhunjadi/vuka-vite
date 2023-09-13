import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {API_URL} from '../constants';
import {User} from '../types/userTypes';
import {LoginForm} from '../types/loginTypes';

export const login = async ({email, password}: LoginForm): Promise<User> => {
    const response = await axios.post(`${API_URL}/login`, {email, password});
    localStorage.setItem('access_token', response.data.access_token);
    const user: User = jwtDecode(response.data.access_token);
    return user;
};
