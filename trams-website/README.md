# Trams Agency - UI Assignment

A premium, pixel-perfect React implementation of the Trams Agency Figma design, featuring modern animations, responsive layouts, and clean component architecture.

**Live Demo:** [Vercel Deployment](https://trams-website.vercel.app)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI Library |
| Vite | Build Tool & Dev Server |
| Tailwind CSS v4 | Utility-first Styling |
| Framer Motion | Animations & Transitions |
| Lucide React | Icon System |

---

## Project Structure

```
src/
 components/
   Navbar.jsx          - Fixed navbar with scroll effects, mobile menu
   Hero.jsx            - Hero section with animated team photos
   Marquee.jsx         - Infinite scrolling ticker section
   Services.jsx        - Services list with animated counters
   WhatWeCanDo.jsx     - Capability cards with real images
   Portfolio.jsx       - Featured work with image cards
   CustomerValue.jsx   - Stats section with animated counters
   Footer.jsx          - Newsletter subscription + footer links
   CustomCursor.jsx    - Desktop custom cursor effect
   LoadingScreen.jsx   - Animated loading screen
   ScrollToTop.jsx     - Scroll to top button
 hooks/
   useScroll.js        - Scroll direction & progress hooks
   useInView.js        - Intersection Observer hook
```

---

## Features Implemented

### Core Requirements
- **All sections from Figma** - Hero, Services, What We Can Do, Featured Work, About, Newsletter, Footer
- **Responsive design** - Mobile, tablet, and desktop breakpoints
- **Clean component structure** - Reusable, functional components
- **Proper styling** - Colors, typography, and spacing matching the Figma design
- **Hover states** - Interactive hover effects on cards, buttons, and links

### Bonus Features (Animations)
- **Loading screen** - Animated logo reveal with gradient progress bar
- **Hero section** - Staggered text reveal, floating team photos, parallax scroll
- **Animated counters** - Numbers count up when scrolled into view
- **Card hover effects** - Glow, tilt, and image zoom on hover
- **Marquee ticker** - Infinite scrolling capabilities list
- **Custom cursor** - Desktop-only custom cursor with hover scaling
- **Smooth scroll** - Navigation smooth scrolls to sections
- **Gradient text** - Multi-color gradient text effects
- **Animated blobs** - Background gradient blobs with breathing animation
- **Scroll-triggered reveals** - All sections animate in on scroll

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| Dark | `#0a0a0f` | Primary background |
| Purple | `#8B5CF6` | Primary accent |
| Coral | `#F97066` | Secondary accent |
| Cyan | `#06B6D4` | Tertiary accent |
| Amber | `#F59E0B` | Highlight accent |
| Sage | `#c8d5be` | Newsletter section |
| Font | Inter | All typography |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Tanisshhka/Trams-UI-Assignment.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment (Vercel)

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite framework
4. Deploy

Build command: `npm run build`
Output directory: `dist`

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 768px | Single column, stacked |
| Tablet | 768px - 1024px | 2-column grids |
| Desktop | > 1024px | Full 12-column grid |

---

## Author

**Tanishka** - [GitHub](https://github.com/Tanisshhka)

---

## License

This project was created as part of an internship assignment for Trams Agency.
