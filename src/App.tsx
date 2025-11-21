import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function App() {
  const isAuthed = typeof window !== 'undefined' && !!localStorage.getItem('token')
  const navigate = useNavigate()
  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/inicio', { replace: true })
  }
  return (
    <div>
      <header className="header">
        <div className="nav container">
          <div className="brand">
            <span className="brand-icon" />
            <span>Asistente Financiero</span>
          </div>
          <nav className="nav-links">
            {!isAuthed && <Link className="nav-link" to="/inicio">Inicio</Link>}
            {!isAuthed && <Link className="nav-link" to="/login">Iniciar Sesión</Link>}
            {!isAuthed && <Link className="nav-link btn btn-primary" to="/register">Registrarse</Link>}
            {isAuthed && <Link className="nav-link" to="/dashboard">Dashboard</Link>}
            {isAuthed && <Link className="nav-link" to="/ingreso">Ingresos</Link>}
            {isAuthed && <Link className="nav-link" to="/gasto">Gastos</Link>}
            {isAuthed && <Link className="nav-link" to="/microgasto">Micro</Link>}
            {isAuthed && <Link className="nav-link" to="/historial">Historial</Link>}
            {isAuthed && <Link className="nav-link" to="/nimai">IA</Link>}
            {isAuthed && <button className="btn" onClick={logout}>Cerrar sesión</button>}
          </nav>
        </div>
      </header>
      <main className="container" style={{paddingTop:24}}>
        <Outlet />
      </main>
    </div>
  )
}
