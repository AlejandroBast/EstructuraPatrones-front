import React from 'react'

export default function SplineHero({ embedUrl, children }: { embedUrl: string; children: React.ReactNode }) {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <iframe
          src={`${embedUrl}/embed`}
          title="Spline Hero"
          className="h-full w-full"
          style={{ border: 'none', pointerEvents: 'none' }}
          aria-hidden="true"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-neutral-950" />
      </div>
      <div className="container mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-3xl animate-fade-in">
          {children}
        </div>
      </div>
    </section>
  )
}
