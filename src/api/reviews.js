import apiClient from "./apiClient";

export const getReview = async (review) => {
    try {
        const response = await apiClient.get(`/api/v1/reviews/${review}`);
        return response;
    } catch (error) {
        return error;
    }
};

export const getReviews = async () => {
    try {
        const response = await apiClient.get("api/v1/reviews");
        return response;
    } catch (error) {
        return error;
    }
};