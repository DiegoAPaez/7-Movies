import { useQuery } from "@tanstack/react-query";
import { getMovies, getMovieById } from "../data/Movies/movies";
import {
    getCast,
    getMovieCredits,
    getPersonDetails,
} from "../data/Persons/persons";

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

export const useCast = (id: number) => {
    return useQuery({
        queryKey: ["cast", id],
        queryFn: () => getCast(id),
        staleTime: 1000 * 60 * 5,
    });
};

export const usePerson = (id: number) => {
    return useQuery({
        queryKey: ["person", id],
        queryFn: () => getPersonDetails(id),
        staleTime: 1000 * 60 * 5,
    });
};

export const useMovieCredits = (id: number) => {
    return useQuery({
        queryKey: ["movieCredits", id],
        queryFn: () => getMovieCredits(id),
        staleTime: 1000 * 60 * 5,
    });
};
