import { Board } from "../models/board";

export const fakeData: Board[] = [
  {
    name: "Por hacer",
    id: crypto.randomUUID(),
    items: [
      { title: "Escribirle a laura", id: crypto.randomUUID() },
      { title: "Ver como esta laura", id: crypto.randomUUID() },
    ]
  },
  {
    name: "En curso",
    id: crypto.randomUUID(),
    items: [
      { title: "Learning React", id: crypto.randomUUID() }
    ]
  },
  {
    name: "Finalizado",
    id: crypto.randomUUID(),
    items: []
  }
]