import { formatNumber } from '../../../utils/moneyTransation'
import style from './money-transation.module.css'

interface Props {
  title: string
  movements: MovementType[]
}

export function MoneyTransation({ title, movements }: Props) {

  return (
    <article className={style["money-transation"]}>
      <h3 className={style.title}>{title}</h3>
      <ul className={style["money-transation-list"]}>
        {movements.map(movement => (
          <li key={movement.id} className={style["movement"]}>
            <header className={style["movement-header"]}>
              <img alt={movement.category} />
              <div>
                <h4>{movement.title}</h4>
                <p>{movement.date}</p>
              </div>
            </header>

            <p>${formatNumber(Number(movement.value))}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}