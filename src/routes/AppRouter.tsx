import { Route, Routes } from "react-router";
import { Header } from "../presentation/components/Header.tsx";
import { HomePage } from "../presentation/pages/HomePage.tsx";
import { MoviesPage } from "../presentation/pages/MoviesPage.tsx";
import { MovieDetailPage } from "../presentation/pages/MovieDetailPage.tsx";

export const AppRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:id" element={<MovieDetailPage />} />
                <Route path="*" element={<div>404 - Not Found</div>} />
            </Routes>
        </>
    );
};
