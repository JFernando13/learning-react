import { createContext, useReducer } from "react";
import { OriginalProductType, ProductType } from "../models/products";
import { CartActionName, cartReducer } from "../reducer/cartReducer";

interface CartContextType {
  cart: ProductType[]
  handlerCart: {
    add: (product: OriginalProductType) => void
    removeOne: (id: number) => void
    removeAll: () => void
  }
}

export const CartContext = createContext({} as CartContextType)

interface Props {
  children: React.ReactNode
}

export function CartContextProvider({ children }: Props) {
  const [cart, dispatch] = useReducer(cartReducer, [] as ProductType[])

  const add = (product: OriginalProductType) => {
    dispatch({ type: CartActionName.addToCart, payload: product })
  }

  const removeOne = (id: number) => {
    dispatch({ type: CartActionName.removeOne, payload: id })
  }

  const removeAll = () => dispatch({ type: CartActionName.removeAll })

  return <CartContext.Provider value={{ cart, handlerCart: { add, removeOne, removeAll } }}>{children}</CartContext.Provider>
}