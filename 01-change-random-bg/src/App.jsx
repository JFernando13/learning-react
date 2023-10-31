import { useEffect } from "react";

function App() {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
  }

  const changeBgColor = (element) => element.style.backgroundColor = getRandomColor() 

  useEffect(() => {
    changeBgColor(window.document.body)

    return () => window.alert('Adios mi amigo')
  }, [])

  return (
    <>
      <button onClick={() => changeBgColor(window.document.body)}>Change Background</button>
    </>
  )
}

export default App
