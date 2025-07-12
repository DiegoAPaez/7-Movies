import { RegisterForm } from "../components/RegisterForm";

export const RegisterPage = () => {
    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center gap-2">
                <h1
                    className={
                        "text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-tl from-sky-800 to-sky-400 text-center"
                    }
                >
                    Register your account
                </h1>
                <RegisterForm />
            </div>
        </>
    );
};
