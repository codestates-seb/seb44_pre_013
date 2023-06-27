import axios from 'axios';
import { CONFIG } from '../constants/config';

const authInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

authInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    config.headers['Authorization'] = token || '';
    return config;
  },

  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default authInstance;
