import { Link } from "react-router-dom"
import styles from '../styles/menu.module.css'

interface Props {
  submenu: {
    path: string,
    title: string
  }[],
  title: string,
  path: string
}

export function Dropmenu({ submenu, title, path }: Props) {
  return (
    <>
      <Link to={path} className={styles.links}>{title}</Link>
      <ul className={styles.dropmenu}>
        {submenu.map(item => (
          <li key={item.title}>
            <Link to={item.path} className={styles["animal-link"]}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

