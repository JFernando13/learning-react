export const getCatFact = async (url: string) => {
  const response = await fetch(url)
  const { fact } = await response.json()
  return fact
}