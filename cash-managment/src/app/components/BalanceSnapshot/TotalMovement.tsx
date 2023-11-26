import { useRef } from 'react';
import { FormTransation } from '../CashFlow/FormTransation';
import style from './total-movement.module.css';

interface Props {
  title: string
  total: string
}

export function TotalMovement({ title, total }: Props) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openFormTransation = () => {
    dialogRef.current?.showModal()
  }

  const closeFormTransation = () => {
    dialogRef.current?.close()
  }

  return (
    <>
      <article
        className={`${style[title.toLowerCase()]} ${style["total-movement"]}`}
        onClick={openFormTransation}
      >
        <h2 className={style.title}>{title}</h2>
        <p className={style.amount}>${total}</p>
      </article>

      <FormTransation title={title} dialogRef={dialogRef} closeFormTransation={closeFormTransation} />
    </>
  )
}