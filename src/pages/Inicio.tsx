import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import SplineHero from '../components/SplineHero'
import './Inicio.css'

export default function Inicio() {
  const icons = [
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 4v16" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 16l4-4 4 4 6-6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3l7 4v6c0 5-7 8-7 8s-7-3-7-8V7l7-4z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="7" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 11h10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 7h18M6 12h12M9 17h6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  ]
  
  useEffect(() => {
    const style = document.createElement('style')
    style.id = 'inicio-hide-gsi'
    style.textContent = `#gsi-layer, div[role="dialog"][data-google-one-tap-modal] { display: none !important; }`
    document.head.appendChild(style)
    return () => { const el = document.getElementById('inicio-hide-gsi'); if (el) el.remove() }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Hero Section */}
      <SplineHero embedUrl="https://app.spline.design/community/file/de399826-b9f3-4b1d-890f-7c261b47ebea">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl animate-fade-in">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent leading-tight animate-fade-in stagger-1">
                Controla tus finanzas con inteligencia artificial
              </h1>
              <p className="text-neutral-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed animate-fade-in stagger-2">
                Registra tus ingresos y gastos, obtén recomendaciones personalizadas y alcanza tus metas financieras de forma simple y efectiva.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in stagger-3" role="group" aria-label="Acciones principales">
                <Link 
                  aria-label="Crear cuenta gratuita" 
                  className="btn btn-primary group relative overflow-hidden px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
                  to="/register"
                >
                  <span className="relative z-10">Comenzar Gratis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <Link 
                  aria-label="Ir a iniciar sesión" 
                  className="btn btn-outline group relative overflow-hidden px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/10" 
                  to="/login"
                >
                  <span className="relative z-10">Ya tengo cuenta</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SplineHero>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
              ¿Qué puedes hacer?
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Herramientas inteligentes para gestionar tus finanzas personales de manera eficiente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {title:'Registra tus Ingresos',desc:'Lleva un control detallado de todos tus ingresos con fecha, monto y descripción.', icon: icons[0]},
              {title:'Categoriza Gastos',desc:'Organiza tus gastos en categorías fijas y variables con opciones de recurrencia.', icon: icons[1]},
              {title:'Control de Microgastos',desc:'Registra pequeños gastos diarios y establece límites para evitar fugas de dinero.', icon: icons[2]},
              {title:'Recomendaciones IA',desc:'Recibe sugerencias personalizadas para mejorar tus hábitos financieros y ahorrar más.', icon: icons[3]},
              {title:'Datos Seguros',desc:'Tu información está protegida con encriptación y control total sobre tus datos.', icon: icons[4]},
              {title:'Diseño Responsive',desc:'Accede desde cualquier dispositivo con la misma experiencia optimizada.', icon: icons[5]},
            ].map((feature, index)=> (
              <article 
                key={index} 
                className={`card group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in stagger-${index + 1}`}
                aria-labelledby={`feature-${index}`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg text-purple-400 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 id={`feature-${index}`} className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {feature.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Comienza a tomar control de tu dinero hoy
              </h3>
              <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                Únete a miles de usuarios que mejoran sus finanzas personales con nuestro asistente inteligente.
              </p>
              <Link 
                aria-label="Crear cuenta gratuita" 
                className="btn btn-primary group relative overflow-hidden px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
                to="/register"
              >
                <span className="relative z-10">Crear Cuenta Gratis</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
