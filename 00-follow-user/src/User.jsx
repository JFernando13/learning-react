import { useState } from 'react'
import './user.styles.css'

export function User({ username }) {
  const [follow, setFollow] = useState(false)

  const handleClick = () => {
    setFollow(!follow)
  }

  const btnText = !follow ? 'Seguir' : 'Siguiendo'
  const btnClassname = follow ? 'following' : ''

  return (
    <article>
      <header>
        <img src={`https://unavatar.io/${username}`} alt={`Icono del usuario ${username}`} />
        <div>
          <strong>{username}</strong>
          <span>@{username}</span>
        </div>
      </header>
      <button onClick={handleClick} className={btnClassname}>
        <span>{btnText}</span>
        <span className='stopFollowing'>Dejar de seguir</span>
      </button>
    </article>
  )
}