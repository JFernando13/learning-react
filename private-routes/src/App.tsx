import { Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './models/routes.model'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Error } from './pages/Error/Error'
import { Login } from './pages/Login/Login'
import { AuthGuard } from './guards/auth.guard'
import { Home } from './pages/Home/Home'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={PrivateRoutes.HOME} />} />

      {/* Public Routes */}
      <Route path={PublicRoutes.LOGIN} element={<Login />} />

      {/* Private Routes */}
      <Route element={<AuthGuard />}>
        <Route path={PrivateRoutes.HOME} element={<Home />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      </Route>

      {/* Error Handler */}
      <Route path='*' element={<Error />} />
    </Routes>
  )
}