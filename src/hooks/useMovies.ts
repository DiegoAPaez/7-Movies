import { useQuery } from "@tanstack/react-query";
import { getMovies, getMovieById } from "../data/Movies/movies";

export const useMovies = (page: number) => {
    return useQuery({
        queryKey: ["movies", page],
        queryFn: () => getMovies(page),
        staleTime: 1000 * 60 * 5,
    });
};

export const useMovie = (id: number) => {
    return useQuery({
        queryKey: ["movie", id],
        queryFn: () => getMovieById(id),
        staleTime: 1000 * 60 * 5,
    });
};
