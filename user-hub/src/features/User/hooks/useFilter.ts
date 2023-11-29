import { SyntheticEvent, useMemo, useState } from "react"
import { Property, UserType } from "../models/user.model"

export function useFilter(users: UserType[]) {
  const [property, setProperty] = useState<Property | null>(null)
  const [filter, setFilter] = useState("")

  const filterByCountry = useMemo(() => {
    return filter.length ? users.filter(user => {
      return user.location.country.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    }) : users
  }, [filter, users])

  const sortedUsers = useMemo(() => {
    if (!property) {
      return filterByCountry
    }

    const propertiesToSort: Record<Property, (a: UserType, b: UserType) => number> = {
      [Property.name]: (a, b) => a.name.first.localeCompare(b.name.first),
      [Property.lastName]: (a, b) => a.name.last.localeCompare(b.name.last),
      [Property.country]: (a, b) => a.location.country.localeCompare(b.location.country)
    }

    const propertyToSort = propertiesToSort[property]

    return filterByCountry.toSorted(propertyToSort)
  }, [filterByCountry, property])

  const sortByProperty = (newProperty: Property) => () => {
    const isSameCountry = filterByCountry.every((user, _, listOfUsers) => user.location.country === listOfUsers[0].location.country)

    if (!filterByCountry.length || isSameCountry) return setProperty(null)

    setProperty(prevState => prevState === newProperty ? null : newProperty)
  }

  const onChangeFilter = (e: SyntheticEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value)
  }

  return {
    filteredUsers: sortedUsers,
    filter: {
      value: filter,
      onChange: onChangeFilter
    },
    property: { value: property },
    actions: {
      sortByProperty,
    }
  }
}