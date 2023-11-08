import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImg } from './hooks/useCatImg'

const BASE_URL = 'https://catfact.ninja/fact'

function App() {
  const { loading: loadingFact, newCatFact, fact } = useCatFact(BASE_URL)
  const { loading: loadingImg, catImg: { id, firstWord } } = useCatImg(fact)

  return (
    <>
      {loadingImg
        ? <h1>Loading</h1>
        : <img
          src={`https://cataas.com/cat/${id}/says/${firstWord}?fontColor=red&fontSize=62&width=700&height=300`}
          alt={id} />}
      {loadingFact ? <h1>Loading</h1> : <p>{fact}</p>}

      <button onClick={newCatFact}>Get new Fact</button>
    </>
  )
}

export default App
