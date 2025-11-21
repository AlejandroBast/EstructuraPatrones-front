"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutDashboard, TrendingUp, TrendingDown, Coffee, Sparkles, History, LogOut, User } from "lucide-react"
import { FinancialSummary } from "./financial-summary"
import { IncomeSection } from "./income-section"
import { ExpensesSection } from "./expenses-section"
import { MicroExpensesSection } from "./micro-expenses-section"
import { AiRecommendations } from "./ai-recommendations"
import { HistorySection } from "./history-section"

interface DashboardViewProps {
  user: {
    id: number
    name: string
    email: string
  }
  onLogout: () => void
}

export function DashboardView({ user, onLogout }: DashboardViewProps) {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <LayoutDashboard className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Asistente Financiero</h1>
                <p className="text-sm text-muted-foreground">Gestiona tus finanzas inteligentemente</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">{user.name}</span>
              </div>
              <Button variant="outline" size="icon" onClick={onLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto gap-2 bg-muted/30 p-2">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger
              value="income"
              className="relative flex items-center gap-2 overflow-hidden transition-all duration-300 hover:scale-[1.02] data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-pink-600/20 data-[state=active]:text-foreground rounded-md"
            >
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl pointer-events-none" />
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="hidden sm:inline">Ingresos</span>
              <span className="ml-auto hidden lg:flex items-end gap-[3px] h-4">
                <span className="w-[3px] h-2 bg-purple-400/60 rounded-sm animate-[pulse_1.4s_ease-in-out_infinite]" />
                <span className="w-[3px] h-3 bg-pink-400/60 rounded-sm animate-[pulse_1.6s_ease-in-out_infinite]" />
                <span className="w-[3px] h-4 bg-purple-400/60 rounded-sm animate-[pulse_1.8s_ease-in-out_infinite]" />
              </span>
            </TabsTrigger>
            <TabsTrigger value="expenses" className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4" />
              <span className="hidden sm:inline">Gastos</span>
            </TabsTrigger>
            <TabsTrigger value="micro" className="flex items-center gap-2">
              <Coffee className="w-4 h-4" />
              <span className="hidden sm:inline">Micro</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">IA</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="w-4 h-4" />
              <span className="hidden sm:inline">Historial</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <FinancialSummary userId={user.id} />
          </TabsContent>

          <TabsContent value="income">
            <IncomeSection userId={user.id} />
          </TabsContent>

          <TabsContent value="expenses">
            <ExpensesSection userId={user.id} />
          </TabsContent>

          <TabsContent value="micro">
            <MicroExpensesSection userId={user.id} />
          </TabsContent>

          <TabsContent value="ai">
            <AiRecommendations userId={user.id} />
          </TabsContent>

          <TabsContent value="history">
            <HistorySection userId={user.id} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
