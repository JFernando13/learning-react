import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ContactContextProvider } from './pages/home/Contacts/context/ContactContext'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <ContactContextProvider>
      <App />
    </ContactContextProvider>
  </StrictMode>
)