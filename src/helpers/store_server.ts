import axios, { AxiosError } from 'axios';

export const fetchStoreList = async (params: { limit: string, status: boolean, offset: number, keyword: string }) => {
    const queryString = new URLSearchParams(params as any).toString();

    try {
        const response = await axios.get(`/api/store`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};
