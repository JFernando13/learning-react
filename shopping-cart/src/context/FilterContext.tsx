import { createContext } from "react";
import { useFilter } from "../hooks/useFilter";
import { FilterType } from "../models/products";

interface FilterContextType {
  filter: FilterType,
  handleFilter: {
    minPrice: (e: React.SyntheticEvent<HTMLInputElement>) => void
    maxPrice: (e: React.SyntheticEvent<HTMLInputElement>) => void
    categories: (e: React.SyntheticEvent<HTMLSelectElement>) => void
  }
}

export const FilterContext = createContext({} as FilterContextType)

export function FilterContextProvider({ children }: { children: React.ReactNode }) {
  const filter: FilterContextType = useFilter()

  return (
    <FilterContext.Provider value={filter}>
      {children}
    </FilterContext.Provider>
  )
}

