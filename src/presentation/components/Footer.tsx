import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer
            className={
                "bg-sky-950 p-6 text-white flex justify-center items-start gap-10"
            }
        >
            <div className={"flex items-center gap-6"}>
                <h2
                    className={
                        "font-bold text-2xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-sky-400"
                    }
                >
                    MovieDB
                </h2>
            </div>
            <div className={"flex items-start justify-center gap-10"}>
                <div className={"text-white flex flex-col gap-2"}>
                    <h3 className={"uppercase text-lg font-bold"}>
                        The Basics
                    </h3>
                    <div className={"flex flex-col"}>
                        <Link to={"/"}>About MDB</Link>
                        <Link to={"/"}>Contact Us</Link>
                        <Link to={"/"}>Support Forums</Link>
                        <Link to={"/"}>API Documentation</Link>
                        <Link to={"/"}>System Status</Link>
                    </div>
                </div>
                <div className={"text-white flex flex-col gap-2"}>
                    <h3 className={"uppercase text-lg font-bold"}>
                        Get Involved
                    </h3>
                    <div className={"flex flex-col"}>
                        <Link to={"/"}>Contribution Bible</Link>
                        <Link to={"/"}>Add New Movie</Link>
                        <Link to={"/"}>Add New TV Show</Link>
                    </div>
                </div>
                <div className={"text-white flex flex-col gap-2"}>
                    <h3 className={"uppercase text-lg font-bold"}>Community</h3>
                    <div className={"flex flex-col"}>
                        <Link to={"/"}>Guidelines</Link>
                        <Link to={"/"}>Discussions</Link>
                        <Link to={"/"}>Leaderboard</Link>
                    </div>
                </div>
                <div className={"text-white flex flex-col gap-2"}>
                    <h3 className={"uppercase text-lg font-bold"}>Legal</h3>
                    <div className={"flex flex-col"}>
                        <Link to={"/"}>Terms of Use</Link>
                        <Link to={"/"}>API Terms of Use</Link>
                        <Link to={"/"}>Privacy Policy</Link>
                        <Link to={"/"}>DMCA Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
