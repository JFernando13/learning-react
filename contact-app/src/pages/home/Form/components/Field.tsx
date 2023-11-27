import { Control, useController } from "react-hook-form"
import { FormFields, InputType } from "../models/form.model"

interface Props {
  input: InputType,
  control: Control<FormFields>
}

export function Field({ input, control }: Props) {

  const { formState, field: { value, onChange } } = useController({
    name: input.name,
    rules: input.rules,
    control
  })

  return (
    <fieldset >
      <label htmlFor={input.id}>{input.displayName}</label>
      <input
        type={input.type}
        placeholder={input.placeholder}
        accept={input.accept}
        value={value}
        onChange={onChange}
      />
      {
        formState.errors[input.name]?.type && <p>{formState.errors[input.name]?.message}</p>
      }
    </fieldset>
  )
}