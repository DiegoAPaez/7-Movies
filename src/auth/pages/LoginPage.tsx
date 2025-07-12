import { Navigate } from "react-router-dom";
import { LoginForm } from "../../auth/components/LoginForm";
import { useAuthUserQuery } from "../query/authQueries";

export const LoginPage = () => {
    const { data: user } = useAuthUserQuery();
    const isLogged = !!user;

    return (
        <>
            {isLogged && <Navigate to={"/"} replace={true} />}
            <div className="h-screen flex flex-col items-center justify-center gap-2">
                <h1
                    className={
                        "text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-tl from-sky-800 to-sky-400 text-center mb-10"
                    }
                >
                    Login to your account
                </h1>
                <LoginForm />
            </div>
        </>
    );
};
