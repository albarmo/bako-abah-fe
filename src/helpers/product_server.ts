import axios, { AxiosError } from 'axios';

export const fetchProductList = async (params: { limit: string, status: boolean, offset: number, keyword: string }) => {
    const queryString = new URLSearchParams(params as any).toString();
    console.log(queryString)

    try {
        const response = await axios.get(`/api/product`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};


export const createProduct = async (payload: { title: string, price: number, image: File | any, status: boolean }) => {
    let formData = new FormData();
    formData.append("image", payload.image, payload.image.name);
    formData.append('status', String(payload.price));
    formData.append('price', String(payload.price));
    formData.append('title', payload.title);

    try {
         const response = await axios.request({
            method: 'POST',
            url: `http://localhost:8080/products`,
            headers: {
                "content-type": "multipart/form-data",
                'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFhNGU1NzE5LTQyODYtNDMzZS05Yjg4LTFhNzcxMmIwZDgxYiIsImVtYWlsIjoiYWRtaW5AdmFzY29tbS5pZCIsInBhc3N3b3JkIjoiJDJhJDEwJFd2c0NsRzVSU3hoVGJYdEdEd1MvOC4udmpsTC4zeDRTZU55clptL3h6Yk0ucUxldlBuMS9pIiwiaWF0IjoxNjk2NTI4ODQ4LCJleHAiOjE2OTcxMzM2NDh9.l1MjSAcIwMls45V3RwjchC_HGz9pMe4aZn42J8duVfQ' || ''
            },
            data: formData
        });
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};

export const updateProduct = async (payload: {id :string, title: string, price: number, image: File | any, status: boolean }) => {
    let formData = new FormData();
    formData.append("image", payload.image, payload.image.name);
    formData.append('status', String(payload.price));
    formData.append('price', String(payload.price));
    formData.append('title', payload.title);

    try {
         const response = await axios.request({
            method: 'PUT',
            url: `http://localhost:8080/products/${payload?.id}`,
            headers: {
                "content-type": "multipart/form-data",
                'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFhNGU1NzE5LTQyODYtNDMzZS05Yjg4LTFhNzcxMmIwZDgxYiIsImVtYWlsIjoiYWRtaW5AdmFzY29tbS5pZCIsInBhc3N3b3JkIjoiJDJhJDEwJFd2c0NsRzVSU3hoVGJYdEdEd1MvOC4udmpsTC4zeDRTZU55clptL3h6Yk0ucUxldlBuMS9pIiwiaWF0IjoxNjk2NTI4ODQ4LCJleHAiOjE2OTcxMzM2NDh9.l1MjSAcIwMls45V3RwjchC_HGz9pMe4aZn42J8duVfQ' || ''
            },
            data: formData
        });
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};

export const deleteProduct = async (id: string) => {
    try {
        const response = await axios.delete(`/api/product?id=${id}`);
        return response;
    } catch (error) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        return responseData;
    }
};