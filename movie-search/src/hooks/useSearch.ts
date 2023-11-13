import debounce from 'just-debounce-it'
import { SyntheticEvent, useCallback, useState } from "react"
interface Props {
  getMovies: (search: string) => void
}

const initialSearch = ''

export function useSearch({ getMovies }: Props) {
  const [search, setSearch] = useState(initialSearch)

  const getMoviesDebounce = useCallback(debounce((search: string) => {
    getMovies(search)
    setSearch(initialSearch)
  }, 500), [])

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    getMovies(search)
    setSearch(initialSearch)
  }

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
    getMoviesDebounce(e.currentTarget.value)
  }

  return { handleChange, handleSubmit, search }
}