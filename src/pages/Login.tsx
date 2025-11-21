import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { postJson } from '../api/client'
import './Login.css'

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
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">ThinkCash</h2>
        <p className="login-sub">Ingresa tus credenciales</p>

        <form onSubmit={onSubmit} className="form">
          <input
            className="input"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            required
          />

          <input
            className="input"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />

          <button className="btn-simple" type="submit">
            Iniciar Sesión
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        <p className="register-text">
          ¿No tienes cuenta? <Link to="/register" className="register-link">Crear cuenta</Link>
        </p>

        <Link className="back-btn" to="/inicio">← Volver al inicio</Link>
      </div>

      <div className="benefits-section">
        <h3>Beneficios</h3>
        <ul>
          <li>Dashboard claro y simple</li>
          <li>Control de gastos e ingresos</li>
          <li>Microgastos diarios</li>
          <li>Recomendaciones con IA</li>
        </ul>
      </div>
    </div>
  )
}
