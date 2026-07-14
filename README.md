<div align="center">

# Trams Agency

### UI Assignment — React Implementation

A premium, pixel-perfect React recreation of the Trams Agency Figma design with modern animations and responsive layouts.

[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://trams-website.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

**Live Preview →** [trams-website.vercel.app](https://trams-website.vercel.app)

</div>

---

## Sections Implemented

| Section | Description |
|---------|-------------|
| **Navbar** | Fixed glass navbar, scroll blur, mobile hamburger menu |
| **Hero** | Animated team photos, gradient text, parallax scroll |
| **Marquee** | Infinite scrolling ticker of capabilities |
| **Services** | 4 service items with animated counters |
| **Capabilities** | 6 image cards with hover glow + zoom effects |
| **Portfolio** | 3 featured projects with real images |
| **Stats** | Animated number counters on scroll |
| **Newsletter** | Email subscription with gradient background |
| **Footer** | Links, socials, copyright |

---

## Tech Stack

```
React 19  ·  Vite  ·  Tailwind CSS v4  ·  Framer Motion  ·  Lucide Icons
```

---

## Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| Mobile | < 768px | Single column, hamburger menu |
| Tablet | 768 – 1024px | 2-column grids |
| Desktop | > 1024px | Full 12-column grid |

---

## Getting Started

```bash
# Clone
git clone https://github.com/Tanisshhka/Trams-UI-Assignment.git
cd Trams-UI-Assignment/trams-website

# Install
npm install

# Run
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `Tanisshhka/Trams-UI-Assignment`
3. Set **Root Directory** to `trams-website`
4. Click **Deploy**

---

## Project Structure

```
trams-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── Services.jsx
│   │   ├── WhatWeCanDo.jsx
│   │   ├── Portfolio.jsx
│   │   ├── CustomerValue.jsx
│   │   ├── Footer.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── ScrollToTop.jsx
│   ├── hooks/
│   │   ├── useInView.js
│   │   └── useScroll.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

---

## Design Tokens

| Color | Hex | Usage |
|-------|-----|-------|
| Dark | `#0a0a0f` | Backgrounds |
| Purple | `#8B5CF6` | Primary accent |
| Coral | `#F97066` | Secondary accent |
| Cyan | `#06B6D4` | Tertiary accent |
| Amber | `#F59E0B` | Highlight |
| Sage | `#c8d5be` | Newsletter bg |

**Font:** Inter (Google Fonts)

---

## Author

**Tanishka** · [GitHub](https://github.com/Tanisshhka)
