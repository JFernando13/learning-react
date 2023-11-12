import { MenuItems } from './MenuItem';
import styles from '../styles/menu.module.css';
import { Link } from 'react-router-dom';

const menu = [
  {
    title: 'Animales',
    path: '/animals/cats',
    children: [
      {
        path: '/animals/cats',
        title: 'Gatos'
      },
      {
        path: '/animals/dogs',
        title: 'Perros'
      }
    ]
  }
]

export function Menu () {
  return (
    <nav className={styles.nav}>
      <h1>
        <Link to="/">HA</Link>
      </h1>
      <ul className={styles["list-items"]}>
        <MenuItems menu={menu} />
      </ul>
    </nav>
  )
}