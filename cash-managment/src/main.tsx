import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { MoneyTransationContextProvider } from './app/context/MoneyTransationContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MoneyTransationContextProvider>
    <App />
  </MoneyTransationContextProvider>
)
