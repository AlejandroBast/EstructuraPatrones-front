import { useEffect, useState } from 'react'
import { getNimAi6 } from '../api/finance'
import './NimAi.css'

export default function NimAi() {
  const userEmail = localStorage.getItem('email') || localStorage.getItem('username') || ''
  const now = new Date()
  const [tips, setTips] = useState<string[]>([])
  const [months, setMonths] = useState<any[]>([])
  const [trends, setTrends] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getNimAi6({ userEmail, year: now.getFullYear(), month: now.getMonth() + 1 }).then((res) => { setTips(res.tips || []); setMonths(res.months || []); setTrends(res.trends || []) }).catch(e => setError(e.message))
  }, [])

  return (
    <div className="nimai">
      <div className="nimai-header">
        <h1>NimAi</h1>
        <p className="subtitle">Consejos y tendencias financieras</p>
      </div>

      {error && <div className="alert alert-error">{error}</div>}

      <section className="card">
        <h2>Tips</h2>
        {tips.length === 0 ? (
          <p className="empty">Sin consejos por ahora</p>
        ) : (
          <div className="tips-grid">
            {tips.map((t, i) => (
              <div key={i} className="tip-card">{t}</div>
            ))}
          </div>
        )}
      </section>

      <section className="card">
        <h2>Últimos 6 meses</h2>
        <div className="months-table">
          <div className="row header">
            <div>Mes</div>
            <div>Ingresos</div>
            <div>Gastos</div>
            <div>Microgastos</div>
          </div>
          {months.map((m, i) => (
            <div key={i} className="row">
              <div>{m.year}-{String(m.month).padStart(2, '0')}</div>
              <div>{String(m.income)}</div>
              <div>{String(m.expense)}</div>
              <div>{String(m.micro)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Tendencias por categoría</h2>
        {trends.length === 0 ? (
          <p className="empty">Sin datos suficientes</p>
        ) : (
          <div className="trends-list">
            {trends.map((t, i) => (
              <div key={i} className="trend-item">
                <span className="badge">{t.category}</span>
                <span className={`trend ${t.trend}`}>{t.trend}</span>
                <span className="detail">{String(t.prev3)} → {String(t.last3)}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
