import './App.css'
import { Loading } from './components/Loading/Loading'
import { useCatFact } from './hooks/useCatFact'
import { useCatImg } from './hooks/useCatImg'

const BASE_URL = 'https://catfact.ninja/fact'

function App() {
  const { loading: loadingFact, newCatFact, fact } = useCatFact(BASE_URL)
  const { loading: loadingImg, catImg: { id, wordToSay } } = useCatImg(fact)

  return (
    <main>
      {loadingImg
        ? <Loading /> 
        : <img
          src={`https://cataas.com/cat/${id}/says/${wordToSay}?fontColor=red&fontSize=62&width=700&height=500`}
          alt={id} />}
      {loadingFact ? <Loading /> : <p>{fact}</p>}

      <button onClick={newCatFact}>Get new fact</button>
    </main>
  )
}

export default App
