import { useNavigate, useParams } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";

export const MoviesPage = () => {
    const navigate = useNavigate();
    const { page: pageParam } = useParams();
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    const { data, isLoading, isError, error, isFetching } = useMovies(page);

    if (isLoading) {
        return (
            <h1 className="text-2xl text-sky-900 font-bold text-center my-10">
                Loading list...
            </h1>
        );
    }
    if (isError) {
        return <pre>Error: {JSON.stringify(error)}</pre>;
    }

    const movies = data?.results ?? [];

    const handleNextPage = () => {
        if (data && page < data.total_pages) {
            void navigate(`/movies/page/${String(page + 1)}`);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            void navigate(`/movies/page/${String(page - 1)}`);
        }
    };

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
            <div
                className={
                    "flex flex-row justify-center items-center gap-4 mt-6"
                }
            >
                <button
                    onClick={handlePreviousPage}
                    className={
                        " text-white bg-sky-950 font-bold p-3 rounded-lg hover:cursor-pointer hover:bg-sky-700 transition-colors duration-300"
                    }
                >
                    Previous
                </button>
                <p className={"text-lg font-semibold text-sky-900"}>
                    {page}{" "}
                    <span className="text-sm font-medium text-gray-500">
                        of {data?.total_pages}
                    </span>
                </p>

                <button
                    onClick={handleNextPage}
                    className={
                        " text-white bg-sky-950 font-bold p-3 rounded-lg hover:cursor-pointer hover:bg-sky-700 transition-colors duration-300"
                    }
                >
                    Next
                </button>
            </div>
        </div>
    );
};
