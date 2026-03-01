import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HEADLINE = "WELCOME ITZFIZZ".split("")

const stats = [
  { value: "58%", label: "Increase in pick up point use", color: "#e8ff00" },
  { value: "23%", label: "Decreased in customer phone calls", color: "#ff3030" },
  { value: "27%", label: "Increase in delivery speed", color: "#e8ff00" },
  { value: "40%", label: "Decreased in customer wait time", color: "#ff3030" },
]

export default function HeroSection() {
  const sectionRef = useRef(null)
  const lettersRef = useRef([])
  const statsRef = useRef([])
  const taglineRef = useRef(null)
  const navRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Nav
      tl.fromTo(navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )

      // Tagline
      tl.fromTo(taglineRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5 },
        '-=0.3'
      )

      // Line
      tl.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: 'power2.inOut' },
        '-=0.2'
      )

      // Letters stagger
      tl.fromTo(lettersRef.current,
        { opacity: 0, y: 80, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.7,
          stagger: 0.04,
          ease: 'back.out(1.5)',
        },
        '-=0.2'
      )

      // Stats stagger
      tl.fromTo(statsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        },
        '-=0.3'
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#f0ede6 1px, transparent 1px), linear-gradient(90deg, #f0ede6 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Nav */}
      <nav ref={navRef} className="relative z-10 flex items-center justify-between px-8 py-6 opacity-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#e8ff00] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#e8ff00]" />
          </div>
          <span className="font-display text-lg tracking-[0.2em] text-[#f0ede6]">ITZFIZZ</span>
        </div>
        <div className="flex items-center gap-8">
          {['Products', 'Story', 'Impact', 'Contact'].map(item => (
            <span key={item} className="font-body text-xs tracking-[0.15em] uppercase text-[#666] hover:text-[#e8ff00] transition-colors cursor-pointer">
              {item}
            </span>
          ))}
        </div>
        <div className="font-mono text-xs text-[#444] tracking-widest">
          2024 — EST.
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-8 pt-4 pb-8 relative z-10">

        {/* Tagline */}
        <div ref={taglineRef} className="flex items-center gap-4 mb-8 opacity-0">
          <div
            ref={lineRef}
            className="h-px w-16 bg-[#e8ff00] origin-left"
            style={{ transformOrigin: 'left' }}
          />
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#888]">
            Premium Delivery Experience
          </span>
        </div>

        {/* Headline */}
        <div className="mb-12" style={{ perspective: '1000px' }}>
          <div className="flex flex-wrap gap-x-[0.05em] gap-y-2">
            {HEADLINE.map((char, i) => (
              <span
                key={i}
                ref={el => lettersRef.current[i] = el}
                className="font-display text-[clamp(4rem,10vw,9rem)] leading-none tracking-widest select-none"
                style={{
                  color: char === ' ' ? 'transparent' : '#f0ede6',
                  opacity: 0,
                  display: char === ' ' ? 'block' : 'inline-block',
                  width: char === ' ' ? '100%' : 'auto',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={el => statsRef.current[i] = el}
              className="relative group"
              style={{ opacity: 0 }}
            >
              <div
                className="border border-[#222] p-4 rounded-sm relative overflow-hidden transition-all duration-300 hover:border-[#e8ff00]/40"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                {/* Hover fill */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle at center, rgba(232,255,0,0.04) 0%, transparent 70%)' }}
                />

                <div
                  className="font-display text-4xl mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="font-body text-[10px] leading-tight text-[#666] tracking-wide uppercase">
                  {stat.label}
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(225deg, ${stat.color}33 0%, transparent 70%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 flex items-center justify-center pb-8">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-[#444]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#444] to-transparent animate-pulse" />
        </div>
      </div>

      {/* Side label */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 vertical-text z-10">
        <span className="font-mono text-[9px] tracking-[0.5em] text-[#333] uppercase">
          McLaren 720S · 2024
        </span>
      </div>
    </section>
  )
}
