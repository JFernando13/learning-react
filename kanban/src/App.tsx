import { ListOfBoard } from './components/Board/ListOfBoard'
import { useBoard } from './hooks/useBoard'

export function App() {

 const { board, drags } = useBoard()

  return (
    <ListOfBoard
      boards={board}
      drags={drags}
    />
  )
}