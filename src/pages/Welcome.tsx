"use client"

import { useNavigate } from "react-router-dom"
import "./Welcome.css"

export default function Welcome() {
  const username = localStorage.getItem("username") || "usuario"
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    navigate("/login")
  }

  const quickLinks = [
    { title: "Dashboard", desc: "Ver resumen financiero", path: "/dashboard", icon: "📊" },
    { title: "Nuevo Ingreso", desc: "Registrar ingresos", path: "/ingreso", icon: "💚" },
    { title: "Nuevo Gasto", desc: "Registrar gastos", path: "/gasto", icon: "💔" },
    { title: "Historial", desc: "Ver todas las transacciones", path: "/historial", icon: "📝" },
  ]

  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <h1>¡Hola, {username}!</h1>
        <p>Bienvenido de vuelta a ThinkCash</p>
      </div>

      <div className="welcome-content">
        <p className="intro-text">
          Aquí puedes gestionar tus finanzas, registrar ingresos y gastos, y obtener recomendaciones personalizadas.
        </p>

        <div className="quick-links">
          {quickLinks.map((link, i) => (
            <button key={i} onClick={() => navigate(link.path)} className="quick-link-card">
              <div className="link-icon">{link.icon}</div>
              <h3>{link.title}</h3>
              <p>{link.desc}</p>
            </button>
          ))}
        </div>

        <div className="welcome-actions">
          <button onClick={logout} className="btn-logout">
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  )
}
