import { DeleteIcon } from './DeleteIcon'
import data from './data.json'
import style from './users.module.css'

interface Props {
  deleteUser: (id: number) => void
  user: typeof data[0]
}

export function User({ user, deleteUser }: Props) {
  return (
    <article className={style.user}>
      <header>
        <h2>{user.username}</h2>
        <p className={style.email}>{user.email}</p>
      </header>
      <button className={style["btn-delete"]} onClick={() => deleteUser(user.id)}><DeleteIcon /></button>
    </article>
  )
}