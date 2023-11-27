import { ContactsContainer } from "./pages/home/Contacts/components/ContactsContainer";
import { FormContact } from "./pages/home/Form/components/FormContact";

export function App() {
  return (
    <>
      <h1>Contact App</h1>
      <FormContact />
      <ContactsContainer />
    </>
  )
}