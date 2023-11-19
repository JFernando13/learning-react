import { useRef, useState } from "react"
import { Board, ID, Item } from "../models/board"
import { fakeData } from "../mocks/board"

export function useBoard() {
  const [board, setBoard] = useState<Board[]>(fakeData)
  const dragItem = useRef<Item>()

  const over = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault()
  }

  const start = (item: Item) => () => {
    dragItem.current = item
  }

  const drop = (e: React.DragEvent<HTMLUListElement>, id: ID) => {
    e.preventDefault()

    setBoard(prevState => {
      const updateBoard = prevState.map(board => {
        return {
          ...board, items: board.items.filter(item => item.id !== dragItem.current?.id)
        }
      })

      const destinationBoard = updateBoard.find(board => board.id === id)
      if (destinationBoard && dragItem.current) {
        destinationBoard.items = [...destinationBoard.items, dragItem.current]
      }

      return updateBoard
    })
  }

  return {
    board,
    drags: {
      over,
      start,
      drop
    }
  }
}