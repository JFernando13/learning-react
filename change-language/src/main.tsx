import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { LanguageContextProvider } from './context/LanguageContext'
import './global.css'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <LanguageContextProvider>

      <App />
    </LanguageContextProvider>
  </React.StrictMode>
)