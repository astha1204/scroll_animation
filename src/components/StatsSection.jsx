import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const metrics = [
  {
    value: 58,
    suffix: '%',
    label: 'Increase in pick up point use',
    sub: 'Q3 2024 vs Q3 2023',
    color: '#e8ff00',
  },
  {
    value: 23,
    suffix: '%',
    label: 'Decreased in customer phone calls',
    sub: 'Automated resolutions up',
    color: '#ff3030',
  },
  {
    value: 27,
    suffix: '%',
    label: 'Increase in delivery speed',
    sub: 'Average route optimization',
    color: '#e8ff00',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Decreased in customer wait time',
    sub: 'Last-mile improvements',
    color: '#ff3030',
  },
  {
    value: 99,
    suffix: '.4%',
    label: 'On-time delivery rate',
    sub: 'Network-wide performance',
    color: '#e8ff00',
  },
  {
    value: 2.1,
    suffix: 'M',
    label: 'Packages delivered monthly',
    sub: 'And growing fast',
    color: '#ff3030',
  },
]

function CountUp({ target, suffix, color, duration = 1.8 }) {
  const numRef = useRef(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = numRef.current
    if (!el) return

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (triggered.current) return
        triggered.current = true

        const isFloat = String(target).includes('.')
        gsap.fromTo(
          { val: 0 },
          { val: target,
            duration,
            ease: 'power2.out',
            onUpdate: function () {
              el.textContent = isFloat
                ? this.targets()[0].val.toFixed(1) + suffix
                : Math.round(this.targets()[0].val) + suffix
            }
          }
        )
      }
    })
  }, [target, suffix, duration])

  return (
    <span
      ref={numRef}
      className="font-display"
      style={{ color, fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1 }}
    >
      0{suffix}
    </span>
  )
}

export default function StatsSection() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headRef.current, start: 'top 80%' }
        }
      )

      // Cards stagger
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: 'top 80%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-8 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #e8ff00 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div ref={headRef} className="mb-20 opacity-0">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#e8ff00]" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#555] uppercase">
              Impact Report
            </span>
          </div>
          <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none tracking-widest text-[#f0ede6] mb-4">
            THE NUMBERS
          </h2>
          <p className="font-body text-[#555] text-sm max-w-sm leading-relaxed">
            Every metric tells the story of a smarter, faster, more reliable delivery experience.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="relative group border border-[#1a1a1a] p-8 overflow-hidden transition-all duration-500 hover:border-[#333]"
              style={{ opacity: 0 }}
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${m.color}06 0%, transparent 60%)` }}
              />

              {/* Index */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[9px] tracking-[0.4em] text-[#333]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-5 h-px" style={{ background: m.color, opacity: 0.4 }} />
              </div>

              {/* Value */}
              <div className="mb-3">
                <CountUp target={m.value} suffix={m.suffix} color={m.color} />
              </div>

              {/* Label */}
              <p className="font-body text-sm text-[#888] leading-snug mb-2">
                {m.label}
              </p>

              {/* Sub */}
              <p className="font-mono text-[9px] tracking-[0.2em] text-[#3a3a3a] uppercase">
                {m.sub}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: m.color, opacity: 0.4 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
