import { useEffect, useState } from "react"
import { getFirstWord } from "../utils/transformWord"

export function useCatImg(fact: string) {
  const [catImg, setCatImg] = useState({ id: "", wordToSay: "" })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!fact) return

    const wordToSay = getFirstWord(fact, 3)

    fetch(`https://cataas.com/cat/says/${wordToSay}?json=true`)
      .then(res => res.json())
      .then(({ _id: id }) => setCatImg({ id, wordToSay }))
      .finally(() => setLoading(false))

    return () => setLoading(true)
  }, [fact])

  return { catImg, loading }
}