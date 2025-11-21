import { useEffect, useState } from 'react'
import { getNimAi6 } from '../api/finance'

export default function NimAi() {
  const userEmail = localStorage.getItem('username') || ''
  const now = new Date()
  const [tips, setTips] = useState<string[]>([])
  const [months, setMonths] = useState<any[]>([])
  const [trends, setTrends] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getNimAi6({ userEmail, year: now.getFullYear(), month: now.getMonth() + 1 }).then((res) => { setTips(res.tips || []); setMonths(res.months || []); setTrends(res.trends || []) }).catch(e => setError(e.message))
  }, [])

  return (
    <div className="grid" style={{gap:24}}>
      {error && <div className="alert"><strong>Error:</strong> <span className="error">{error}</span></div>}
      <div className="card">
        <h3>Recomendaciones</h3>
        <ul className="muted" style={{display:'grid',gap:8,paddingLeft:18}}>
          {tips.length===0 && <li>No hay recomendaciones disponibles</li>}
          {tips.map((t,i)=> (<li key={i}>{t}</li>))}
        </ul>
      </div>
      <div className="grid grid-2">
        <div className="card">
          <h3>Últimos 6 meses</h3>
          <pre className="muted" style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(months, null, 2)}</pre>
        </div>
        <div className="card">
          <h3>Tendencias por categoría</h3>
          <ul className="muted" style={{display:'grid',gap:8,paddingLeft:18}}>
            {trends.length===0 && <li>No hay tendencias</li>}
            {trends.map((t,i)=> (<li key={i}>{t.category}: {t.trend} (prev3 {String(t.prev3)} vs last3 {String(t.last3)})</li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}

