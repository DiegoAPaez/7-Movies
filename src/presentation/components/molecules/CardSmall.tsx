import { useNavigate } from "react-router";

interface CardSmallProps {
    id: string;
    title: string;
    poster: string;
    date?: string;
    // getDetails?: () => void;
}

export const CardSmall = ({ id, title, poster, date }: CardSmallProps) => {
    const navigate = useNavigate();
    const handleClick = () => {
        void navigate(`/movie/${id}`);
    };

    return (
        <div id={id} className={"max-w-80 w-full shadow-md rounded-xl"}>
            <img
                className={"rounded-t-lg hover:cursor-pointer"}
                src={`https://image.tmdb.org/t/p/w342/${poster}`}
                alt={title}
                loading="lazy"
                onClick={handleClick}
            />
            <div className="m-3">
                <h2
                    className={
                        "font-bold hover:text-sky-400 hover:cursor-pointer"
                    }
                    onClick={handleClick}
                >
                    {title}
                </h2>
                {date && <p className={"text-gray-600"}>{date}</p>}
            </div>
        </div>
    );
};
