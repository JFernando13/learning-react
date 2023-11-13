import { useState } from "react";
import { Movies } from "./components/Movie/Movies";
import { Search } from "./components/Search/Search";
import './global.css';
import { useMovies } from "./hooks/useMovies";

export function App() {
  const [sort, setSort] = useState(false)
  const { movies, getMovies, error, loading } = useMovies(sort)

  const changeOrder = () => setSort(!sort)

  return (
    <>
      <Search getMovies={getMovies} changeOrder={changeOrder} sort={sort} movies={movies} />
      <Movies movies={movies} error={error} loading={loading} />
    </>
  )
}