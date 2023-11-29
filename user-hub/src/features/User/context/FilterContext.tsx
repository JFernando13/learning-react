import { PropsWithChildren, SyntheticEvent, createContext, useContext } from "react";
import { useFilter } from "../hooks/useFilter";
import { Property, UserType } from "../models/user.model";
import { UserContext } from "./UserContext";

interface FilterContextType {
  filteredUsers: UserType[]
  actions: {
    sortByProperty: (newProperty: Property) => () => void,
  },
  filter: {
    value: string,
    onChange: (e: SyntheticEvent<HTMLInputElement>) => void
  },
  property: {
    value: Property | null
  }
}

export const FilterContext = createContext({} as FilterContextType)

export function FilterProvider({ children }: PropsWithChildren) {
  const { user: { userList } } = useContext(UserContext)
  const { actions, filter, property, filteredUsers } = useFilter(userList)

  return (
    <FilterContext.Provider value={{
      filteredUsers,
      actions,
      filter,
      property
    }}>
      {children}
    </FilterContext.Provider>
  )
}