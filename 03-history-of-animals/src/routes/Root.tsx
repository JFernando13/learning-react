import { Link } from "react-router-dom"
import { Menu } from "../components"
import styles from '../styles/root.module.css'

export function Root() {
  return (
    <header>
      <Menu />
      <main className={styles.main}>
        <header className={styles["header-info"]}>
          <hgroup className={styles.info}>
            <h1 className={styles.title}>History of animals</h1>
            <p className={styles.intro}>
              Aqui la historia, los rasgos distintivos y las historias detrás de estas adorables criaturas.
            </p>
          </hgroup>
          <Link to="/animals/dogs" className={styles["show-more"]}>Conocer Mas</Link>
        </header>
      </main>
    </header>
  )
}