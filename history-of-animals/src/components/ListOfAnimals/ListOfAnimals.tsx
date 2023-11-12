import { AnimalInfo } from "@/models/animal.model"
import { Menu } from ".."
import styles from '../styles/listOfAnimals.module.css'
import { AnimalCard } from "./AnimalCard"

interface Props {
  listAnimal: AnimalInfo[]
}

export function ListOfAnimals({ listAnimal }: Props) {
  return (
    <>
      <Menu />
      <section className={styles["container-list"]}>
        {
          listAnimal.map(({ name, imgURL, history }) => (
            <AnimalCard name={name} imgURL={imgURL} history={history} key={name} />
          ))
        }
      </section>
    </>
  )
}