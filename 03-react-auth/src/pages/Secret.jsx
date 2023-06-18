import { useAuthContext } from '@/hooks/useAuth'

const Secret = () => {
  const { userPayload } = useAuthContext()
  return (
    <>
      <h1>Secret</h1>
      {userPayload?.role === 'ADMIN'
        ? <h2>Hola Admin</h2>
        : <h2>Hola Cliente</h2>}

      {userPayload?.role === 'ADMIN' && <h4>Bienvenido seas ADMIN</h4>}
      {userPayload?.role === 'CUSTOMER' && <h4>Bienvenido seas CLIENTE</h4>}
    </>
  )
}

export default Secret
