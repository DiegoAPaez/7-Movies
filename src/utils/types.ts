export interface MoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    genres: Genre[];
}

export interface Genre {
    id: number;
    name: string;
}

export interface Cast {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
}

export interface CastResponse {
    data: {
        cast: Cast[];
    };
}

export interface Person {
    biography: string;
    birthday: string;
    name: string;
    place_of_birth: string;
    profile_path: string | null;
}

export interface PersonResponse {
    data: Person;
}

export interface CreditsResponse {
    data: {
        cast: Movie[];
    };
}
