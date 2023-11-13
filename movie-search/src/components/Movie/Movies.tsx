import { type Movie as MovieType } from '../../models/movies'
import { Movie } from './Movie'
import style from './movie.module.css'

interface Props {
  movies: MovieType[]
  loading: boolean
  error: string
}
export function Movies({ movies, loading, error }: Props) {

  if (error) return <h2>{error}</h2>

  if (!movies.length && !loading) return <h1 style={{ textAlign: 'center' }}>Ingrese un texto para mostrar peliculas</h1>

  if (loading) return <h1>LOADING...</h1>

  return (
    <main className={style["container-movies"]}>
      {movies.map(movie => <Movie movie={movie} key={movie.id} />)}
    </main>
  )
}