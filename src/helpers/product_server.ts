import axios, { AxiosError } from 'axios';
type TParams = {
    limit: number;
    page: number;
    sort: string;
    filter: any;
}
export const fetchProductList = async (params: TParams) => {
    const filterString = JSON.stringify(params.filter);
    const queryString = new URLSearchParams({
        ...params,
        filter: filterString,
    } as any).toString();

    try {
        const response = await axios.get(`/api/product?${queryString}`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};

export const fetchProductDetail = async (params: { id: string }) => {
    try {
        const response = await axios.get(`/api/product/${params?.id}`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};