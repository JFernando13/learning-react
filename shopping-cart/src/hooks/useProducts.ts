import { useEffect, useState } from "react";
import { products as originalProducts } from '../mocks/products.json';
import { FilterType, FilterProductsType } from "../models/products";
import { getCategories, getFilterProducts } from "../utils/filter";

const emptyProducts: FilterProductsType = {
  filteredProducts: [],
  maxPrice: 0,
}

export function useProducts({ filter }: { filter: FilterType }) {
  const [products, setProducts] = useState(emptyProducts)

  const categories = getCategories(originalProducts)

  useEffect(() => {
    const products = getFilterProducts(originalProducts, filter)
    setProducts(products)
  }, [filter])

  return { products, categories }
}