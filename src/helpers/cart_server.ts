import axios, { AxiosError } from 'axios';

export const fetchUserCarts = async (params: { limit: string, status: boolean, offset: number, keyword: string }) => {
    try {
        const response = await axios.get(`/api/cart`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};