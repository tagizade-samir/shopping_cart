import { axiosClient } from "./axiosClient";

export const getAllSubCategories = async (category: string): Promise<any> => {
    const result = await axiosClient.get('/categories/' + category);
    return result;
}