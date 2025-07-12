import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useRegisterMutation } from "../query/authQueries";
import { useState } from "react";

export const RegisterForm = () => {
    const navigate = useNavigate();
    const initialForm = { email: "", password: "", confirmPassword: "" };
    const { onInputChange, email, password, confirmPassword } =
        useForm(initialForm);

    const [passwordMatch, setPasswordMatch] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { mutateAsync, isPending, error, isSuccess } = useRegisterMutation({
        onSuccess: () => {
            setTimeout(() => {
                void navigate("/movies");
            }, 3000);
        },
    });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (password !== confirmPassword) {
            setPasswordMatch(false);
            return;
        }

        setPasswordMatch(true);
        await mutateAsync({ email, password });
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4 w-full max-w-4xl mx-auto p-6">
            <p className="text-sky-950 text-center w-10/12 md:w-1/2 mb-6">
                Join MovieDB to rate movies, create your watchlist, and get
                personalized recommendations!
            </p>

            {isSuccess ? (
                <div className="text-center">
                    <div
                        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
                        role="alert"
                    >
                        <strong className="font-bold">Success! </strong>
                        <span className="block sm:inline">
                            Your account has been created successfully.
                        </span>
                        <p className="mt-2">
                            We've sent a verification email to {email}.
                        </p>
                        <p className="mt-2">
                            You'll be redirected to the movies page in a
                            moment...
                        </p>
                    </div>
                    <button
                        className="bg-sky-950 text-white font-bold py-2 px-8 rounded-lg hover:cursor-pointer hover:bg-sky-700 transition-colors duration-300"
                        onClick={() => void navigate("/movies")}
                    >
                        Go to Movies Now
                    </button>
                </div>
            ) : (
                <>
                    <form
                        className="flex flex-col items-center justify-center w-full"
                        onSubmit={(event) => {
                            void handleSubmit(event);
                        }}
                    >
                        <div className="flex flex-col items-center gap-4 mb-4 w-10/12 md:w-1/2">
                            <div className={"flex flex-col gap-4 mb-4 w-full"}>
                                <input
                                    className="p-2 border border-sky-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={onInputChange}
                                    required
                                />
                                <input
                                    className="p-2 border border-sky-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={onInputChange}
                                    required
                                />
                                <input
                                    className={`p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500 ${
                                        !passwordMatch && formSubmitted
                                            ? "border-red-500"
                                            : "border-sky-300"
                                    }`}
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                            {!passwordMatch && formSubmitted && (
                                <p className="text-red-500 text-sm">
                                    Passwords do not match
                                </p>
                            )}
                        </div>

                        <button
                            className="bg-sky-950 text-white font-bold py-2 px-8 rounded-lg hover:cursor-pointer hover:bg-sky-700 transition-colors duration-300 mb-4"
                            disabled={isPending}
                        >
                            {isPending ? "Creating Account..." : "Sign Up"}
                        </button>

                        {error && (
                            <div className="text-red-500 mt-2 mb-4">
                                {error.message}
                            </div>
                        )}
                    </form>

                    <p className="text-center text-sm text-sky-950">
                        Already have an account?{" "}
                        <Link to="/login" className="hover:underline font-bold">
                            Log in
                        </Link>
                    </p>
                </>
            )}
        </div>
    );
};
