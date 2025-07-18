import { Link } from "react-router-dom";
import { useAuthUserQuery } from "../../auth/query/authQueries";

export const Footer = () => {
    const { data: user } = useAuthUserQuery();

    return (
        <footer
            className={
                "bg-sky-950 p-6 text-white flex justify-center items-start gap-10"
            }
        >
            <div className={"flex flex-col items-end gap-6"}>
                <h2
                    className={
                        "text-right font-bold text-2xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-sky-400"
                    }
                >
                    MovieDB
                </h2>
                {user && (
                    <p
                        className={
                            "text-md font-bold bg-white py-4 px-6 rounded-lg text-sky-400 hover:cursor-pointer "
                        }
                    >
                        Hi {user.email}!
                    </p>
                )}
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
