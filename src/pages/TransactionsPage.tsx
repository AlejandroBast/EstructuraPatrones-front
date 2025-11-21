import { useEffect, useMemo, useState } from 'react'
import { getTransactions } from '../api/finance'

type TItem = {
  id?: string
  amount: number | string
  date: string
  description: string
  userId?: string
  kind: 'ingreso' | 'gasto' | 'microgasto'
  type?: string | null
  recurring?: boolean
}

export default function TransactionsPage() {
  const userEmail = localStorage.getItem('email') || localStorage.getItem('username') || ''
  const [items, setItems] = useState<TItem[]>([])
  const [error, setError] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState<'all' | TItem['kind']>('all')
  const [category, setCategory] = useState<'all' | string>('all')
  const [sortDir, setSortDir] = useState<'desc' | 'asc'>('desc')

  useEffect(() => {
    getTransactions(userEmail).then((list) => setItems(list)).catch((e) => setError(e.message))
  }, [])

  const categories = useMemo(() => {
    const set = new Set<string>()
    items.forEach((it) => { if (it.kind === 'gasto' && it.type) set.add(it.type) })
    return Array.from(set)
  }, [items])

  const filtered = useMemo(() => {
    let out = items.slice()
    if (kind !== 'all') out = out.filter((it) => it.kind === kind)
    if (category !== 'all') out = out.filter((it) => (it.kind === 'gasto' ? it.type === category : false))
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      out = out.filter((it) => (it.description || '').toLowerCase().includes(q))
    }
    out.sort((a, b) => {
      const da = new Date(a.date).getTime()
      const db = new Date(b.date).getTime()
      return sortDir === 'desc' ? db - da : da - db
    })
    return out
  }, [items, query, kind, category, sortDir])

  const totals = useMemo(() => {
    const n = (v: any) => Number(v)
    const inc = items.filter((i) => i.kind === 'ingreso').reduce((s, i) => s + n(i.amount), 0)
    const exp = items.filter((i) => i.kind === 'gasto').reduce((s, i) => s + n(i.amount), 0)
    const mic = items.filter((i) => i.kind === 'microgasto').reduce((s, i) => s + n(i.amount), 0)
    return { inc, exp, mic, balance: inc - exp }
  }, [items])

  return (
    <div className="container">
      <div className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ margin: 0, marginBottom: 8 }}>Historial</h2>
        {error && <div className="alert alert-error">{error}</div>}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
          <div className="card" style={{ padding: 12 }}>
            <p style={{ margin: 0 }}>Ingresos</p>
            <h3 style={{ margin: 0 }}>${totals.inc.toFixed(2)}</h3>
          </div>
          <div className="card" style={{ padding: 12 }}>
            <p style={{ margin: 0 }}>Gastos</p>
            <h3 style={{ margin: 0 }}>${totals.exp.toFixed(2)}</h3>
          </div>
          <div className="card" style={{ padding: 12 }}>
            <p style={{ margin: 0 }}>Microgastos</p>
            <h3 style={{ margin: 0 }}>${totals.mic.toFixed(2)}</h3>
          </div>
          <div className="card" style={{ padding: 12 }}>
            <p style={{ margin: 0 }}>Balance</p>
            <h3 style={{ margin: 0 }}>${totals.balance.toFixed(2)}</h3>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px 200px 160px', gap: 12 }}>
          <input placeholder="Buscar descripción" value={query} onChange={(e) => setQuery(e.target.value)} />
          <select value={kind} onChange={(e) => setKind(e.target.value as any)}>
            <option value="all">Todos</option>
            <option value="ingreso">Ingresos</option>
            <option value="gasto">Gastos</option>
            <option value="microgasto">Microgastos</option>
          </select>
          <select value={category} onChange={(e) => setCategory(e.target.value)} disabled={kind !== 'gasto'}>
            <option value="all">Categoría</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select value={sortDir} onChange={(e) => setSortDir(e.target.value as any)}>
            <option value="desc">Más recientes</option>
            <option value="asc">Más antiguos</option>
          </select>
        </div>
      </div>

      <div className="card">
        {filtered.length === 0 ? (
          <p className="empty-state">No hay transacciones</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: 8 }}>Fecha</th>
                  <th style={{ textAlign: 'left', padding: 8 }}>Descripción</th>
                  <th style={{ textAlign: 'left', padding: 8 }}>Tipo</th>
                  <th style={{ textAlign: 'left', padding: 8 }}>Categoría</th>
                  <th style={{ textAlign: 'right', padding: 8 }}>Monto</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((t, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--neutral-200)' }}>
                    <td style={{ padding: 8 }}>{new Date(t.date).toLocaleDateString('es-ES')}</td>
                    <td style={{ padding: 8 }}>{t.description}</td>
                    <td style={{ padding: 8 }}>{t.kind}{t.recurring ? ' • recurrente' : ''}</td>
                    <td style={{ padding: 8 }}>{t.kind === 'gasto' ? (t.type || 'Otros') : '-'}</td>
                    <td style={{ padding: 8, textAlign: 'right' }}>
                      $ {Number(t.amount).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
