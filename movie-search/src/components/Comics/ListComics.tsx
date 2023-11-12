import { type Comic as ComicType } from '../../models/comics.model'
import { Comic } from './Comic'

interface Props {
  comics: ComicType[]
}

export function ListComics({ comics }: Props) {
  return (
    <main>
      {
        comics.map(comic => {
          return <Comic comic={comic} key={comic.id}/>
        })
      }
    </main>
  )
}