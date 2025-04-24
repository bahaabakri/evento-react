// utils/api.ts or lib/api.ts
import axios from 'axios';

const axiosInstance  = axios.create({
  baseURL: 'http://localhost:3000', // replace with your base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  get: async <T = unknown>(url: string, config = {}) => {
    const response = await axiosInstance.get<T>(url, config);
    return response.data;
  },

  post: async <T = unknown>(url: string, data: unknown, config = {}) => {
    const response = await axiosInstance.post<T>(url, data, config);
    return response.data;
  },

  put: async <T = unknown>(url: string, data: unknown, config = {}) => {
    const response = await axiosInstance.put<T>(url, data, config);
    return response.data;
  },

  delete: async <T = unknown>(url: string, config = {}) => {
    const response = await axiosInstance.delete<T>(url, config);
    return response.data;
  },

  axios: axiosInstance, // expose instance in case you want to use it directly
};

export default api;