import { axiosClient } from "./axiosClient";

export const getAllCategories = async (): Promise<any> => {
    const result = await axiosClient.get('/categories');
    return result;
}