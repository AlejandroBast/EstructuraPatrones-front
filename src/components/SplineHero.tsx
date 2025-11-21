import React from 'react'

export default function SplineHero({ embedUrl, children }: { embedUrl: string; children: React.ReactNode }) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900">
      {/* Background Layer - Properly isolated */}
      <div className="absolute inset-0 pointer-events-none" style={{ isolation: 'isolate' }}>
        <div className="absolute inset-0 -z-20">
          <iframe
            src={`${embedUrl}/embed`}
            title="Spline Hero"
            className="h-full w-full scale-110"
            style={{ border: 'none', opacity: 0.7 }}
            aria-hidden="true"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neutral-950/90 -z-10" />
      </div>
      
      {/* Content Layer - Higher z-index to prevent overlap */}
      <div className="relative z-20 flex items-center justify-center min-h-[70vh] md:min-h-[80vh]">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="animate-fade-in">
            {children}
          </div>
        </div>
      </div>
      
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent z-10" />
    </section>
  )
}
