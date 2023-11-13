import { Movie } from "../../models/movies"
import style from './search.module.css'

interface Props {
  movies: Movie[]
  changeOrder: () => void
  sort: boolean
}

export function SortInput({ movies, changeOrder, sort }: Props) {
  return (
    <>
      {
        !movies.length || <label className={style.sort}>
          sort
          <input type="checkbox" checked={sort} onChange={changeOrder} />
        </label>
      }
    </>
  )
}