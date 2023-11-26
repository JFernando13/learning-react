import { useContext } from "react";
import { MoneyTransationContext } from "../../context/MoneyTransationContext";
import { TotalMovement } from "./TotalMovement";
import style from './balance-snapshot.module.css';

export function BalanceSnapshot() {
  const { expenses, profits } = useContext(MoneyTransationContext)

  return (
    <section className={style["balance-snapshot"]}>
      <TotalMovement title="Profits" key={"profits"} total={profits.total} />
      <TotalMovement title="Expenses" key={"expenses"} total={expenses.total} />
    </section>
  )
}