type Image = {
  path: string,
  extension: string
}

type ComicDates = {
  type: string,
  date: string
}

export interface Comic {
  id: number,
  title: string,
  thumbnail: Image,
  dates: ComicDates[]
}
