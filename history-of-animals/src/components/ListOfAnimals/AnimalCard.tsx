import { AnimalInfo } from "@/models/animal.model"
import styles from '../styles/listOfAnimals.module.css'

interface Props {
  name: AnimalInfo["name"],
  imgURL: AnimalInfo["imgURL"],
  history: AnimalInfo["history"],
}

export function AnimalCard({ name, imgURL, history }: Props) {
  return (
    <article className={styles.card} style={{backgroundImage: `url(${imgURL})`}}>
      {/* <img src={imgURL} alt="" className={styles.img} /> */}
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.history}>{history}</p>
    </article>
  )
}