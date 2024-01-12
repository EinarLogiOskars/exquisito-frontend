import axios from "axios";

const API_BASE_URL = 'https://exquisito-web.onrender.com';

const apiService = axios.create({
    baseURL: API_BASE_URL,
});

export const createUser = async (signupForm) => {
    try {
        const response = await apiService.post('/api/v1/auth', signupForm);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    };
};