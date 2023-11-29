import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { FilterProvider } from './features/User/context/FilterContext'
import { UserProvider } from './features/User/context/UserContext'
import './style.css'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById("app")!).render(
  <QueryClientProvider client={client}>
    <UserProvider>
      <FilterProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </FilterProvider>
    </UserProvider>
  </QueryClientProvider>
)