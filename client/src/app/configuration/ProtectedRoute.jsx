import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserContext from '../context/UserContext'

function ProtectedRoute () {
  const { userInfo } = useContext(UserContext)

  if (!userInfo) return <Navigate to='/' />

  return <Outlet />
}

export default ProtectedRoute
