const BASE_URL = "https://rickandmortyapi.com/api"

export function getCharacter(id: number) {
  return fetch(`${BASE_URL}/character/${id}`).then(res => res.json())
}