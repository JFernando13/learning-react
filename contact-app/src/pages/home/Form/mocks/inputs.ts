import { FieldsType, InputType } from "../models/form.model"

export const formFields: InputType[] = [
  {
    id: crypto.randomUUID(),
    name: FieldsType.name,
    displayName: "Nombre",
    placeholder: "Juan Fernando, Laura Mejia...",
    type: "text",
    rules: {
      required: {
        value: true,
        message: "Necesitas colocarle un nombre"
      }
    }
  },
  {
    id: crypto.randomUUID(),
    name: FieldsType.tel,
    displayName: "Numero de celular",
    placeholder: "32424203...",
    type: "number",
    rules: {
      required: {
        value: true,
        message: "El numero de telefono es requerido"
      },
      validate: (value) => {
        return value.length === 10 || "10 caracteres"
      }
    },
  },
  {
    id: crypto.randomUUID(),
    name: FieldsType.profilePhoto,
    displayName: "Foto de perfil",
    type: "file",
    accept: "image/png, image/jpg"
  }
]