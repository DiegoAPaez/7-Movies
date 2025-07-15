import { moviesApi } from "../Movies/movies";

export const getCast = async (id: number) => {
    const response = await moviesApi.get(`/movie/${String(id)}/credits`);
    return response;
};

export const getPersonDetails = async (id: number) => {
    const response = await moviesApi.get(`/person/${String(id)}`);
    return response;
};

export const getMovieCredits = async (id: number) => {
    const response = await moviesApi.get(`/person/${String(id)}/movie_credits`);
    return response;
};
