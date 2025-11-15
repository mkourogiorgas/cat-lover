import axios from 'axios';

import C from './constants';

const API_KEY = import.meta.env.VITE_CAT_API_KEY;
const API_BASE_URL =
  import.meta.env.VITE_CAT_API_BASE_URL || 'https://api.thecatapi.com/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-api-key': API_KEY || '',
  },
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(C.API_ERROR, error.response.status, error.response.data);
    } else if (error.request) {
      console.error(C.NETWORK_ERROR);
    } else {
      console.error(C.REQUEST_ERROR, error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
