import axios from 'axios';
import { env } from '../config/env';
const API_ROOT = env.REACT_APP_API_ROOT;
export const axiosInstance = axios.create({
  baseURL: API_ROOT,
  withCredentials: true
});


// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Request Sent:', config);
    console.log('Base URL:', config.baseURL); // Log baseURL
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response Received:', response);
    return response;
  },
  (error) => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);