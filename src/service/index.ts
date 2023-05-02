import { ByCategory, CategoryType } from "../types/api";

const BASE_URL = "https://house-plants2.p.rapidapi.com"
const headers = {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY
}

export const getAllCategories = async (): Promise<CategoryType[]> => {

    const response = await fetch(`${BASE_URL}/categories`, { headers });
    const data = await response.json();
    return data;
}

export const getByCategory = async (categoryName: string): Promise<ByCategory[] | undefined> => {
    try {
        const response = await fetch(`${BASE_URL}/category/${categoryName}`, { headers })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}