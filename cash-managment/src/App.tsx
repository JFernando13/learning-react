import './App.css';
import { BalanceSnapshot } from './app/components/BalanceSnapshot/BalanceSnapshot';
import { CashFlow } from "./app/components/CashFlow/CashFlow";
import { FinancialOverview } from "./app/components/FinancialOverview/FinancialOverview";

export function App() {
  return (
    <>
      <header>
        <h1 className="title">Cash Managment</h1>
        <BalanceSnapshot />
      </header>

      <main>
        <CashFlow />
        <FinancialOverview />
      </main>
    </>
  )
}