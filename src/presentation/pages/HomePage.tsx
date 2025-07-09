import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Movie App</h1>
            <p>Explore the latest movies and find your favorites!</p>
            <Link to={"/movies"}>Browse Movies</Link>
        </div>
    );
};
