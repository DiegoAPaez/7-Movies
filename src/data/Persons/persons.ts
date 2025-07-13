import { moviesApi } from "../Movies/movies";

export const getCast = async (id: number) => {
    const response = await moviesApi.get(`/movie/${String(id)}/credits`);
    return response;
};
