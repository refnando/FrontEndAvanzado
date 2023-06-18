import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuth'
import { Home, Dashboard, Login, Secret, Signup, Producto } from '@/pages'

const RouterIndex = () => {
  const { isAuth, logout } = useAuthContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/dashboard'
        element={
      isAuth
        ? <Dashboard />
        : <Navigate to='/login' />
      }
      />
      <Route path='/login' element={<Login />} />
      <Route
        path='/secret'
        element={
          isAuth
            ? <Secret />
            : <Navigate to='/login' />
        }
      />
      <Route path='/signup' element={<Signup />} />
      <Route path='/producto' element={<Producto />} />
    </Routes>
  )
}

export default RouterIndex
