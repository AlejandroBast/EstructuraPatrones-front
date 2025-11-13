"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Plus, TrendingDown, Calendar, DollarSign } from "lucide-react"

interface ExpensesSectionProps {
  userId: number
}

const categories = [
  "Vivienda",
  "Alimentación",
  "Transporte",
  "Salud",
  "Entretenimiento",
  "Educación",
  "Servicios",
  "Otros",
]

const expenseTypes = ["Fijo", "Variable"]

export function ExpensesSection({ userId }: ExpensesSectionProps) {
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [type, setType] = useState("")
  const [isRecurring, setIsRecurring] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to backend API
    console.log("[v0] Expense submitted:", {
      amount,
      date,
      description,
      category,
      type,
      isRecurring,
      userId,
    })
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Registrar Gasto
          </CardTitle>
          <CardDescription>Añade un nuevo gasto con su categoría y tipo</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="expense-amount">Monto</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="expense-amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-9"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expense-type">Tipo</Label>
                <Select value={type} onValueChange={setType} required>
                  <SelectTrigger id="expense-type">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {expenseTypes.map((t) => (
                      <SelectItem key={t} value={t.toLowerCase()}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expense-category">Categoría</Label>
                <Select value={category} onValueChange={setCategory} required>
                  <SelectTrigger id="expense-category">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat.toLowerCase()}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="expense-date">Fecha</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="expense-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-9"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="expense-description">Descripción</Label>
              <Textarea
                id="expense-description"
                placeholder="Ej: Renta del mes, supermercado, gasolina..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div className="space-y-0.5">
                <Label htmlFor="recurring">Gasto Recurrente</Label>
                <p className="text-xs text-muted-foreground">Se repite mensualmente</p>
              </div>
              <Switch id="recurring" checked={isRecurring} onCheckedChange={setIsRecurring} />
            </div>

            <Button type="submit" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Agregar Gasto
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="w-5 h-5" />
            Gastos Recientes
          </CardTitle>
          <CardDescription>Últimos registros de gastos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Mock data - Replace with actual API data */}
            {[
              { id: 1, amount: 1200, date: "2024-06-01", description: "Renta", category: "vivienda", type: "fijo" },
              {
                id: 2,
                amount: 350,
                date: "2024-06-05",
                description: "Supermercado",
                category: "alimentación",
                type: "variable",
              },
              { id: 3, amount: 80, date: "2024-06-10", description: "Internet", category: "servicios", type: "fijo" },
            ].map((expense) => (
              <div
                key={expense.id}
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-card/50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium">{expense.description}</p>
                    <Badge variant="outline" className="text-xs capitalize">
                      {expense.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{expense.date}</p>
                </div>
                <Badge variant="secondary" className="text-rose-500 bg-rose-500/10">
                  -${expense.amount.toLocaleString()}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
