import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const username = localStorage.getItem('username') || 'usuario'
  const navigate = useNavigate()
  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/inicio', { replace: true })
  }
  return (
    <div className="panel" style={{display:'grid',gap:12}}>
      <h1 style={{margin:0}}>Hola {username}</h1>
      <p className="muted">Bienvenido de nuevo. Elige una acción para continuar.</p>
      <div style={{display:'flex',gap:12}}>
        <button className="btn" onClick={()=>navigate('/dashboard')}>Ir al Dashboard</button>
        <button className="btn" onClick={()=>navigate('/ingreso')}>Registrar Ingreso</button>
        <button className="btn" onClick={()=>navigate('/gasto')}>Registrar Gasto</button>
        <button className="btn" onClick={()=>navigate('/nimai')}>Ver IA</button>
        <div style={{flex:1}} />
        <button className="btn" onClick={logout}>Cerrar sesión</button>
      </div>
    </div>
  )
}
