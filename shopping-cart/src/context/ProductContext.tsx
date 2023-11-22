import { createContext, useContext } from "react";
import { useProducts } from "../hooks/useProducts";
import { FilterProductsType } from "../models/products";
import { FilterContext } from "./FilterContext";

interface ProductContextType {
  products: FilterProductsType,
  categories: string[]
}

export const ProductContext = createContext({} as ProductContextType)

export function ProductContextProvider({ children }: { children: React.ReactNode }) {
  const { filter } = useContext(FilterContext)
  const { products, categories } = useProducts({ filter })

  return (
    <ProductContext.Provider value={{ products, categories }}>
      {children}
    </ProductContext.Provider>
  )
}