import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { postJson } from '../api/client'

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
      await postJson('/api/auth/register', { username: username.trim(), email: email.trim(), password: password.trim() })
      setOk(true)
      setTimeout(() => navigate('/login', { replace: true }), 1000)
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div style={{maxWidth:560,margin:'0 auto'}}>
      <Link className="nav-link" to="/inicio">← Volver al inicio</Link>
      <div className="panel" style={{marginTop:12}}>
        <div style={{display:'grid',gap:12}}>
          <h2 style={{margin:0}}>Crear Cuenta</h2>
          <p className="muted">Completa el formulario para comenzar a gestionar tus finanzas</p>
          <form onSubmit={onSubmit} className="form">
            <input className="input" value={username} onChange={e => setUsername(e.target.value)} placeholder="Nombre completo" required />
            <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@email.com" required />
            <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" required />
            <input className="input" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Confirmar contraseña" required />
            <button className="btn btn-primary" type="submit">Crear Cuenta</button>
          </form>
          {ok && <p className="success">Usuario registrado correctamente</p>}
          {error && <p className="error">{error}</p>}
          <p className="muted">¿Ya tienes cuenta? <Link className="nav-link" to="/login">Inicia sesión aquí</Link></p>
        </div>
      </div>
    </div>
  )
}

