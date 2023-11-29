import { PropsWithChildren, createContext, useState } from "react";
import { useUser } from "../hooks/useUser";
import { UserType } from "../models/user.model";

interface UserContextType {
  user: {
    userList: UserType[]
    isLoading: boolean,
    error: Error | null
  }
  hasNextPage: boolean
  actions: {
    deleteUser: (id: string) => () => void
    resetUsers: () => void
    changePage: () => void
  },
  colorRows: {
    value: string,
    onClick: () => void
  },
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: PropsWithChildren) {
  const { user, hasNextPage, actions, } = useUser()
  const [colorRows, setColorRows] = useState("")

  const changeColorRows = () => setColorRows(prevState => {
    return prevState === "rows" ? "" : "rows"
  })

  return (
    <UserContext.Provider value={{
      user,
      hasNextPage,
      actions,
      colorRows: { value: colorRows, onClick: changeColorRows }
    }}>
      {children}
    </UserContext.Provider>
  )
}