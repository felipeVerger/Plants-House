import { Categories } from "../types/types";

export const getAllCategories = async ():Promise<Categories> => {
    const response = await fetch("https://house-plants2.p.rapidapi.com/categories", {
        headers: {
            'X-RapidAPI-Key': 'c258715b99msh0433246a68387f3p19683djsnbd539385787c',
        }
    });
    const data = await response.json();
    return data;
}