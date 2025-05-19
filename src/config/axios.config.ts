import axios from 'axios';
import Cookies from 'js-cookie';

const isLive = true;

const apiUrl = import.meta.env.VITE_API_URL;

const localhost = 'http://localhost:3000';

const baseURL = isLive ? apiUrl : localhost;

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(
  config => {
    const token = Cookies.get('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
