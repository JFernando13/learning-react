import { useEffect, useState } from "react";
import { ListComics } from "./components/Comics/ListComics";
import { Search } from "./components/Search/Search";
import { Comic } from "./models/comics.model";

// a44702e8705cf6daf99e0c91214fe908 -> PUBLIC_KEY
// d186592be344c160d4e34ec024164c5454508fd0 -> PRIVATE_KEY

const BASE_URL = 'https://gateway.marvel.com:443'
const COMICS_URL = '/v1/public/comics'
const PARAMETERS = '?ts=1&limit=5&apikey=a44702e8705cf6daf99e0c91214fe908'

const initialListComics: Comic[] = []

export function App() {
  const [comics, setComics] = useState(initialListComics)

  const fetchComics = async (url: string) => {

    const response = await fetch(url)
    const { results }: { results: Comic[] } = await response.json()

    const transformData = results.map(comic => {
      const newComic: Comic = {
        id: comic.id,
        title: comic.title,
        thumbnail: comic.thumbnail,
        dates: comic.dates
      }

      return newComic
    })

    setComics(transformData)
  }

  useEffect(() => {
    fetchComics(`${BASE_URL}${COMICS_URL}${PARAMETERS}`)
  }, [])

  return (
    <>
      <header>
        <Search />
      </header>
      <main>
        {comics ? <ListComics comics={comics} /> : 'Aqui irian las peliculas'}
      </main>
    </>
  )
}