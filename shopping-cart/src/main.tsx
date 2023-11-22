import ReactDOM from 'react-dom/client'
import { App } from './App'
import { CartContextProvider } from './context/CartContext'
import { FilterContextProvider } from './context/FilterContext'
import { ProductContextProvider } from './context/ProductContext'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <FilterContextProvider>
    <ProductContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  </FilterContextProvider>
)