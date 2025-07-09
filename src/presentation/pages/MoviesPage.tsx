import { useMovies } from "../../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";

export const MoviesPage = () => {
    const { data, isLoading, isError, error, isFetching } = useMovies(1);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (isError) {
        return <pre>Error: {JSON.stringify(error)}</pre>;
    }

    const movies = data?.results ?? [];

    return (
        <div className="container mx-auto p-6">
            <h1 className={"text-2xl font-bold text-sky-900 text-center mb-6"}>
                Popular Movies
            </h1>
            {isFetching && <div>Loading results...</div>}
            <div className={"flex flex-row justify-center gap-6 flex-wrap"}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};
