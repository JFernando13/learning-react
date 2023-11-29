import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"
import { UserContext } from "../context/UserContext"
import { Property } from "../models/user.model"
import { User } from "./User"
import style from './user.module.css'

export function ListOfUsers() {
  const { user: { isLoading, error}} = useContext(UserContext)
  const { filteredUsers, actions: { sortByProperty } } = useContext(FilterContext)

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <table className={style["table"]}>
      <thead>
        <tr>
          <th>Foto</th>
          <th onClick={sortByProperty(Property.name)} className={style["property"]}>Nombre</th>
          <th onClick={sortByProperty(Property.lastName)} className={style["property"]}>Apellido</th>
          <th onClick={sortByProperty(Property.country)} className={style["property"]}>País</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {filteredUsers.length === 0 && !isLoading && <tr><td colSpan={5}>No existen usuarios para ese pais</td></tr>}
        {filteredUsers.map(user => <User user={user} key={user.email} />)}
        {isLoading && <p>LOADING</p>}
      </tbody>
    </table>
  )

}