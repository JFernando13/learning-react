import { SyntheticEvent, useContext, useEffect, useMemo, useRef, useState } from "react"
import { MoneyTransationContext } from "../../context/MoneyTransationContext"
import { Overview } from "./Overview"
import { formatNumber } from "../../../utils/moneyTransation"

export function FinancialOverview() {
  const { profits, expenses } = useContext(MoneyTransationContext)
  const [startMoney, setStartMoney] = useState<number>(0) 

  const overviewDialog = useRef<HTMLDialogElement | null>(null)

  const closeOverviewDialog = () => {
    overviewDialog.current?.close()
  }

  useEffect(() => {
    overviewDialog.current?.showModal()
  }, [])

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const startMoneyInput = e.currentTarget.elements.item(0) as HTMLInputElement
    setStartMoney(startMoneyInput.valueAsNumber)
    
    startMoneyInput.value = ""
    closeOverviewDialog()
  }

  const endMoney = useMemo(() => {
    const totalProfit = profits.total.replace(".", "").replace("COP", "").trim()
    const totalExpense = expenses.total.replace(".", "").replace("COP", "").trim()

    return startMoney + Number(totalProfit) - Number(totalExpense)
  }, [profits.total, expenses.total])


  return (
    <footer>
      <Overview overview={formatNumber(startMoney)} title="Start Money" />
      <Overview overview={formatNumber(endMoney)} title="End Money" />

      <dialog ref={overviewDialog}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="overview-start">Initial Money</label>
          <input type="number" required placeholder="$500.000" autoFocus autoComplete="off" />

          <menu>
            <button onClick={closeOverviewDialog}>Close</button>
            <button>Send</button>
          </menu>
        </form>
      </dialog>
    </footer>
  )
}