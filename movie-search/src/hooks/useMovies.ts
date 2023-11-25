import { useRef, useState } from "react"
import { Movie } from "../models/movies"
import { fetchMovies } from "../services/fetch"

const initialMovies: Movie[] = []

export function useMovies(sort: boolean) {
  const previousSearch = useRef('')
  const [error, setError] = useState('')
  const [movies, setMovies] = useState(initialMovies)
  const [loading, setLoading] = useState(false)

  const getMovies = async (search: string) => {
    setLoading(true)
    try {
      if (search === previousSearch.current) return

      const movies = await fetchMovies(search)
      setMovies(movies)
      previousSearch.current = search

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  const sortedMovies = sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies

  return { movies: sortedMovies, getMovies, error, loading }
}