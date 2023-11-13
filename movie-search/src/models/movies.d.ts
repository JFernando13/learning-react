export interface Movie {
  id: number;
  overview: string;
  poster: string;
  release_date: string;
  title: string;
}

export interface MovieResult {
  adult: boolean;
  backdrop_path?: null;
  genre_ids?: (null)[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
