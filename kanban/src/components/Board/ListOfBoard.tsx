import { type Board as BoardType, Drags } from "../../models/board"
import { Board } from "./Board"


interface Props {
  boards: BoardType[]
  drags: Drags
}

export function ListOfBoard({ boards, drags }: Props) {
  return (
    <ul>
      {boards.map(board => <Board board={board} drags={drags} />)}
    </ul>
  )
}