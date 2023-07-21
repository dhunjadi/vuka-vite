import axios from 'axios';
import {User} from '../types';

export const login = async (email: string, password: string): Promise<User | undefined> => {
  try {
    const response = await axios.post('http://localhost:4000/auth/login', {email, password});
    return response.data as User;
  } catch (error) {
    console.log(error);
  }
};
