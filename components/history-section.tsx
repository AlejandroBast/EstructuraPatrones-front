"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { History, Search, TrendingUp, TrendingDown, Coffee, Filter } from "lucide-react"

interface HistorySectionProps {
  userId: number
}

type TransactionType = "all" | "income" | "expense" | "micro"

export function HistorySection({ userId }: HistorySectionProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<TransactionType>("all")
  const [filterCategory, setFilterCategory] = useState("all")

  // Mock data - Replace with actual API calls
  const transactions = [
    { id: 1, type: "income", amount: 3500, date: "2024-06-01", description: "Salario Junio", category: "salario" },
    { id: 2, type: "expense", amount: -1200, date: "2024-06-01", description: "Renta", category: "vivienda" },
    { id: 3, type: "micro", amount: -5.5, date: "2024-06-02", description: "Café", category: "alimentación" },
    { id: 4, type: "expense", amount: -350, date: "2024-06-05", description: "Supermercado", category: "alimentación" },
    { id: 5, type: "income", amount: 500, date: "2024-06-15", description: "Freelance", category: "extra" },
    { id: 6, type: "expense", amount: -80, date: "2024-06-10", description: "Internet", category: "servicios" },
    { id: 7, type: "micro", amount: -12.0, date: "2024-06-12", description: "Almuerzo", category: "alimentación" },
  ]

  const filteredTransactions = transactions.filter((t) => {
    const matchesType = filterType === "all" || t.type === filterType
    const matchesCategory = filterCategory === "all" || t.category === filterCategory
    const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesCategory && matchesSearch
  })

  const getIcon = (type: string) => {
    switch (type) {
      case "income":
        return <TrendingUp className="w-4 h-4 text-emerald-500" />
      case "micro":
        return <Coffee className="w-4 h-4 text-amber-500" />
      default:
        return <TrendingDown className="w-4 h-4 text-rose-500" />
    }
  }

  const getAmountColor = (amount: number) => {
    if (amount > 0) return "text-emerald-500 bg-emerald-500/10"
    return "text-rose-500 bg-rose-500/10"
  }

  return (
    <div className="space-y-6">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="w-5 h-5" />
            Historial de Transacciones
          </CardTitle>
          <CardDescription>Revisa y filtra todas tus transacciones</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar transacción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={filterType} onValueChange={(value) => setFilterType(value as TransactionType)}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los tipos</SelectItem>
                <SelectItem value="income">Ingresos</SelectItem>
                <SelectItem value="expense">Gastos</SelectItem>
                <SelectItem value="micro">Microgastos</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="salario">Salario</SelectItem>
                <SelectItem value="vivienda">Vivienda</SelectItem>
                <SelectItem value="alimentación">Alimentación</SelectItem>
                <SelectItem value="servicios">Servicios</SelectItem>
                <SelectItem value="extra">Extra</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            {filteredTransactions.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Filter className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No se encontraron transacciones</p>
              </div>
            ) : (
              filteredTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="p-2 rounded-lg bg-muted">{getIcon(transaction.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium">{transaction.description}</p>
                        <Badge variant="outline" className="text-xs capitalize">
                          {transaction.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <Badge className={`${getAmountColor(transaction.amount)} font-bold`}>
                    {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
                  </Badge>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
