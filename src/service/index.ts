import { ByCategory, CategoryType } from "../types/api";
import { rapidApi } from "./rapidApi";

export const getAllCategories = async ():Promise<CategoryType[] | undefined> => {
    try {
        const { data } = await rapidApi.get<CategoryType[]>('/categories');
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getByCategory = async (categoryName: string):Promise<ByCategory[] | undefined> => {
    try {
        const { data } = await rapidApi.get<ByCategory[]>(`/category/${categoryName}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}