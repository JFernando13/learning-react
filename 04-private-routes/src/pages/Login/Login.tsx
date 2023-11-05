import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUser, resetUser } from '../../context/states/user'
import { PrivateRoutes } from '../../models/routes.model'
import { getCharacter } from "../../services/auth.service"
import { useEffect } from 'react'

export function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(resetUser())
  }, [])

  const login = async () => {
    const result = await getCharacter(2)
    const user = { name: result.name, id: result.id }
    dispatch(createUser(user))

    navigate(`/${PrivateRoutes.HOME}`, { replace: true })
  }

  return <button onClick={login}>Login</button>
}