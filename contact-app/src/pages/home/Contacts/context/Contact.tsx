import { ContactType } from "../../Form/models/contact.model"

interface Props {
  contact: ContactType
}

export function Contact({ contact }: Props) {
  return (
    <article key={contact.tel}>
      <img src={contact.profilePhoto} alt={contact.name} />
      <hgroup>
        <h3>{contact.name}</h3>
        <p>{contact.tel}</p>
      </hgroup>
    </article>
  )
}