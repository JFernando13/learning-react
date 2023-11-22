import { Cart } from "./components/Cart/Cart";
import { Filter } from "./components/Filter/Filter";
import { ListOfProducts } from "./components/Product/ListOfProducts";

export function App() {

  return (
    <main>
      <header>
        <Filter />
        <Cart />
      </header>
      <ListOfProducts />
    </main>
  )
}

