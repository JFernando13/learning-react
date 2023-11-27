import { RegisterOptions } from "react-hook-form"

export enum FieldsType {
  name = "name",
  tel = "tel",
  profilePhoto = "profilePhoto"
}

export interface InputType {
  id: `${string}-${string}-${string}-${string}-${string}`,
  name: FieldsType,
  displayName: string,
  placeholder?: string,
  type: string,
  rules?: RegisterOptions
  accept?: string
}

export type FormFields = {
  name: string,
  tel: string,
  profilePhoto: string
}