import { UserInfo } from "../models/user.model"

export const saveToLocaleStorage = (user: UserInfo, nameState: string) => {
  localStorage.setItem(nameState, JSON.stringify(user))
}

export const clearLocaleStorage = (nameState: string) => localStorage.removeItem(nameState)