import { useParams } from "react-router-dom";
import { usePerson } from "../../hooks/useMovies";
import type { PersonResponse } from "../../utils/types";
import { MovieCarousel } from "../components/MovieCarousel";

export const PersonDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const actorId = Number(id);

    const {
        data: actorResponse,
        isLoading: isPersonLoading,
        isError: isPersonError,
    } = usePerson(actorId) as {
        data?: PersonResponse;
        isLoading: boolean;
        isError: boolean;
    };

    if (isPersonLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tl from-sky-800 to-sky-400 text-center">
                    Loading...
                </h1>
            </div>
        );
    }

    if (isPersonError) {
        return (
            <div className="text-center text-red-500">Error loading data</div>
        );
    }

    const actor = actorResponse?.data;

    if (!actor) {
        return <div className="text-center text-red-500">Actor not found</div>;
    }
    if (!actor.profile_path) {
        return null;
    }
    return (
        <div className="bg-gray-50 py-10">
            <div className="flex flex-row max-w-11/12 mx-auto">
                <div className="flex-1">
                    <img
                        src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                        alt={actor.name}
                        className="max-w-full mx-auto rounded-md shadow-lg object-contain"
                    />
                </div>
                <div className="flex flex-col items-start justify-start gap-5 md:ml-10 overflow-x-hidden flex-2">
                    <h1 className="text-3xl font-bold text-sky-950 mt-4">
                        {actor.name}
                    </h1>
                    <h2 className="font-bold text-xl">Biography</h2>
                    <p className="mt-2 text-justify">{actor.biography}</p>
                    <p className="mt-2">
                        <span className="font-bold">Born: </span>
                        {new Date(actor.birthday).toLocaleDateString()}
                    </p>
                    <p className="mt-2">
                        <span className="font-bold">Place of Birth: </span>
                        {actor.place_of_birth}
                    </p>

                    <h2 className="font-bold text-xl">Known For</h2>
                    <div className="w-full overflow-x-auto overflow-y-hidden">
                        <MovieCarousel id={actorId} />
                    </div>
                </div>
            </div>
        </div>
    );
};
