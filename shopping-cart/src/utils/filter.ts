import { FilterType, OriginalProductType } from "../models/products"

export const getMaximumPrice = (products: OriginalProductType[], category: string = 'all') => {
  const filteredProductsByCategory = products.filter(product => {
    return product.category === category || category === 'all'
  })

  const prices = filteredProductsByCategory.map(product => product.price)
  return Math.max(...prices)
}

export const getCategories = (products: OriginalProductType[]) => {
  const uniqueCategories = new Set<string>()
  uniqueCategories.add("all")
  products.forEach(product => uniqueCategories.add(product.category))

  return Array.from(uniqueCategories)
}

export const getFilterProducts = (products: OriginalProductType[], filter: FilterType) => {
  const filteredProducts = products.filter(product => {
    return (
      (product.price >= filter.price.min && product.price <= filter.price.max) &&
      (product.category === filter.category || filter.category === 'all'))
  })

  const maxPrice = getMaximumPrice(products, filter.category)
  const categories = getCategories(products)

  return { filteredProducts, maxPrice, categories }
}