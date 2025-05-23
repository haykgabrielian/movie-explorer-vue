export type Movies = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type Movie = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type MovieDetails = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: Collection | null;
    budget: number;
    genres: Genre[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

type Collection = {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
};

export type Genres = {
    genres: Genre[];
};

export type Genre = {
    id: number;
    name: string;
};

type ProductionCompany = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

export type Credits = {
    id: number;
    cast: CastMember[];
    crew: CrewMember[];
};

type CastMember = {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
    gender: number;
    popularity: number;
};

type CrewMember = {
    id: number;
    name: string;
    department: string;
    job: string;
    profile_path: string | null;
    gender: number;
    popularity: number;
};

export type Video = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: 'Trailer' | 'Teaser' | 'Featurette' | 'Clip';
    official: boolean;
    published_at: string;
    id: string;
};

export type Videos = {
    id: number;
    results: Video[];
};