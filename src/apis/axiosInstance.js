import axios from 'axios';
import { env } from '../config/env';
const API_ROOT = env.REACT_APP_API_ROOT;
export const axiosInstance = () =>{
  console.log("API_ROOT", API_ROOT);
  
  return axios.create({
    baseURL: API_ROOT,
    withCredentials: true
  })
};