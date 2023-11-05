import { User } from "./User";
import './app.styles.css'

const users = ["midudev", "laura_mejia", "kikobeats", "cracks"]

export function App() {
  return (
    <main>
      {users.map(user => <User key={user} username={user}/>)}
    </main>
  )
}