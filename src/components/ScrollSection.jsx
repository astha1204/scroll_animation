import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CarSVG from './CarSVG'

gsap.registerPlugin(ScrollTrigger)

const phases = [
  { label: "Arrival", desc: "Your package enters the distribution network." },
  { label: "Transit", desc: "Real-time tracking through every checkpoint." },
  { label: "Last Mile", desc: "Precision delivery to your exact location." },
]

export default function ScrollSection() {
  const sectionRef = useRef(null)
  const carRef = useRef(null)
  const carWrapRef = useRef(null)
  const glowRef = useRef(null)
  const phase1Ref = useRef(null)
  const phase2Ref = useRef(null)
  const phase3Ref = useRef(null)
  const labelRef = useRef(null)
  const overlayTextRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Master scroll timeline pinning the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        }
      })

      // Phase 1: Car enters from left, scale up
      tl
        .fromTo(carWrapRef.current,
          { x: '-60%', opacity: 0, scale: 0.5, rotation: -15 },
          { x: '0%', opacity: 1, scale: 1, rotation: 0, duration: 1, ease: 'power2.out' }
        )
        .fromTo(phase1Ref.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.5 },
          '<0.3'
        )

      // Phase 2: Car slides right, slight scale, label changes
      tl
        .to(phase1Ref.current, { opacity: 0, x: 20, duration: 0.3 })
        .to(carWrapRef.current,
          { x: '20%', scale: 1.08, rotation: 8, duration: 1, ease: 'power1.inOut' },
          '<'
        )
        .fromTo(phase2Ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          '<0.4'
        )
        .to(glowRef.current, { opacity: 1, scale: 1.3, duration: 0.8 }, '<')

      // Phase 3: Car returns center, rotates full, scale down slightly
      tl
        .to(phase2Ref.current, { opacity: 0, y: -20, duration: 0.3 })
        .to(carWrapRef.current,
          { x: '-10%', scale: 0.9, rotation: -5, duration: 1, ease: 'power2.inOut' },
          '<'
        )
        .fromTo(phase3Ref.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.5 },
          '<0.4'
        )
        .to(glowRef.current, { opacity: 0.5, scale: 0.9, duration: 0.6 }, '<')

      // Final: Big centered reveal
      tl
        .to(phase3Ref.current, { opacity: 0, duration: 0.3 })
        .to(carWrapRef.current,
          { x: '0%', scale: 1.15, rotation: 0, duration: 1, ease: 'back.out(1.2)' },
          '<'
        )
        .fromTo(overlayTextRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8 },
          '<0.5'
        )
        .to(glowRef.current, { opacity: 1.5, scale: 1.8, duration: 1 }, '<')

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #111 0%, #080808 100%)' }}
      />

      {/* Track lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[#e8ff00]" style={{ transform: 'translateY(-40px)' }} />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[#e8ff00] opacity-40" style={{ transform: 'translateY(40px)' }} />
      </div>

      {/* Glow behind car */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,255,0,0.08) 0%, transparent 70%)',
          opacity: 0,
          transform: 'scale(1)',
        }}
      />

      {/* Car */}
      <div
        ref={carWrapRef}
        className="relative z-10"
        style={{
          width: 'clamp(300px, 55vw, 700px)',
          opacity: 0,
          transform: 'translateX(-60%) scale(0.5) rotate(-15deg)',
          willChange: 'transform, opacity',
        }}
      >
        <CarSVG ref={carRef} />
      </div>

      {/* Phase labels — left side */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-64">
        {[phase1Ref, phase2Ref, phase3Ref].map((ref, i) => (
          <div
            key={i}
            ref={ref}
            className="absolute"
            style={{ opacity: 0, top: 0 }}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 w-5 h-5 border border-[#e8ff00]/40 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-mono text-[8px] text-[#e8ff00]">{i + 1}</span>
              </div>
              <div>
                <div className="font-display text-2xl text-[#f0ede6] tracking-wider mb-1">
                  {phases[i].label.toUpperCase()}
                </div>
                <div className="font-body text-xs text-[#555] leading-relaxed tracking-wide">
                  {phases[i].desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final overlay text */}
      <div
        ref={overlayTextRef}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none"
        style={{ opacity: 0 }}
      >
        <div className="font-display text-[clamp(1.5rem,4vw,3rem)] tracking-[0.3em] text-[#e8ff00] mb-2">
          PRECISION IN MOTION
        </div>
        <div className="font-mono text-[10px] tracking-[0.4em] text-[#444] uppercase">
          Every delivery. Every time.
        </div>
      </div>

      {/* Right side counter */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {['01', '02', '03', '04'].map((n, i) => (
          <div key={n} className="flex items-center gap-2">
            <div className="w-5 h-px bg-[#333]" />
            <span className="font-mono text-[9px] text-[#333] tracking-widest">{n}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
