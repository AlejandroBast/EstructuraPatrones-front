import { useState } from 'react'
import { addMicro, getTransactions } from '../api/finance'

export default function MicroExpensePage() {
  const userEmail = localStorage.getItem('email') || localStorage.getItem('username') || ''
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [msg, setMsg] = useState<string | null>(null)
  const [msgKind, setMsgKind] = useState<'success' | 'error' | null>(null)
  const [items, setItems] = useState<any[]>([])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMsg(null)
    setMsgKind(null)
    try {
      const saved = await addMicro({ amount: Number(amount), date, description, userEmail })
      setMsg('Microgasto registrado')
      setMsgKind('success')
      const list = await getTransactions(userEmail)
      setItems(list)
    } catch (err: any) {
      setMsg(err.message)
      setMsgKind('error')
    }
  }

  return (
    <div>
      <h2>Microgastos</h2>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 8 }}>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Monto" required />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Descripción" required />
        <button type="submit">Agregar</button>
      </form>
      {msg && (
        <div className={`alert ${msgKind === 'error' ? 'alert-error' : 'alert-success'}`}>{msg}</div>
      )}
      <ul>
        {items.map((it, i) => (
          <li key={i}>{String(it.date)} - {String(it.amount)} - {it.description} ({it.kind})</li>
        ))}
      </ul>
    </div>
  )
}
