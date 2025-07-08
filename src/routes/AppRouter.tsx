import { Route, Routes } from "react-router";
import {MainPage} from "../presentation/components/pages/MainPage.tsx";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
        </Routes>
    );
};
