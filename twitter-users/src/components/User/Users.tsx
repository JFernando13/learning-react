import { useEffect, useState } from "react"
import { User } from "./User"
import data from './data.json'
import styles from './users.module.css'

const initialUsers: typeof data = []

export function Users() {
  const [users, setUsers] = useState(initialUsers)
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    const users = (await fetch('https://jsonplaceholder.typicode.com/users'))
      .json().then(data => data).finally(() => setLoading(false))
    return users
  }

  const deleteUser = (id: number) => {
    setUsers(prevState => {
      return prevState.filter(user => user.id !== id)
    })
  }

  useEffect(() => {
    getUsers().then(users => setUsers(users))
  }, [])

  if (loading) return <p>Loading!!</p>

  if (!users.length) return <h1>No hay usuarios</h1>

  return (
    <>
      <h1>Twitter Follows</h1>
      <main className={styles["container-users"]}>
        {users.map(user => <User user={user} key={user.id} deleteUser={deleteUser} />)}
      </main>
    </>
  )
}