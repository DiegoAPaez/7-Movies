import { NavBar } from "./NavBar.tsx";

export const Header = () => {
    return (
        <header
            className={
                "bg-sky-950 p-6 text-white flex justify-between items-center"
            }
        >
            <div className={"flex items-center gap-6"}>
                <h1
                    className={
                        "font-bold text-2xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-sky-400"
                    }
                >
                    MovieDB
                </h1>
                <NavBar />
            </div>
            <div>
                <p className={"font-bold"}>Login</p>
            </div>
        </header>
    );
};
