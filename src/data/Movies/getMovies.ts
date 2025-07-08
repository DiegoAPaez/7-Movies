import axios from "axios";

const BEARER_TOKEN: string = import.meta.env.VITE_BEARER_TOKEN as string;
const API_URL: string = import.meta.env.VITE_MOVIES_API_URL as string;

export const getMovies = async () => {
    return await axios({
        method: "get",
        headers: {
            accept: "application/json",
            Authorization: BEARER_TOKEN,
        },
        url: API_URL,
    });
};
