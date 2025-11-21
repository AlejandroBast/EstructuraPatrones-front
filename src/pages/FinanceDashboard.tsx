import { useEffect, useState } from 'react'
import { getDashboard } from '../api/finance'

export default function FinanceDashboard() {
  const username = localStorage.getItem('username') || ''
  const userEmail = username
  const now = new Date()
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getDashboard({ userEmail, year: now.getFullYear(), month: now.getMonth() + 1 }).then(setData).catch(e => setError(e.message))
  }, [])

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Ingresos del Mes', value: data ? `$${Number(data.income||0).toLocaleString()}` : '—' },
          { label: 'Gastos del Mes', value: data ? `$${Number(data.expense||0).toLocaleString()}` : '—' },
          { label: 'Balance', value: data ? `$${Number(data.balance||0).toLocaleString()}` : '—' },
          { label: 'Tasa de gasto/ingreso', value: data ? `${data.ratio}%` : '—' },
        ].map((m,i)=> (
          <div key={i} className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 shadow-sm transition-transform hover:scale-[1.02] animate-slide-up">
            <div className="text-sm text-neutral-400 mb-2">{m.label}</div>
            <div className="text-2xl font-bold">{m.value}</div>
          </div>
        ))}
      </div>

      {error && (
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4">
          <strong>Error:</strong> <span className="text-red-500">{error}</span>
        </div>
      )}

      {/* Charts / Data blocks */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 shadow-sm animate-slide-up">
          <h3 className="text-lg font-semibold mb-2">Ingresos vs Gastos (últimos 6 meses)</h3>
          <pre className="text-neutral-400 whitespace-pre-wrap">{data ? JSON.stringify(data.series, null, 2) : 'Cargando...'}</pre>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 shadow-sm animate-slide-up">
          <h3 className="text-lg font-semibold mb-2">Gastos por Categoría</h3>
          <p className="text-neutral-400">Próximamente gráfico — muestra datos del backend</p>
        </div>
      </div>

      <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 shadow-sm animate-slide-up">
        <h3 className="text-lg font-semibold mb-2">Alertas y Sugerencias</h3>
        <pre className="text-neutral-400 whitespace-pre-wrap">{data ? JSON.stringify(data.recommendations, null, 2) : 'Cargando...'}</pre>
      </div>
    </div>
  )
}
