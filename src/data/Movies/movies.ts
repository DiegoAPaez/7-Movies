import axios from "axios";
import type { Movie, MoviesResponse } from "../../utils/types";

const BEARER_TOKEN: string = import.meta.env.VITE_BEARER_TOKEN as string;
const API_URL: string = import.meta.env.VITE_MOVIES_API_URL as string;

export const moviesApi = axios.create({
    baseURL: API_URL,
    headers: {
        accept: "application/json",
        Authorization: BEARER_TOKEN,
    },
});

export const getMovies = async (page = 1): Promise<MoviesResponse> => {
    const response = await moviesApi.get(`/movie/popular?page=${String(page)}`);
    return response.data as MoviesResponse;
};

export const getMovieById = async (id: number): Promise<Movie> => {
    const response = await moviesApi.get(`/movie/${String(id)}`);
    return response.data as Movie;
};
