import { useContext } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { ContactContext } from '../../Contacts/context/ContactContext'
import { ContactType } from '../models/contact.model'
import { FieldsType, FormFields, InputType } from '../models/form.model'




const defaultForm = {
  name: "",
  tel: "",
  profilePhoto: ""
}


const formInputs: InputType[] = [
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

export function FormContact() {
  const { handlers: { addContact } } = useContext(ContactContext)
  const { reset, handleSubmit, formState, register } = useForm<FormFields>({ defaultValues: defaultForm })

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    const newContact: ContactType = {
      name: data.name,
      tel: data.tel,
      profilePhoto: data.profilePhoto ? URL.createObjectURL(data.profilePhoto[0]) : "https://i.pinimg.com/736x/9b/ee/30/9bee3042945510711dca39418fa185f3.jpg"
    }

    addContact(newContact)
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoCapitalize="on" autoComplete='off'>
        {
          formInputs.map(input => (
            <fieldset key={input.id}>
              <label htmlFor={input.id}>{input.displayName}</label>
              <input
                type={input.type}
                placeholder={input.placeholder}
                accept={input.accept}
                {...register(input.name, { ...input.rules })}
              />
              {
                formState.errors[input.name]?.type && <p>{formState.errors[input.name]?.message}</p>
              }
            </fieldset>
          ))
        }
        <button type='submit'>submit</button>
      </form>

    </>
  )
}