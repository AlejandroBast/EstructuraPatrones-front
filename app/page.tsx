import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wallet, TrendingUp, PieChart, Brain, Shield, Smartphone } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="w-8 h-8 text-indigo-500" />
            <h1 className="text-3xl font-extrabold text-white">Asistente Financiero</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href="/login" className="text-gray-300 hover:text-white font-semibold">Iniciar Sesión</Link>
            </Button>
            <Button asChild>
              <Link href="/register" className="text-indigo-500 hover:text-white font-semibold">Registrarse</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-5xl font-extrabold text-white">
            Controla tus finanzas con <span className="text-indigo-500">inteligencia artificial</span>
          </h2>
          <p className="text-xl text-gray-300">
            Registra tus ingresos y gastos, obtén recomendaciones personalizadas y alcanza tus metas financieras de
            forma simple y efectiva.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <Link href="/register" className="text-indigo-500 font-bold">Comenzar Gratis</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/login" className="text-gray-300 hover:text-white font-bold">Ya tengo cuenta</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-extrabold text-center mb-12 text-white">¿Qué puedes hacer?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-2 border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-gray-700/80">
            <CardContent className="pt-6 space-y-3">
              <div className="p-3 bg-gray-700/20 rounded-lg w-fit">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">Registra tus Ingresos</h4>
              <p className="text-gray-300">
                Lleva un control detallado de todos tus ingresos con fecha, monto y descripción.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-2 border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-gray-700/80">
            <CardContent className="pt-6 space-y-3">
              <div className="p-3 bg-gray-700/20 rounded-lg w-fit">
                <PieChart className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">Categoriza Gastos</h4>
              <p className="text-gray-300">
                Organiza tus gastos en categorías fijas y variables con opciones de recurrencia.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-2 border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-gray-700/80">
            <CardContent className="pt-6 space-y-3">
              <div className="p-3 bg-gray-700/20 rounded-lg w-fit">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">Control de Microgastos</h4>
              <p className="text-gray-300">
                Registra pequeños gastos diarios y establece límites para evitar fugas de dinero.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-2 border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-gray-700/80">
            <CardContent className="pt-6 space-y-3">
              <div className="p-3 bg-gray-700/20 rounded-lg w-fit">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">Recomendaciones IA</h4>
              <p className="text-gray-300">
                Recibe sugerencias personalizadas para mejorar tus hábitos financieros y ahorrar más.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-2 border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-gray-700/80">
            <CardContent className="pt-6 space-y-3">
              <div className="p-3 bg-gray-700/20 rounded-lg w-fit">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">Datos Seguros</h4>
              <p className="text-gray-300">
                Tu información financiera está protegida con encriptación y control total sobre tus datos.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-2 border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-gray-700/80">
            <CardContent className="pt-6 space-y-3">
              <div className="p-3 bg-gray-700/20 rounded-lg w-fit">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">Diseño Responsive</h4>
              <p className="text-gray-300">
                Accede desde cualquier dispositivo: computadora, tablet o móvil con la misma experiencia.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-indigo-500/5 border-gray-700 backdrop-blur-lg shadow-2xl">
          <CardContent className="py-16 text-center space-y-6">
            <h3 className="text-3xl font-extrabold text-white">Comienza a tomar control de tu dinero hoy</h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Únete a miles de usuarios que ya están mejorando sus finanzas personales con nuestro asistente
              inteligente.
            </p>
            <Button size="lg" asChild>
              <Link href="/register" className="text-dark font-bold">Crear Cuenta Gratis</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-gray-400">
          <p>Asistente Financiero - Tu aliado para alcanzar la libertad financiera</p>
        </div>
      </footer>
    </div>
  )
}
