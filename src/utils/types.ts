export interface Movie {
    id: string;
    poster_path: string;
    title: string;
    release_date: string;
}

export interface MoviesResponse {
    results: Movie[];
}
