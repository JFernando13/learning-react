import styles from '../styles/menu.module.css'
import { Dropmenu } from "./Dropmenu";
import { Link } from "react-router-dom";
import { Menu } from '@/models';


interface Props {
  menu: Menu[]
}

export function MenuItems({menu}: Props) {
  return (
    <>
      {
        menu.map(({children, path, title}) => (
            <li key={path} className={styles["content-dropmenu"]}>
              {children 
                ? <Dropmenu submenu={children} title={title} path={path}/> 
                : <Link to={path} className={styles["animal-link"]}>{title}</Link> }
            </li>
          ))
      }
    </>
  )
}