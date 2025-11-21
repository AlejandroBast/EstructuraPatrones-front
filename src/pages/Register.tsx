import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { postJson } from '../api/client'
import './Login.css'   // 👉 reutilizamos el MISMO estilo del login

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [ok, setOk] = useState<boolean>(false)
  const navigate = useNavigate()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setOk(false)

    if (password.trim() !== confirm.trim()) {
      setError('Las contraseñas no coinciden')
      return
    }

    try {
      await postJson('/api/auth/register', { 
        username: username.trim(), 
        email: email.trim(), 
        password: password.trim() 
      })
      setOk(true)
      setTimeout(() => navigate('/login', { replace: true }), 1000)
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="login-container">

      <div className="login-card">
        <h2 className="login-title">Crear Cuenta</h2>
        <p className="login-sub">
          Completa el formulario para comenzar en ThinkCash
        </p>

        <form onSubmit={onSubmit} className="form">

          <input 
            className="input" 
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Nombre completo" 
            required 
          />

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

          <input 
            className="input" 
            type="password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            placeholder="Confirmar contraseña"
            required 
          />

          <button className="btn-simple" type="submit">
            Crear Cuenta
          </button>
        </form>

        {ok && <p className="success">Usuario registrado correctamente</p>}
        {error && <p className="error">{error}</p>}

        <p className="register-text">
          ¿Ya tienes cuenta?{" "}
          <Link className="register-link" to="/login">Inicia sesión aquí</Link>
        </p>

        <Link className="back-btn" to="/inicio">← Volver al inicio</Link>
      </div>

    </div>
  )
}
