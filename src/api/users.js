import apiClient from "./apiClient";
import { useAuthStore } from "../store/authStore";

export const createUser = async (signupForm) => {
    try {
        const response = await apiClient.post('/api/v1/auth', signupForm);
        return response;
    } catch (error) {
        throw error;
    };
};

export const login = async (loginForm) => {
    try {
        const res = await apiClient.post('api/v1/auth/sign_in', loginForm);
        if (res.status === 200) {
            console.log('200');
            useAuthStore.getState().updateHeaders({
                'client': res.headers['client'],
                'uid': res.headers['uid'],
                'access-token': res.headers['access-token'],
            });
            useAuthStore.getState().updateUserData(res.data);
        }
        return res;
    } catch (error) {
        throw error;
    };
};

export const logout = async () => {
    try {
        const res = await apiClient.delete('api/v1/auth/sign_out');
        if (res.status === 200) {
            useAuthStore.getState().updateHeaders({
                'access-token': '',
                'client': '',
                'uid': '',
            });
            useAuthStore.getState().updateUserData({});

            console.log('Logged out!');
        };
        return res;
    } catch (error) {
        throw error;
    };
};


