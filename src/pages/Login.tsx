import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { postJson } from '../api/client'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as any)?.from?.pathname || '/dashboard'

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    try {
      const res = await postJson<{ token: string; username: string }>(
        '/api/auth/login',
        { email: email.trim(), password: password.trim() }
      )
      localStorage.setItem('token', res.token)
      localStorage.setItem('username', res.username)
      navigate(from, { replace: true })
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="split">
      <div className="panel">
        <Link className="nav-link" to="/inicio">← Volver al inicio</Link>
        <div style={{display:'grid',gap:12,marginTop:12}}>
          <h2 style={{margin:0}}>Asistente Financiero</h2>
          <p className="muted">Ingresa tus credenciales para acceder a tu dashboard</p>
          <form onSubmit={onSubmit} className="form">
            <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@email.com" required />
            <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" required />
            <button className="btn btn-primary" type="submit">Iniciar Sesión</button>
          </form>
          {error && <p className="error">{error}</p>}
          <p className="muted">¿No tienes cuenta? <Link className="nav-link" to="/register">Regístrate aquí</Link></p>
        </div>
      </div>
      <div className="panel">
        <h3 className="panel-title">Beneficios</h3>
        <ul className="muted" style={{display:'grid',gap:8,paddingLeft:18}}>
          <li>Dashboard claro y simple</li>
          <li>Control de gastos e ingresos</li>
          <li>Microgastos diarios</li>
          <li>Recomendaciones con IA</li>
        </ul>
      </div>
    </div>
  )
}
