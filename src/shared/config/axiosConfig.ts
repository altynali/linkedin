import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_APP_BASE_URL,
};

const postsApi = axios.create(config);

export default postsApi;
