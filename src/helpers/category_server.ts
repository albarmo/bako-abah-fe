import axios, { AxiosError } from 'axios';

export const fetchCategoryList = async (params: { limit: string, status: boolean, offset: number, keyword: string }) => {
    try {
        const response = await axios.get(`/api/category`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};

export const fetchCategoryDetail = async (params: { id: string}) => {
    try {
        const response = await axios.get(`/api/category/${params?.id}`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};
