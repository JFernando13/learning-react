import { useSearch } from '../../hooks/useSearch';
import { Movie } from '../../models/movies';
import { SortInput } from './SortInput';
import style from './search.module.css';

interface Props {
  getMovies: (search: string) => void,
  changeOrder: () => void
  sort: boolean
  movies: Movie[]
}

export function Search({ getMovies, changeOrder, sort, movies }: Props) {

  const { handleChange, handleSubmit, search } = useSearch({ getMovies })

  return (
    <search className={style.search}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Marvel..."
          className={style["search-input"]}
          value={search}
          onChange={handleChange}
        />
        <SortInput movies={movies} changeOrder={changeOrder} sort={sort} />
      </form>
    </search>
  )
}