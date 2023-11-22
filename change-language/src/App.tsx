import { useContext } from "react"
import { LanguageContext } from "./context/LanguageContext"
import { useTranslate } from "./hook/useTranslate"

export function App() {
  const { changeLanguage } = useContext(LanguageContext)
  const translation = useTranslate()

  return (
    <main>
      <p>{translation.currentLanguage}: {translation.language}</p>
      <button onClick={() => changeLanguage()}>{translation.changeLanguage}</button>
    </main>
  )
}