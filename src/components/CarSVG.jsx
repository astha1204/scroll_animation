import React, { forwardRef } from 'react'

const CarSVG = forwardRef((props, ref) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 400 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto car-glow select-none"
      {...props}
    >
      {/* Shadow beneath car */}
      <ellipse cx="200" cy="195" rx="130" ry="14" fill="rgba(0,0,0,0.6)" />

      {/* Main body */}
      <path
        d="M 60 110 C 60 60 90 30 140 22 L 200 18 L 260 22 C 310 30 340 60 340 110 C 340 160 310 185 260 188 L 200 190 L 140 188 C 90 185 60 160 60 110 Z"
        fill="#1a1a1a"
        stroke="#333"
        strokeWidth="1"
      />

      {/* Body highlight - top edge */}
      <path
        d="M 120 30 C 155 20 200 17 245 20 C 278 24 305 35 322 52"
        stroke="#444"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Roof/cockpit area */}
      <path
        d="M 145 65 C 155 48 175 40 200 39 C 225 40 245 48 255 65 L 265 105 C 265 128 240 142 200 142 C 160 142 135 128 135 105 Z"
        fill="#111"
        stroke="#2a2a2a"
        strokeWidth="1"
      />

      {/* Windshield */}
      <path
        d="M 152 70 C 162 55 178 48 200 47 C 222 48 238 55 248 70 L 255 95 C 255 108 232 116 200 116 C 168 116 145 108 145 95 Z"
        fill="rgba(100,180,255,0.08)"
        stroke="rgba(100,180,255,0.3)"
        strokeWidth="1"
      />

      {/* Windshield reflection */}
      <path
        d="M 162 58 C 172 52 185 49 196 49"
        stroke="rgba(200,240,255,0.25)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Side vents left */}
      <path d="M 75 90 L 105 88 L 108 100 L 75 103 Z" fill="#111" stroke="#2a2a2a" strokeWidth="0.8" />
      <path d="M 76 93 L 106 91" stroke="#333" strokeWidth="0.6" />
      <path d="M 76 97 L 106 95" stroke="#333" strokeWidth="0.6" />
      <path d="M 76 101 L 106 99" stroke="#333" strokeWidth="0.6" />

      {/* Side vents right */}
      <path d="M 325 90 L 295 88 L 292 100 L 325 103 Z" fill="#111" stroke="#2a2a2a" strokeWidth="0.8" />
      <path d="M 324 93 L 294 91" stroke="#333" strokeWidth="0.6" />
      <path d="M 324 97 L 294 95" stroke="#333" strokeWidth="0.6" />
      <path d="M 324 101 L 294 99" stroke="#333" strokeWidth="0.6" />

      {/* Front bumper */}
      <path
        d="M 130 30 C 155 18 200 14 245 18 C 280 22 310 35 325 50 C 310 46 280 40 245 36 C 200 32 155 33 130 40 Z"
        fill="#222"
        stroke="#333"
        strokeWidth="0.8"
      />

      {/* Front grille */}
      <path
        d="M 165 22 L 235 22 L 238 32 L 162 32 Z"
        fill="#0a0a0a"
        stroke="#2a2a2a"
        strokeWidth="0.8"
      />
      {[168, 178, 188, 198, 208, 218, 228].map((x, i) => (
        <line key={i} x1={x} y1={22} x2={x + 1} y2={32} stroke="#222" strokeWidth="0.8" />
      ))}

      {/* Headlights left */}
      <path d="M 128 28 L 155 22 L 158 34 L 130 40 Z" fill="#0d0d0d" stroke="#333" strokeWidth="0.8" />
      <path d="M 130 30 L 152 25 L 154 32 L 132 37 Z" fill="rgba(255,240,180,0.15)" />
      {/* DRL strip */}
      <line x1="131" y1="28" x2="154" y2="23" stroke="rgba(232,255,0,0.7)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Headlights right */}
      <path d="M 272 28 L 245 22 L 242 34 L 270 40 Z" fill="#0d0d0d" stroke="#333" strokeWidth="0.8" />
      <path d="M 270 30 L 248 25 L 246 32 L 268 37 Z" fill="rgba(255,240,180,0.15)" />
      <line x1="269" y1="28" x2="246" y2="23" stroke="rgba(232,255,0,0.7)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Rear bumper */}
      <path
        d="M 130 188 C 155 196 200 200 245 196 C 280 192 310 180 325 165 C 310 168 280 174 245 176 C 200 178 155 178 130 175 Z"
        fill="#222"
        stroke="#333"
        strokeWidth="0.8"
      />

      {/* Tail lights */}
      <path d="M 128 185 L 158 188 L 158 176 L 130 172 Z" fill="#0d0d0d" stroke="#333" strokeWidth="0.8" />
      <line x1="131" y1="184" x2="156" y2="186" stroke="rgba(255,48,48,0.8)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="131" y1="180" x2="156" y2="182" stroke="rgba(255,48,48,0.4)" strokeWidth="0.8" strokeLinecap="round" />

      <path d="M 272 185 L 242 188 L 242 176 L 270 172 Z" fill="#0d0d0d" stroke="#333" strokeWidth="0.8" />
      <line x1="269" y1="184" x2="244" y2="186" stroke="rgba(255,48,48,0.8)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="269" y1="180" x2="244" y2="182" stroke="rgba(255,48,48,0.4)" strokeWidth="0.8" strokeLinecap="round" />

      {/* Exhaust pipes */}
      <ellipse cx="175" cy="193" rx="8" ry="5" fill="#111" stroke="#2a2a2a" strokeWidth="0.8" />
      <ellipse cx="175" cy="193" rx="4" ry="2.5" fill="#0a0a0a" />
      <ellipse cx="225" cy="193" rx="8" ry="5" fill="#111" stroke="#2a2a2a" strokeWidth="0.8" />
      <ellipse cx="225" cy="193" rx="4" ry="2.5" fill="#0a0a0a" />

      {/* Front wheels */}
      {/* FL */}
      <ellipse cx="108" cy="68" rx="28" ry="18" fill="#111" stroke="#2a2a2a" strokeWidth="1.5" />
      <ellipse cx="108" cy="68" rx="18" ry="11" fill="#0d0d0d" stroke="#333" strokeWidth="1" />
      <ellipse cx="108" cy="68" rx="9" ry="6" fill="#111" stroke="#444" strokeWidth="0.8" />
      {/* Spokes FL */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        return <line key={i} x1={108} y1={68} x2={108 + 15 * Math.cos(rad)} y2={68 + 10 * Math.sin(rad)} stroke="#2a2a2a" strokeWidth="1" />
      })}
      <ellipse cx="108" cy="68" rx="4" ry="3" fill="#333" />

      {/* FR */}
      <ellipse cx="292" cy="68" rx="28" ry="18" fill="#111" stroke="#2a2a2a" strokeWidth="1.5" />
      <ellipse cx="292" cy="68" rx="18" ry="11" fill="#0d0d0d" stroke="#333" strokeWidth="1" />
      <ellipse cx="292" cy="68" rx="9" ry="6" fill="#111" stroke="#444" strokeWidth="0.8" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        return <line key={i} x1={292} y1={68} x2={292 + 15 * Math.cos(rad)} y2={68 + 10 * Math.sin(rad)} stroke="#2a2a2a" strokeWidth="1" />
      })}
      <ellipse cx="292" cy="68" rx="4" ry="3" fill="#333" />

      {/* Rear wheels */}
      {/* RL */}
      <ellipse cx="108" cy="152" rx="28" ry="18" fill="#111" stroke="#2a2a2a" strokeWidth="1.5" />
      <ellipse cx="108" cy="152" rx="18" ry="11" fill="#0d0d0d" stroke="#333" strokeWidth="1" />
      <ellipse cx="108" cy="152" rx="9" ry="6" fill="#111" stroke="#444" strokeWidth="0.8" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        return <line key={i} x1={108} y1={152} x2={108 + 15 * Math.cos(rad)} y2={152 + 10 * Math.sin(rad)} stroke="#2a2a2a" strokeWidth="1" />
      })}
      <ellipse cx="108" cy="152" rx="4" ry="3" fill="#333" />

      {/* RR */}
      <ellipse cx="292" cy="152" rx="28" ry="18" fill="#111" stroke="#2a2a2a" strokeWidth="1.5" />
      <ellipse cx="292" cy="152" rx="18" ry="11" fill="#0d0d0d" stroke="#333" strokeWidth="1" />
      <ellipse cx="292" cy="152" rx="9" ry="6" fill="#111" stroke="#444" strokeWidth="0.8" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        return <line key={i} x1={292} y1={152} x2={292 + 15 * Math.cos(rad)} y2={152 + 10 * Math.sin(rad)} stroke="#2a2a2a" strokeWidth="1" />
      })}
      <ellipse cx="292" cy="152" rx="4" ry="3" fill="#333" />

      {/* Center accent line */}
      <line x1="200" y1="30" x2="200" y2="185" stroke="rgba(232,255,0,0.06)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Roof detail */}
      <path
        d="M 175 105 C 183 100 200 98 225 105"
        stroke="#333"
        strokeWidth="0.8"
        fill="none"
      />

      {/* Body crease lines */}
      <path d="M 90 90 C 120 82 160 78 200 78 C 240 78 280 82 310 90" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
      <path d="M 90 125 C 120 130 160 133 200 133 C 240 133 280 130 310 125" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
    </svg>
  )
})

CarSVG.displayName = 'CarSVG'
export default CarSVG
