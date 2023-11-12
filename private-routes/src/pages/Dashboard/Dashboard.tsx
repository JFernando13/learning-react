import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { resetUser } from "../../context/states/user"
import { AppStore } from "../../context/store"
import { PublicRoutes } from "../../models/routes.model"

export function Dashboard() {
  const { name } = useSelector((store: AppStore) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    dispatch(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }

  return (
    <>
      <h2>{name}</h2>
      <button onClick={logout}>Logout</button>
    </>
  )
}