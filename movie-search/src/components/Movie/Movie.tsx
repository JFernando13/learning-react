import { Movie } from "../../models/movies"
import style from './movie.module.css'

interface Props {
  movie: Movie
}

export function Movie({ movie }: Props) {
  return (
    <article className={style.movie}>
      <img className={style.img} src={movie.poster} alt={movie.title} />
      <hgroup className={style.info}>
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
      </hgroup>
    </article>
  )
}