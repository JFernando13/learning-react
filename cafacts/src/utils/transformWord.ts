export const getFirstWord = (word: string, amountWords = 1) => {
  return word.split(' ', amountWords).join(' ')
}