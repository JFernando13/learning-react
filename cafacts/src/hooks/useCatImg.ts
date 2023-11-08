import { useEffect, useState } from "react"
import { getFirstWord } from "../utils/transformWord"

export function useCatImg(fact: string) {
  const [catImg, setCatImg] = useState({ id: "", firstWord: "" })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!fact) return

    const firstWord = getFirstWord(fact, 3)

    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then(res => res.json())
      .then(({ _id: id }) => setCatImg({ id, firstWord }))
      .finally(() => setLoading(false))

    return () => setLoading(true)
  }, [fact])

  return { catImg, loading }
}