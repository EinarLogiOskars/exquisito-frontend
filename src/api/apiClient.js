import axios from "axios";
import { useAuthStore } from "../store/authStore";

const API_BASE_URL = 'https://exquisito-web.onrender.com';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use(config => {
    const { headers } = useAuthStore.getState();

    if (headers.client && headers['access-token'] && headers.uid) {
        config.headers['client'] = headers.client;
        config.headers['access-token'] = headers['access-token'];
        config.headers['uid'] = headers.uid;
    };

    return config;
}, error => Promise.reject(error));

apiClient.interceptors.response.use(response => {
    const headers = response.headers;
    const currentHeaders = useAuthStore.getState().headers;

    if (headers['access-token'] && headers['client'] && headers['uid']) {
        if (headers['access-token'] !== currentHeaders['access-token'] || headers['client'] !== currentHeaders['client']) {
            useAuthStore.getState().updateHeaders({
                'access-token': headers['access-token'],
                'client': headers['client'],
                'uid': headers['uid'],
            });
        };
    };

    return response;
}, error => {
    return Promise.reject(error);
});

export default apiClient;