import { useMovieCredits } from "../../hooks/useMovies";
import type { CreditsResponse } from "../../utils/types";
import { MovieCard } from "./MovieCard";

export const MovieCarousel = ({ id }: { id: number }) => {
    const {
        data: moviesResponse,
        isLoading: isMoviesLoading,
        isError: isMoviesError,
    } = useMovieCredits(id) as {
        data?: CreditsResponse;
        isLoading: boolean;
        isError: boolean;
    };

    if (isMoviesLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tl from-sky-800 to-sky-400 text-center">
                    Loading...
                </h1>
            </div>
        );
    }

    if (isMoviesError) {
        return (
            <div className="text-center text-red-500">Error loading data</div>
        );
    }

    const movies = moviesResponse?.data.cast ?? [];

    return (
        <div className="flex flex-row gap-4 h-[400px] py-5 flex-nowrap overflow-y-hidden">
            {movies.map((movie) => (
                <MovieCard movie={movie} />
            ))}
        </div>
    );
};
