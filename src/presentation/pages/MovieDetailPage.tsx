import { useParams, useNavigate } from "react-router-dom";
import { useMovie } from "../../hooks/useMovies";

export const MovieDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const movieId = Number(id);

    const navigate = useNavigate();

    const { data: movie, isLoading, isError, error } = useMovie(movieId);
    if (isLoading)
        return (
            <div
                className={"flex flex-col items-center justify-center h-screen"}
            >
                <h1
                    className={
                        "text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tl from-sky-800 to-sky-400 text-center"
                    }
                >
                    Loading details...
                </h1>
            </div>
        );
    if (isError) return <pre>Error: {error.message}</pre>;
    if (!movie)
        return (
            <h1 className="text-2xl text-sky-900 font-bold text-center">
                Movie not found
            </h1>
        );

    const handleGoBack = () => {
        void navigate(-1);
    };

    return (
        <div className="relative">
            <button
                onClick={handleGoBack}
                className="absolute top-5 right-5 z-20 bg-sky-950 text-white font-bold py-2 px-4 rounded-lg hover:cursor-pointer hover:bg-sky-700 transition-colors duration-300"
            >
                ⬅️ Back to list
            </button>
            <div>
                <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                    className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-black/75"></div>
            </div>
            <div className="absolute top-0 left-0 right-0 w-full h-[500px]">
                <div className="max-w-11/12 flex flex-col lg:flex-row items-center my-12 mx-auto">
                    <div className="lg:w-1/3">
                        <img
                            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                            alt={movie.title}
                            className="max-w-96 w-full rounded-md shadow-lg shadow-sky-400/50"
                        />
                    </div>
                    <div className="lg:w-2/3">
                        <h1 className="text-4xl text-white font-bold mb-4">
                            {movie.title}
                        </h1>

                        {movie.release_date && (
                            <p className="text-gray-300 mb-4">
                                Release Date:{" "}
                                {new Date().toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        )}

                        {movie.overview && (
                            <div className="mb-6">
                                <h2 className="text-2xl text-white font-semibold mb-2">
                                    Overview
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    {movie.overview}
                                </p>
                            </div>
                        )}

                        {movie.vote_average && (
                            <div className="mb-4">
                                <span className="text-lg text-white font-semibold">
                                    Rating:{" "}
                                </span>
                                <span className="text-yellow-500 text-lg">
                                    ⭐ {movie.vote_average.toFixed(1)}/10
                                </span>
                            </div>
                        )}

                        {Array.isArray(movie.genres) &&
                            movie.genres.length > 0 && (
                                <div className="mb-4">
                                    <span className="text-lg text-white font-semibold">
                                        Genres:{" "}
                                    </span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {movie.genres.map((genre) => (
                                            <span
                                                key={genre.id}
                                                className="bg-sky-100 text-sky-950 px-3 py-1 rounded-full text-sm"
                                            >
                                                {genre.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};
