export type ID = `${string}-${string}-${string}-${string}`

export type Item = {
  title: string,
  id: ID
}

export interface Board {
  name: string,
  id: ID,
  items: Item[]
}

export type Drags = {
  over: (e: React.DragEvent<HTMLElement>) => void
  start: (item: Item) => () => void,
  drop: (e: React.DragEvent<HTMLUListElement>, id: ID) => void
}
