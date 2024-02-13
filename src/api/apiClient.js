import axios from "axios";

const API_BASE_URL = 'https://exquisito-web.onrender.com';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
});

export default apiClient;