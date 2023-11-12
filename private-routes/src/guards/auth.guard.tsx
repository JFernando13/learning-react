import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { AppStore } from '../context/store'
import { PublicRoutes } from '../models/routes.model'

export function AuthGuard() {
  const hasUser = useSelector((store: AppStore) => store.user)
  return hasUser.id ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}