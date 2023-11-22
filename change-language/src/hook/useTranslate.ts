import { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";

type TranslationType = {
  currentLanguage: string,
  changeLanguage: string
  language: string
}

const translations: Record<string, TranslationType> = {
  "es": {
    currentLanguage: "Idioma Actual",
    changeLanguage: "Cambiar Idioma",
    language: "es"
  },
  "en": {
    currentLanguage: "Current Language",
    changeLanguage: "Change Language",
    language: "en"
  }
}

export function useTranslate() {
  const { language } = useContext(LanguageContext)

  return language ? translations["es"] : translations["en"]
}