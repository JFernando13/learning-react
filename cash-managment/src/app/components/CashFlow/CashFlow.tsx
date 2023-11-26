import { useContext } from "react";
import { MoneyTransationContext } from "../../context/MoneyTransationContext";
import { MoneyTransation } from "./MoneyTransation";
import style from './cash-flow.module.css';

export function CashFlow() {
  const { expenses, profits } = useContext(MoneyTransationContext)
  return (
    <section className={style["cash-flow"]}>
      <h2>Cash Flow</h2>

      <section className={style["money-transation-container"]}>
        <MoneyTransation title="Profits" movements={profits.movements} />
        <MoneyTransation title="Expenses" movements={expenses.movements} />
      </section>
    </section>
  )
}