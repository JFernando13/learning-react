import { useState } from "react"

const emptyFilter = {
  price: { min: 0, max: 99999 },
  category: 'all'
}

export function useFilter() {
  const [filter, setFilter] = useState(emptyFilter)

  const handleMinPrice = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const newFilter = {
      ...filter,
      price: { ...filter?.price, min: parseInt(e.currentTarget.value) }
    }

    setFilter(newFilter)
  }

  const handleCategories = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const newFilter = {
      ...filter,
      category: e.currentTarget.value
    }

    setFilter(newFilter)
  }

  const handleMaxPrice = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const newFilter = {
      ...filter,
      price: { ...filter.price, max: parseInt(e.currentTarget.value) }
    }

    setFilter(newFilter)
  }

  return {
    handleFilter: {
      minPrice: handleMinPrice,
      maxPrice: handleMaxPrice,
      categories: handleCategories
    },
    filter
  }
}