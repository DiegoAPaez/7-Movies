import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../../data/Movies/getMovies";
import type { Movie, MoviesResponse } from "../../../utils/types";
import { CardSmall } from "../molecules/CardSmall";

export const MoviesList = () => {
    const { isFetching, data, error } = useQuery({
        queryKey: ["getMovies"],
        queryFn: getMovies,
    });

    const moviesData = data?.data as MoviesResponse | undefined;
    const movies: Movie[] = moviesData?.results ?? [];

    return (
        <>
            {isFetching ? (
                <h2>Loading...</h2>
            ) : (
                <div
                    className={
                        "flex justify-evenly gap-10 flex-row flex-wrap mt-4"
                    }
                >
                    {movies.map((movie) => (
                        <CardSmall
                            id={movie.id}
                            title={movie.title}
                            poster={movie.poster_path}
                            date={new Date(
                                movie.release_date
                            ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "2-digit",
                            })}
                            key={movie.id}
                        />
                    ))}
                </div>
            )}
            {error && <pre>Error: {JSON.stringify(error)}</pre>}
        </>
    );
};
