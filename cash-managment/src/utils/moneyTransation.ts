export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "COP",
    maximumSignificantDigits: 6
  }).format(number)
}
