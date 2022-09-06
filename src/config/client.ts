import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_API_CLIENT;

export const api = axios.create({
  baseURL,
});
