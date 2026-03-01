import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CarSVG from './components/CarSVG';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: '58%', label: 'Increase in pick up point use' },
  { value: '23%', label: 'Decreased in customer phone calls' },
  { value: '27%', label: 'Increase in pick up point use' },
  { value: '40%', label: 'Decreased in customer phone calls' },
];

const splitText = (text) =>
  text.split('').map((char, i) => (
    <span
      key={i}
      className="headline-letter inline-block"
      style={{ minWidth: char === ' ' ? '0.35em' : undefined }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

const StatItem = ({ value, label }) => (
  <div className="stat-card flex flex-col items-start gap-1 px-5 py-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm min-w-[140px]">
    <span className="font-display text-4xl leading-none" style={{ color: 'var(--accent)' }}>
      {value}
    </span>
    <span className="font-mono text-[0.65rem] tracking-widest uppercase text-white/40 leading-snug">
      {label}
    </span>
  </div>
);

const GridLines = () => (
  <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
    <div className="absolute w-full" style={{ top: '50%', height: '1px', background: 'rgba(232,255,0,0.04)' }} />
    <div className="absolute h-full" style={{ left: '50%', width: '1px', background: 'rgba(232,255,0,0.04)' }} />
    <div className="absolute" style={{ inset: '24px', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '4px' }} />
  </div>
);

const App = () => {
  const containerRef     = useRef(null);
  const textContainerRef = useRef(null);
  const headlineRef      = useRef(null);
  const statsRef         = useRef(null);
  const carRef           = useRef(null);
  const glowRef          = useRef(null);
  const progressRef      = useRef(null);
  const sideLeftRef      = useRef(null);
  const sideRightRef     = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });

      
      intro.from(carRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.75,
        duration: 1.4,
        ease: 'power2.out',
      }, 0);

     
      intro.from(glowRef.current, {
        opacity: 0,
        scale: 0.4,
        duration: 1.8,
        ease: 'power2.out',
      }, 0);

     
      intro.from(headlineRef.current.children, {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.04,
        ease: 'power3.out',
      }, 0.3);

     
      intro.from(statsRef.current.children, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.13,
        ease: 'power2.out',
      }, 0.85);

     
      intro.from([sideLeftRef.current, sideRightRef.current], {
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      }, 1.0);

      
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,          // 1.5s lag for a weighted, premium feel
        },
      });

      // Phase A (0→40%): Car drives toward viewer — scales up, drifts up
      scrollTl.to(carRef.current, {
        y: -80,
        scale: 1.65,
        rotate: 8,
        ease: 'none',
        duration: 2,
      }, 0);

      scrollTl.to(glowRef.current, {
        scale: 1.8,
        opacity: 0.6,
        ease: 'none',
        duration: 2,
      }, 0);

      // Text container fades up and out — depth illusion
      scrollTl.to(textContainerRef.current, {
        y: -160,
        opacity: 0,
        ease: 'none',
        duration: 1.5,
      }, 0);

      // Phase B (40→70%): Car sweeps to the left and rotates
      scrollTl.to(carRef.current, {
        x: '-22vw',
        rotate: -14,
        scale: 2.1,
        ease: 'none',
        duration: 1.5,
      }, 2);

      // Phase C (70→100%): Car sweeps back right, settles
      scrollTl.to(carRef.current, {
        x: '18vw',
        y: 30,
        rotate: 6,
        scale: 1.4,
        ease: 'none',
        duration: 1.5,
      }, 3.5);

      scrollTl.to(glowRef.current, {
        opacity: 0.08,
        scale: 0.8,
        ease: 'none',
        duration: 1.5,
      }, 3.5);

      //  SCROLL PROGRESS BAR
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.width = `${self.progress * 100}%`;
          }
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="noise relative w-full bg-[#0a0a0a]">

      {/* Scroll progress bar */}
      <div ref={progressRef} className="scroll-progress" style={{ width: '0%' }} />

      {/* Tall container that defines scroll length */}
      <div ref={containerRef} className="relative w-full h-[500vh]">

        {/* Sticky viewport — stays in place while scroll happens */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          <GridLines />

          {/* Glow layer */}
          <div
            ref={glowRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <div style={{
              width: '60vw', height: '60vw',
              maxWidth: 700, maxHeight: 700,
              background: 'radial-gradient(circle, rgba(232,255,0,0.09) 0%, transparent 65%)',
              borderRadius: '50%',
            }} />
          </div>

          {/* Car — absolute center, scroll-animated */}
          <div
            ref={carRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 2, willChange: 'transform' }}
          >
            <div className="car-glow w-52 md:w-72 lg:w-96">
              <CarSVG />
            </div>
          </div>

          {/* Text content — headline + stats, fades out on scroll */}
          <div
            ref={textContainerRef}
            className="relative z-10 flex flex-col items-center justify-start pt-16 md:pt-20 w-full h-full"
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Eyebrow label */}
            <p className="font-mono text-[0.6rem] tracking-[0.4em] uppercase text-white/25 mb-6">
              McLaren 720S — 2024
            </p>

            {/* Main headline — letters split for stagger animation */}
            <h1
              ref={headlineRef}
              className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.22em] text-white uppercase overflow-hidden mb-10 text-center"
              aria-label="WELCOME ITZFIZZ"
            >
              {splitText('WELCOME\u00A0ITZFIZZ')}
            </h1>

            {/* Vertical accent line */}
            <div className="w-px h-8 mb-8" style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />

            {/* Stats grid */}
            <div ref={statsRef} className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
              {STATS.map((s, i) => <StatItem key={i} value={s.value} label={s.label} />)}
            </div>
          </div>

          {/* Side label — left */}
          <div
            ref={sideLeftRef}
            className="vertical-text absolute left-6 bottom-16 font-mono text-[0.6rem] tracking-[0.35em] uppercase text-white/20 pointer-events-none"
            style={{ zIndex: 5 }}
          >
            SCROLL TO EXPLORE
          </div>

          {/* Side label — right */}
          <div
            ref={sideRightRef}
            className="vertical-text absolute right-6 bottom-16 font-mono text-[0.6rem] tracking-[0.35em] uppercase text-white/20 pointer-events-none"
            style={{ zIndex: 5, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            ITZFIZZ DIGITAL
          </div>

          {/* Scroll cue arrow */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none">
            <span className="font-mono text-[0.55rem] tracking-[0.4em] uppercase text-white/20">Scroll</span>
            <div className="w-px h-10 overflow-hidden">
              <div style={{
                width: '100%', height: '50%',
                background: 'linear-gradient(to bottom, transparent, var(--accent))',
                animation: 'scrollCue 1.8s ease-in-out infinite',
              }} />
            </div>
          </div>

        </div>
      </div>

      {/* Next section */}
      <div className="h-screen bg-[#0d0d0d] flex items-center justify-center relative z-10 border-t border-white/5">
        <div className="text-center">
          <p className="font-mono text-[0.65rem] tracking-[0.4em] uppercase text-white/20 mb-4">— End of Experience —</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-widest text-white/10">ITZFIZZ</h2>
        </div>
      </div>

    </div>
  );
};

export default App;
