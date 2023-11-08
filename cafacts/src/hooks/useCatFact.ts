import { useEffect, useState } from "react"
import { getCatFact } from "../services/fetching"

export function useCatFact(url: string) {
  const [fact, setFact] = useState("")
  const [loading, setLoading] = useState(true)

  const newCatFact = async () => {
    try {
      const fact = await getCatFact(url)
      setFact(fact)

    } finally { setLoading(false) }
  }

  useEffect(() => {
    newCatFact()

    return () => setLoading(true)
  }, [])

  return { fact, loading, newCatFact }
}