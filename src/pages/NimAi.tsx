import { useEffect, useState } from 'react'
import { getNimAi6 } from '../api/finance'
import './NimAi.css'

export default function NimAi() {
  const userEmail = localStorage.getItem('username') || ''
  const now = new Date()
  const [tips, setTips] = useState<string[]>([])
  const [months, setMonths] = useState<any[]>([])
  const [trends, setTrends] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getNimAi6({ userEmail, year: now.getFullYear(), month: now.getMonth() + 1 })
      .then((res) => { 
        setTips(res.tips || [])
        setMonths(res.months || [])
        setTrends(res.trends || [])
      })
      .catch(e => setError(e.message))
  }, [])

  return (
    <div className="nimai-container">
      <div className="nimai-header">
        <h2 className="nimai-title">🤖 Asistente de IA Financiera</h2>
        <p className="nimai-subtitle">
          Análisis inteligente de tus finanzas y recomendaciones personalizadas
        </p>
      </div>

      {error && (
        <div className="error-alert">
          <span className="error-icon">⚠️</span>
          <strong>Error:</strong> <span>{error}</span>
        </div>
      )}

      {/* Recomendaciones Section */}
      <div className="panel card-dark recommendations-panel">
        <div className="card-header">
          <h3 className="panel-title">✨ Recomendaciones Personalizadas</h3>
          <p className="panel-subtitle">Basadas en tu comportamiento financiero</p>
        </div>

        <div className="recommendations-list">
          {tips.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">💡</span>
              <p>No hay recomendaciones disponibles en este momento</p>
            </div>
          ) : (
            tips.map((tip, i) => (
              <div key={i} className="recommendation-item">
                <div className="recommendation-bullet"></div>
                <p className="recommendation-text">{tip}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Analytics Section */}
      <div className="analytics-grid">
        {/* Últimos 6 meses */}
        <div className="panel card-dark analytics-card">
          <div className="card-header">
            <h3 className="panel-title">📊 Resumen Mensual</h3>
            <p className="panel-subtitle">Últimos 6 meses de actividad</p>
          </div>

          <div className="months-list">
            {months.length === 0 ? (
              <div className="empty-state-small">
                <p>No hay datos mensuales disponibles</p>
              </div>
            ) : (
              months.map((month, i) => (
                <div key={i} className="month-card">
                  <div className="month-header">
                    <span className="month-icon">📅</span>
                    <span className="month-name">
                      {month.month ? new Date(2024, month.month - 1).toLocaleDateString('es-ES', { month: 'long' }) : `Mes ${i + 1}`}
                    </span>
                  </div>
                  <div className="month-stats">
                    <div className="month-stat">
                      <span className="stat-label-small">Ingresos</span>
                      <span className="stat-value-small income">${Number(month.income || 0).toLocaleString()}</span>
                    </div>
                    <div className="month-stat">
                      <span className="stat-label-small">Gastos</span>
                      <span className="stat-value-small expense">${Number(month.expense || 0).toLocaleString()}</span>
                    </div>
                    <div className="month-stat">
                      <span className="stat-label-small">Balance</span>
                      <span className={`stat-value-small ${Number(month.balance || 0) >= 0 ? 'balance-positive' : 'balance-negative'}`}>
                        ${Number(month.balance || 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Tendencias por categoría */}
        <div className="panel card-dark analytics-card">
          <div className="card-header">
            <h3 className="panel-title">📈 Tendencias por Categoría</h3>
            <p className="panel-subtitle">Análisis comparativo de gastos</p>
          </div>

          <div className="trends-list">
            {trends.length === 0 ? (
              <div className="empty-state-small">
                <p>No hay tendencias disponibles</p>
              </div>
            ) : (
              trends.map((trend, i) => (
                <div key={i} className="trend-item">
                  <div className="trend-header">
                    <span className="trend-category">{trend.category || 'Sin categoría'}</span>
                    <span className={`trend-badge ${trend.trend === 'up' ? 'trend-up' : trend.trend === 'down' ? 'trend-down' : 'trend-stable'}`}>
                      {trend.trend === 'up' ? '↑ Aumentando' : trend.trend === 'down' ? '↓ Disminuyendo' : '→ Estable'}
                    </span>
                  </div>
                  <div className="trend-comparison">
                    <div className="comparison-item">
                      <span className="comparison-label">Últimos 3 meses</span>
                      <span className="comparison-value">${Number(trend.last3 || 0).toLocaleString()}</span>
                    </div>
                    <div className="comparison-divider">vs</div>
                    <div className="comparison-item">
                      <span className="comparison-label">3 meses anteriores</span>
                      <span className="comparison-value">${Number(trend.prev3 || 0).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
