import { Action, CartHandlers, State } from "../models/cart"

export enum CartActionName {
  addToCart = "addToCart",
  removeOne = "removeOne",
  removeAll = "removeAll"
}

const cartHandlers: Record<string, CartHandlers> = {
  [CartActionName.addToCart]: (state, payload) => {
    let isProductInCart = false

    if (typeof payload === "number" || !payload) return state

    const newState = state.map(cartProduct => {
      if (cartProduct.id === payload.id) {
        isProductInCart = true
        return { ...cartProduct, quantity: cartProduct.quantity + 1 }
      }

      return cartProduct
    })

    if (!isProductInCart) {
      newState.push({ ...payload, quantity: 1 })
    }

    return newState
  },

  [CartActionName.removeOne]: (state, id) => {
    return state.filter(cartProduct => cartProduct.id !== id)
  },

  [CartActionName.removeAll]: () => []
}

export const cartReducer = (state: State, action: Action): State => {
  const handler = cartHandlers[action.type];

  if (!handler) return state;

  return handler(state, action.payload);
}