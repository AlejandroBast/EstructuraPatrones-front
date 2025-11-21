import { useEffect, useState } from 'react'
import { getTransactions } from '../api/finance'

export default function TransactionsPage() {
  const userEmail = localStorage.getItem('username') || ''
  const [items, setItems] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getTransactions(userEmail).then(setItems).catch(e => setError(e.message))
  }, [])

  return (
    <div className="panel">
      <h3 className="panel-title">Historial</h3>
      {error && <p className="error">{error}</p>}
      <ul className="muted" style={{display:'grid',gap:6,paddingLeft:18}}>
        {items.length===0 && <li>No hay datos</li>}
        {items.map((t,i)=> (
          <li key={i}>{String(t.date)} — ${String(t.amount)} — {t.description} ({t.kind}{t.kind==='gasto' && t.type ? ':'+t.type : ''}{t.recurring ? ', recurrente' : ''})</li>
        ))}
      </ul>
    </div>
  )
}
