import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const username = localStorage.getItem('username') || 'usuario'
  const navigate = useNavigate()
  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/login', { replace: true })
  }
  return (
    <div>
      <h1>Hola {username}</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  )
}

