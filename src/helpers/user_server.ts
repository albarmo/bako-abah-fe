import axios, { AxiosError } from 'axios';

export const fetchUserList = async (params: string) => {
    try {
        const response = await axios.get('/api/user');
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};

export const registerAccount = async (payload: {name:string, email: string, password: string, phone:string, role:string,  }) => {
    try {
        const response = await axios.post('/api/user', payload);
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};

export const updateAccount = async (payload: {id:string,name:string, email: string,phone:string }) => {
    try {
        const response = await axios.put('/api/user', payload);
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};

export const deleteUser = async (id:string) => {
    try {
        const response = await axios.delete(`/api/user?id=${id}`);
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};