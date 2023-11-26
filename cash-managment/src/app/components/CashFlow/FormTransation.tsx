import { LegacyRef, SyntheticEvent, useContext } from "react"
import { MoneyTransationContext } from "../../context/MoneyTransationContext"

interface Props {
  title: string,
  closeFormTransation: () => void,
  dialogRef: LegacyRef<HTMLDialogElement>
}

export function FormTransation({ title, closeFormTransation, dialogRef }: Props) {

  const { handler: { formTransation } } = useContext(MoneyTransationContext)

  const hanlderSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    formTransation(e)
    closeFormTransation()
  }

  return (
    <dialog ref={dialogRef}>
      <form name={title} onSubmit={hanlderSubmit}>

        <fieldset>
          <label htmlFor="transation-name">Transation Name:</label>
          <input
            type="text"
            placeholder='Ex: Shop candy to mom, Uber, etc...'
            name='title'
            id='transation-name'
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="category">Name Category:</label>
          <input
            type="text"
            placeholder='Ex: Clothes, Supermarket, etc...'
            required
            name='category'
            id='category'
          />
        </fieldset>

        <input type="date" name='date' required />

        <input
          type="number"
          placeholder='$300.000...'
          required
          name='value' />

        <menu>
          <button onClick={closeFormTransation}>Cancel</button>
          <button>Save</button>
        </menu>
      </form>
    </dialog >
  )
}