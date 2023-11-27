import { PropsWithChildren, createContext, useState } from "react";
import { ContactType } from "../../Form/models/contact.model";

interface ContactContextType {
  contacts: ContactType[],
  handlers: {
    addContact: (newContact: ContactType) => void
  }
}

export const ContactContext = createContext({} as ContactContextType)

export function ContactContextProvider({ children }: PropsWithChildren) {
  const [contacts, setContacts] = useState([] as ContactType[])

  const addContact = (newContact: ContactType) => {
    setContacts([...contacts, newContact])
  }
  return (
    <ContactContext.Provider value={{ contacts, handlers: { addContact } }}>
      {children}
    </ContactContext.Provider>
  )
}