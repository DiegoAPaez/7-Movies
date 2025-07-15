import { useNavigate } from "react-router-dom";
import type { CastResponse } from "../../utils/types";

export const ActorCard = ({
    actor,
}: {
    actor: CastResponse["data"]["cast"][number];
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        void navigate(`/persons/${String(actor.id)}`);
    };

    if (!actor.profile_path) return null;
    return (
        <div
            className="flex flex-col items-center shadow-lg bg-sky-950/80 p-4 rounded-lg hover:cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => {
                handleClick();
            }}
        >
            <img
                src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                alt={actor.name}
                className="w-40 rounded-md mb-2 shadow-sm shadow-sky-950"
            />
            <h3 className="text-md text-center font-bold text-white w-40">
                {actor.name}
            </h3>
            <p className="text-center text-gray-300 w-40">{actor.character}</p>
        </div>
    );
};
