import { useCast } from "../../hooks/useMovies";
import type { CastResponse } from "../../utils/types";
import { ActorCard } from "./ActorCard";

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
            <div className="flex flex-row flex-nowrap gap-5 m-6 p-4 overflow-y-hidden">
                {cast.map((actor) => {
                    return <ActorCard key={actor.id} actor={actor} />;
                })}
            </div>
        </>
    );
};
