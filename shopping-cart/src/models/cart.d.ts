import { OriginalProductType } from "./products"

export type State = ProductType[]

export type Payload = OriginalProductType | number | undefined

export enum CartActionName {
  addToCart = "addToCart",
  removeOne = "removeOne",
  removeAll = "removeAll"
}

export type Action = {
  type: CartActionName,
  payload?: Payload
}

export type CartHandlers = (state: ProductType[], payload: Payload) => State
