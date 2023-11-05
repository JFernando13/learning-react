import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserInfo } from '../../models/user.model'
import { clearLocaleStorage, saveToLocaleStorage } from '../../utils/localeStorage'

const initialUser: UserInfo = {} as UserInfo
const nameState = "user"

export const userSlice = createSlice({
  name: nameState,
  initialState: JSON.parse(localStorage?.getItem(nameState) ?? JSON.stringify(initialUser)),
  reducers: {
    createUser: (_, action: PayloadAction<UserInfo>) => {
      saveToLocaleStorage(action.payload, nameState)
      return action.payload
    },
    updateUser: (state, action) => {
      const user = { ...state, ...action.payload }
      saveToLocaleStorage(user, nameState)
      return user
    },
    resetUser: () => {
      clearLocaleStorage(nameState)
      return initialUser
    }
  }
})

// Exportar cada uno de las aciones
export const { createUser, resetUser, updateUser } = userSlice.actions
