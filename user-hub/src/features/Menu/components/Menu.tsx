import { useContext } from "react"
import { FilterContext } from "../../User/context/FilterContext"
import { UserContext } from "../../User/context/UserContext"
import { Property } from "../../User/models/user.model"
import style from './menu.module.css'

export function Menu() {
  const { property, actions: { sortByProperty }, filter } = useContext(FilterContext)
  const { colorRows, actions: { resetUsers } } = useContext(UserContext)

  return (
    <menu className={style["menu"]}>
      <button onClick={colorRows.onClick}>Colorear filas</button>
      <button onClick={sortByProperty(Property.country)}>
        {property.value === Property.country && property ? 'desordenar' : 'ordenar'} por pais
      </button>
      <button onClick={resetUsers}>Resetear estado</button>
      <input
        type="text"
        placeholder="filtrar por pais"
        onChange={filter.onChange}
        value={filter.value}
        className={style["filter"]}
      />
    </menu>
  )
}