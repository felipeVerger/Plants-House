import axios from "axios";

export const rapidApi = axios.create({
    baseURL: "https://house-plants2.p.rapidapi.com",
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY
    }
})
