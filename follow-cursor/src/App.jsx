import { useEffect, useState } from 'react'
import './App.css'

const initialPosition = {
  x: 0,
  y: 0
}

function App() {
  const [cursorPosition, setCursorPosition] = useState(initialPosition)

  const handleMove = (e) => {
    const { offsetX, offsetY } = e
    setCursorPosition({ x: offsetX, y: offsetY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMove)

    // return () =>
    //   window.removeEventListener('mousemove', handleMove)
  }, [])

  const styleCursor = {
    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`
  }

  return (
    <div
      className='btn-cursor'
      style={styleCursor}
    />
  )
}

export default App
