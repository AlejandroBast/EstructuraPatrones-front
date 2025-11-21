import { useState } from 'react'
import { addIncome, getTransactions } from '../api/finance'

export default function IncomeForm() {
  const userEmail = localStorage.getItem('username') || ''
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [msg, setMsg] = useState<string | null>(null)
  const [items, setItems] = useState<any[]>([])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMsg(null)
    try {
      const saved = await addIncome({ amount: Number(amount), date, description, userEmail })
      setMsg('Ingreso registrado')
      const list = await getTransactions(userEmail)
      setItems(list)
    } catch (err: any) {
      setMsg(err.message)
    }
  }

  return (
    <div className="split">
      <div className="panel">
        <h3 className="panel-title">Registrar Ingreso</h3>
        <form onSubmit={onSubmit} className="form">
          <input className="input" type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Monto" required />
          <input className="input" type="date" value={date} onChange={e => setDate(e.target.value)} required />
          <input className="input" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descripción" required />
          <button className="btn btn-primary" type="submit">Agregar Ingreso</button>
        </form>
        {msg && <p className={msg.includes('Error')? 'error':'success'}>{msg}</p>}
      </div>
      <div className="panel">
        <h3 className="panel-title">Ingresos Recientes</h3>
        <ul className="muted" style={{display:'grid',gap:6,paddingLeft:18}}>
          {items.length===0 && <li>No hay datos</li>}
          {items.map((it,i)=> (
            <li key={i}>{String(it.date)} — ${String(it.amount)} — {it.description}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
