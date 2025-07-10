import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div
            className={
                "h-screen flex flex-col items-center justify-center text-center gap-5"
            }
        >
            <h1
                className={
                    "text-8xl uppercase font-bold bg-clip-text text-transparent bg-gradient-to-tl from-sky-800 via-purple-500 to-sky-400 mb-10"
                }
            >
                Welcome to the Movie DB App
            </h1>
            <p className={"text-md font-bold text-sky-950"}>
                Explore the latest movies and find your favorites!
            </p>
            <Link
                to={"/movies/"}
                className="bg-sky-950 text-white font-bold py-2 px-4 rounded-lg hover:cursor-pointer hover:bg-sky-700 transition-colors duration-300"
            >
                Browse Movies
            </Link>
        </div>
    );
};
