import { PropsWithChildren, SyntheticEvent, createContext, useMemo, useState } from "react";
import { formatNumber } from "../../utils/moneyTransation";

interface MoneyTransationContextType {
  profits: {
    movements: MovementType[]
    total: string
  },
  expenses: {
    movements: MovementType[]
    total: string
  },
  handler: {
    formTransation: (e: SyntheticEvent<HTMLFormElement>) => void
  }
}


const getTotalMovement = (movement: MovementType[]) => {
  const total = movement.reduce((prev, current) => {
    return prev + Number(current.value)
  }, 0)

  return formatNumber(total)
}

export const MoneyTransationContext = createContext({} as MoneyTransationContextType)

export function MoneyTransationContextProvider({ children }: PropsWithChildren) {
  const [profits, setProfits] = useState([] as MovementType[])
  const [expenses, setExpenses] = useState([] as MovementType[])

  const totalProfits = useMemo(() => {
    return getTotalMovement(profits)
  }, [profits])

  const totalExpenses = useMemo(() => {
    return getTotalMovement(expenses)
  }, [expenses])


  const handleFormTransation = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const fields = e.currentTarget.elements

    const title = (fields.namedItem("title") as HTMLInputElement)
    const date = (fields.namedItem("date") as HTMLInputElement)
    const category = (fields.namedItem("category") as HTMLInputElement)
    const value = (fields.namedItem("value") as HTMLInputElement)

    if (!title.value || !date.value || !category.value || !value.value) return

    const newMovement = {
      id: crypto.randomUUID(),
      title: title.value,
      date: date.value,
      category: category.value,
      value: value.value
    }

    if (e.currentTarget.name.toLocaleLowerCase() === "profits") {
      setProfits(prevState => [...prevState, newMovement])
    } else {
      setExpenses(prevState => [...prevState, newMovement])
    }

    title.value = ""
    date.value = ""
    category.value = ""
    value.value = ""
  }

  const sendState = {
    profits: {
      movements: profits,
      total: totalProfits
    },
    expenses: {
      movements: expenses,
      total: totalExpenses
    },
    handler: {
      formTransation: handleFormTransation
    }
  }

  return (
    <MoneyTransationContext.Provider
      value={sendState}>
      {children}
    </MoneyTransationContext.Provider>
  )
}