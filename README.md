# 🚗 Car Scroll Animation — ITZFIZZ

A premium scroll-driven car animation built with React, GSAP, and Tailwind CSS. Features a smooth intro animation, scroll-tied car movement, and impact metrics display — inspired by high-end automotive web experiences.

---

## ✨ Features

- **Scroll-Driven Animation** — Car moves, rotates, and scales based on scroll position (not time-based)
- **Premium Intro** — Staggered headline reveal + stat cards cascade on page load
- **GSAP ScrollTrigger** — Smooth scrubbing with 1.5s lag for a weighted, cinematic feel
- **3-Phase Car Motion** — Car drives in → sweeps left → sweeps right across the viewport
- **Performance First** — All animations use `transform` (GPU-composited), no layout reflows
- **Custom SVG Car** — Top-view McLaren-inspired SVG, no external image dependency
- **Scroll Progress Bar** — Fixed top bar tracks scroll position
- **Noise Texture + Grid Lines** — Subtle background details for a luxury aesthetic

---

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI & component structure |
| GSAP 3 + ScrollTrigger | All animations (intro + scroll) |
| Tailwind CSS 3 | Utility-first styling |
| Vite | Dev server & build tool |

---

## 📁 Project Structure

```
car-scroll-app/
├── public/
├── src/
│   ├── components/
│   │   ├── CarSVG.jsx          # Top-view SVG car illustration
│   │   ├── CustomCursor.jsx    # Custom cursor with blend mode
│   │   ├── ScrollProgress.jsx  # Fixed top progress bar
│   │   └── ...
│   ├── App.jsx                 # Main component — all animation logic
│   ├── index.css               # Global styles, CSS variables, keyframes
│   └── main.jsx                # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/car-scroll-animation.git

# Navigate into the project
cd car-scroll-animation

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder — ready to deploy.

---

## 🌐 Deployment on Render

This project is deployed as a **Static Site** on [Render](https://render.com).

| Setting | Value |
|---|---|
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

Every push to `main` triggers an automatic redeploy.

**Live URL:** [https://car-scroll-animation.onrender.com](https://car-scroll-animation.onrender.com)

---

## 🎬 Animation Breakdown

### Intro (On Page Load)
| Element | Animation |
|---|---|
| Car | Fades in, scales up from 0.75 → 1 |
| Headline letters | Stagger up from y:80, delay 0.04s each |
| Stat cards | Slide up with 0.13s stagger delay |
| Side labels | Fade in last |

### Scroll Timeline (GSAP ScrollTrigger, scrub: 1.5)
| Phase | Scroll % | Car Motion |
|---|---|---|
| A | 0 → 40% | Scales up (1.65x), drifts upward, rotates +8° |
| B | 40 → 70% | Sweeps left (−22vw), rotates −14°, scales 2.1x |
| C | 70 → 100% | Sweeps right (+18vw), settles, rotates +6° |

---

## 📊 Impact Metrics Displayed

| Metric | Description |
|---|---|
| 58% | Increase in pick up point use |
| 23% | Decreased in customer phone calls |
| 27% | Increase in pick up point use |
| 40% | Decreased in customer phone calls |

---

## 🧑‍💻 Author

Built for **ITZFIZZ Digital** assignment.

---

## 📄 License

MIT — free to use and modify.
