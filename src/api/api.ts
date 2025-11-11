import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();

const baseURL = process.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL,
  headers: {'Accept' : 'application/json'},
});

// Request: attach token if exists
api.interceptors.request.use((config)=>{
  const token = localStorage.getItem('access_token');
  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default api;