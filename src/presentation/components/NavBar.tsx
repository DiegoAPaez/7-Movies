import { Link } from "react-router";

export const NavBar = () => {
    return (
        <nav className={"flex gap-4 text-white font-bold"}>
            <Link to={"/movies"}>Movies</Link>
            <Link to={"/"}>TV Shows</Link>
            <Link to={"/"}>People</Link>
            <Link to={"/"}>More</Link>
        </nav>
    );
};
