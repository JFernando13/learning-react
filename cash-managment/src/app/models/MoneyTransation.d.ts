interface MovementType {
  id: `${string}-${string}-${string}-${string}-${string}`
  category: string,
  value: string,
  title: string,
  date: string,
}

interface OverviewType {
  start: string,
  end: string
}
