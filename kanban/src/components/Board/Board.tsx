import { Board, Drags } from "../../models/board"

interface Props {
  drags: Drags,
  board: Board
}

export function Board({ board, drags: { over, drop, start } }: Props) {
  return (
    <li
      key={board.id}
    >
      <h2>{board.name}</h2>
      <ul onDragOver={over} onDrop={(e) => drop(e, board.id)}>
        {
          board.items.map(item => (
            <li
              key={item.id}
              draggable
              onDragStart={start(item)}
            >
              {item.title}
            </li>
          ))
        }
      </ul>
    </li>
  )
}