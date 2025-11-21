"use client"

import { useNavigate } from "react-router-dom"
import "./Inicio.css"

export default function Inicio() {
  const navigate = useNavigate()
  const isAuthed = !!localStorage.getItem("token")

  if (isAuthed) {
    navigate("/welcome")
    return null
  }

  return (
    <div className="inicio-container">
      <div className="inicio-content">
        <div className="inicio-hero">
          <div className="hero-badge">Gestiona tus finanzas</div>
          <h1>ThinkCash</h1>
          <p className="hero-subtitle">Tu gestor financiero inteligente</p>
          <p className="hero-description">
            Registra ingresos y gastos, visualiza tu dashboard financiero, obtén recomendaciones personalizadas y mantén
            el control total de tus finanzas.
          </p>
          <div className="inicio-buttons">
            <button onClick={() => navigate("/login")} className="btn-primary-large">
              Iniciar Sesión
            </button>
            <button onClick={() => navigate("/register")} className="btn-secondary-large">
              Crear Cuenta
            </button>
          </div>
        </div>

        <div className="features">
          <h2>Funcionalidades</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3>Dashboard</h3>
              <p>Visualiza tu situación financiera en tiempo real</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h3>Ingresos</h3>
              <p>Registra todos tus ingresos fácilmente</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏷️</div>
              <h3>Gastos</h3>
              <p>Controla tus gastos por categoría</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📝</div>
              <h3>Historial</h3>
              <p>Accede a todas tus transacciones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
