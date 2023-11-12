import { Comic } from "../../models/comics.model"

interface Props {
  comic: Comic
}

export function Comic({ comic }: Props) {
  return (
    <li>
      <h2>{comic.title}</h2>
      <img src={comic.thumbnail.path + "/portrait_xlarge/" + comic.thumbnail.extension} alt={comic.title} />
      <span>{comic.dates[0].date}</span>
    </li>
  )
}