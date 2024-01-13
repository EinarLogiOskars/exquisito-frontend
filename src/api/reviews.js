import axios from "axios";

const API_BASE_URL = 'https://exquisito-web.onrender.com';

const apiService = axios.create({
    baseURL: API_BASE_URL,
});

export const getReview = async (review) => {
    try {
        const response = await apiService.get(`/api/v1/reviews/${review}`);
        return response;
    } catch (error) {
        return error;
    }
};