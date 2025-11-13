"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Plus, Coffee, DollarSign, AlertCircle } from "lucide-react"

interface MicroExpensesSectionProps {
  userId: number
}

export function MicroExpensesSection({ userId }: MicroExpensesSectionProps) {
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [dailyLimit] = useState(50)
  const [currentSpent] = useState(32.5)

  const percentageSpent = (currentSpent / dailyLimit) * 100

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to backend API
    console.log("[v0] Micro expense submitted:", { amount, description, userId })
    setAmount("")
    setDescription("")
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coffee className="w-5 h-5" />
            Registrar Microgasto
          </CardTitle>
          <CardDescription>Control de pequeños gastos diarios (café, snacks, propinas...)</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="micro-amount">Monto</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="micro-amount"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-9"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="micro-description">Descripción</Label>
              <Input
                id="micro-description"
                placeholder="Ej: Café, snack, propina..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Agregar Microgasto
            </Button>
          </form>

          <div className="mt-6 p-4 rounded-lg border border-border bg-muted/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Límite Diario</span>
              <span className="text-sm font-bold">
                ${currentSpent.toFixed(2)} / ${dailyLimit}
              </span>
            </div>
            <Progress value={percentageSpent} className="h-2" />
            {percentageSpent > 80 && (
              <div className="flex items-center gap-2 mt-3 text-amber-500">
                <AlertCircle className="w-4 h-4" />
                <span className="text-xs">¡Atención! Has gastado más del 80% de tu límite diario</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Microgastos de Hoy</CardTitle>
          <CardDescription>Registro del día actual</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {/* Mock data - Replace with actual API data */}
            {[
              { id: 1, amount: 5.5, time: "08:30", description: "Café en la mañana" },
              { id: 2, amount: 12.0, time: "13:00", description: "Almuerzo rápido" },
              { id: 3, amount: 3.5, time: "15:30", description: "Snack" },
              { id: 4, amount: 8.0, time: "17:00", description: "Postre" },
              { id: 5, amount: 3.5, time: "19:00", description: "Propina" },
            ].map((micro) => (
              <div key={micro.id} className="flex items-center justify-between p-2 rounded-lg border border-border">
                <div className="flex-1">
                  <p className="text-sm font-medium">{micro.description}</p>
                  <p className="text-xs text-muted-foreground">{micro.time}</p>
                </div>
                <Badge variant="secondary" className="text-xs">
                  ${micro.amount.toFixed(2)}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
