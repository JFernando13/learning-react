import { MovieResult } from "../models/movies"

export const fetchMovies = async (search: string) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjhkOTEzMWU5YWUyOTA5NTgyZGE0MmMwMDQzMTM0YyIsInN1YiI6IjY0YzE0MzViMWNmZTNhMGViMzBiZjhlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hYno7CpLrCIPE2h6KzCcugoH_UMNNUDb1OJmWk5dwwg"
    }
  })

  const { results }: { results: MovieResult[] } = await response.json()

  const transformMovies = results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster: "https://image.tmdb.org/t/p/w500/" + movie.poster_path,
    release_date: movie.release_date,
    overview: movie.overview
  }))

  return transformMovies
}