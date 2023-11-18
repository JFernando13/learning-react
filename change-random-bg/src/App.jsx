import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("#000000")
  const [bgColor, setBgColor] = useState(color)

  const getRandomColor = () => {
    const letters = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
  }

  const changeBgColor = () => {
    const randomColor = getRandomColor()

    window.document.body.style.backgroundColor = randomColor
    setColor(randomColor)
    setBgColor(adjustColor(randomColor, 1.8))
  }

  const adjustColor = (color, factor) => {
    const hexToRgb = (hex) => {
      hex = hex.replace(/^#/, '');
    
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
    
      return [r, g, b];
    };
    
    const rgb = hexToRgb(color)

    const adjustColor = rgb.map(component => {
      return Math.min(Math.round(component * factor), 255).toString(16).padStart(2, '0')
    });

    return "#" + adjustColor.join('')
  }

  useEffect(() => {
    changeBgColor()
  }, [])

  return (
      <button 
        onClick={changeBgColor} 
        style={{color, backgroundColor: bgColor}}
      >
        Change Background
      </button>
  )
}

export default App
