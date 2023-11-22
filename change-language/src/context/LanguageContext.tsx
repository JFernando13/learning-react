import { createContext, useState } from 'react'

interface LanguageType {
  language: boolean,
  changeLanguage: () => void
}

export const LanguageContext = createContext({} as LanguageType)

export function LanguageContextProvider({ children }: React.PropsWithChildren) {
  const [language, setLanguage] = useState(true)

  const changeLanguage = () => {
    setLanguage(!language)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}