import axios from 'axios';
import store from '../store/store';

export const API_BASE = 'https://likelion-running.store';

const axiosClient = axios.create({
  baseURL: API_BASE,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  }
});

const formDataClient = axios.create({
  baseURL: API_BASE,
  timeout: 50000,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

axiosClient.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.user.value.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

formDataClient.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.user.value.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const get = (url, config) => {
  const response = axiosClient.get(url, config || {});
  return response;
};

export const post = async (url, data) => {
  const response = await axiosClient.post(url, data);
  return response;
}

export const del = async (url, data) => {
  const response = await axiosClient.delete(url, { data });
  return response;
}

export const patch = async (url, data) => {
  const response = await axiosClient.patch(url, data);
  return response;
}

export const formDataPost = async (url, data) => {
  const response = await formDataClient.post(url, data);
  return response;
}