import { FieldValues, useForm } from "react-hook-form"
import { FormFields } from "../models/form.model"
import { ContactType } from "../models/contact.model"

const defaultForm = {
  name: "",
  tel: "",
  profilePhoto: ""
}


export function useFormContact() {
  const { reset, handleSubmit, formState, register, getValues } = useForm<FormFields>({ defaultValues: defaultForm })

  const onSubmit = (data: FieldValues) => {
    const newContact: ContactType = {
      name: data.name,
      tel: data.tel,
      profilePhoto: URL.createObjectURL(data.profilePhoto[0])
    }

    setContacts([...contacts, newContact])
    reset()
  }

  return {
    contact: getValues(),
    onSubmit
  }
}