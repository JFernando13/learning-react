import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { type UserType } from "../models/user.model"
import style from './user.module.css'

interface Props {
  user: UserType
}

export function User({ user }: Props) {

  const { colorRows,  actions: { deleteUser } } = useContext(UserContext)

  return (
    <tr className={style[colorRows.value]}>
      <td className={style["data"]}><img src={user.picture.thumbnail} alt="" /></td>
      <td className={style["data"]}>{user.name.first}</td>
      <td className={style["data"]}>{user.name.last}</td>
      <td className={style["data"]}>{user.location.country}</td>
      <td className={style["data"]}><button onClick={deleteUser(user.email)}>Eliminar</button></td>
    </tr>
  )
}