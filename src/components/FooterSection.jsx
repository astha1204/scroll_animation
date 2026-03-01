import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const MARQUEE_TEXT = "ITZFIZZ · PRECISION DELIVERY · EST. 2024 · EVERY PACKAGE MATTERS · "

export default function FooterSection() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 85%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={sectionRef} className="relative overflow-hidden" style={{ background: '#080808', borderTop: '1px solid #111' }}>
      {/* Marquee */}
      <div className="overflow-hidden py-6 border-b border-[#111]">
        <div className="marquee-track">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-display text-[#1a1a1a] text-5xl tracking-widest mx-4 select-none whitespace-nowrap">
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* Footer content */}
      <div ref={contentRef} className="max-w-6xl mx-auto px-8 py-16 opacity-0">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#e8ff00] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#e8ff00]" />
              </div>
              <span className="font-display text-2xl tracking-[0.3em] text-[#f0ede6]">ITZFIZZ</span>
            </div>
            <p className="font-body text-xs text-[#444] max-w-xs leading-relaxed">
              Redefining the last-mile delivery experience through technology, precision, and relentless optimization.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3">
            {['Products', 'Story', 'Impact', 'Careers', 'Press', 'Contact'].map(link => (
              <a
                key={link}
                href="#"
                className="font-mono text-[10px] tracking-[0.3em] text-[#444] uppercase hover:text-[#e8ff00] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social / CTA */}
          <div className="flex flex-col items-end gap-4">
            <button className="group flex items-center gap-3 border border-[#e8ff00]/30 px-6 py-3 hover:bg-[#e8ff00] hover:text-black transition-all duration-300">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#e8ff00] group-hover:text-black transition-colors">
                Get Started
              </span>
              <span className="text-[#e8ff00] group-hover:text-black transition-colors">→</span>
            </button>
            <span className="font-mono text-[9px] text-[#2a2a2a] tracking-widest">
              © 2024 ITZFIZZ. ALL RIGHTS RESERVED.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
