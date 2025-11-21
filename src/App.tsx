import { Link, Outlet } from 'react-router-dom'

export default function App() {
  const isAuthed = typeof window !== 'undefined' && !!localStorage.getItem('token')
  return (
    <div style={{ fontFamily: 'system-ui', maxWidth: 680, margin: '40px auto' }}>
      <nav style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        {!isAuthed && <Link to="/inicio">Inicio</Link>}
        {!isAuthed && <Link to="/login">Login</Link>}
        {!isAuthed && <Link to="/register">Registro</Link>}
        {isAuthed && <Link to="/welcome">Bienvenida</Link>}
        {isAuthed && <Link to="/dashboard">Dashboard</Link>}
        {isAuthed && <Link to="/ingreso">Ingreso</Link>}
        {isAuthed && <Link to="/gasto">Gasto</Link>}
        {isAuthed && <Link to="/microgasto">Microgasto</Link>}
        {isAuthed && <Link to="/historial">Historial</Link>}
        {isAuthed && <Link to="/nimai">NimAi</Link>}
      </nav>
      <Outlet />
    </div>
  )
}
