import { useState } from "react"
import styles from './app.module.css'

const initialState = []

function App() {

  const [listShoes, setListShoes] = useState(initialState)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const shoes = e.target[0].value

    if (!shoes) {
      return setError('No se aceptan valores vacios ❌')
    }

    setListShoes(prevState => [...prevState, { shoes, id: crypto.randomUUID()}])
    
    e.target[0].value = ''
    setError('')
  }

  const deleteShoes = (id) => {
    setListShoes(prevState => prevState.filter(shoes => shoes.id !== id))
  } 

  return (
    <>
    <h1 style={{textAlign: 'center', marginBottom: '2rem'}}>Your TOP 10</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="Ej: Sneakers" className={styles['input-data']}/>
        <button className={styles['btn-submit']}>Añadir</button>
      </form>
      
      {error && <b>{error}</b> }

      {
        listShoes.length === 0 
          ? <p>Añade 👟 para formar tu 🔝🔟 </p> 
          : <ol>
              {listShoes.map(({shoes, id}) => <li 
                key={id} 
                className={`${styles.shoes}`} 
                onClick={() => deleteShoes(id)}
              >
                {shoes}
              </li>)}
            </ol>
      }
    </>
  )
}

export default App
