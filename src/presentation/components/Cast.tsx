import { useCast } from "../../hooks/useMovies";
import type { CastResponse } from "../../utils/types";

interface CastProps {
    id: number;
}

export const Cast = ({ id }: CastProps) => {
    const { data, isError, error } = useCast(id) as {
        data?: CastResponse;
        isLoading: boolean;
        isError: boolean;
        error: unknown;
    };

    if (isError) {
        return <pre>Error: {JSON.stringify(error)}</pre>;
    }

    const cast = data?.data.cast ?? [];

    return (
        <>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tl from-sky-800 to-sky-400 text-center m-5">
                Movie Cast
            </h2>
            <div className="flex flex-row flex-wrap justify-center gap-5 m-4">
                {cast.map((actor) => {
                    if (!actor.profile_path) return null;
                    return (
                        <div
                            className="flex flex-col items-center shadow-lg bg-sky-950/80 p-4 rounded-lg"
                            key={actor.id}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                                alt={actor.name}
                                className="w-40 rounded-md mb-2 shadow-sm shadow-sky-950"
                            />
                            <h3 className="text-md text-center font-bold text-white w-40">
                                {actor.name}
                            </h3>
                            <p className="text-center text-gray-300 w-40">
                                {actor.character}
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
