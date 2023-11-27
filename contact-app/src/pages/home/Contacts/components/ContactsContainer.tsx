import { useContext } from "react"
import { Contact } from "../context/Contact"
import { ContactContext } from "../context/ContactContext"

export function ContactsContainer() {
  const { contacts } = useContext(ContactContext)

  return (
    <section>
      <h2>Lista de Contactos</h2>
      {
        contacts.length > 0
          ? contacts.map(contact => <Contact contact={contact} key={contact.tel} />)
          : <p>No tienes amigos</p>
      }
    </section>
  )
}