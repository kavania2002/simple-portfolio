<div align="center">
  <h1>simple-portfolio</h1>
  <p>Personal portfolio website for <strong>Kavan Gondalia</strong></p>
  <p>
    <a href="https://kavania2002.in" target="_blank" rel="noreferrer">🌐 Live Demo</a>
  </p>
  <p>
    <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
    <img alt="Vite" src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white" />
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?logo=tailwindcss&logoColor=white" />
    <img alt="Framer Motion" src="https://img.shields.io/badge/Framer%20Motion-12-0055FF?logo=framer&logoColor=white" />
    <img alt="License" src="https://img.shields.io/badge/License-MIT-2EA44F" />
  </p>
</div>

## ✨ Overview

A full-screen, scroll-snap portfolio built with React and TypeScript. It blends a warm earthy palette with smooth motion and responsive layouts across mobile and desktop.

## 🧭 Table of Contents

- [Features](#-features)
- [Sections](#-sections)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Scripts](#-scripts)
- [Customize Content](#-customize-content)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [License](#-license)

## 🚀 Features

- 🧲 Scroll-snap sections with anchor-based navigation
- 📱 Responsive layouts with a 768px breakpoint
- 🧩 SVG-based loading animation
- 🌊 Scroll-reveal motion using Framer Motion `useInView`
- 🗂️ Tabbed career timeline (Work, Co-Curricular, Education)
- 🧪 Projects grid with tags and external links
- 🏆 Achievements section with competitive programming profiles

## 🧩 Sections

| Section | Description |
|---------|-------------|
| Hero | Greeting, tagline, profile photo, CTA button |
| About Me | Bio and skills (side-by-side on desktop, stacked on mobile) |
| Skills (mobile) | Languages, Frameworks/Libraries, Tools/Technologies |
| Career | Work experience, co-curricular roles, education timeline |
| Projects | Project cards with descriptions, tags, and links |
| Achievements | CP accounts, hackathon wins, certifications, social links |

## 🧰 Tech Stack

| Technology | Usage |
|------------|-------|
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Vite 6](https://vite.dev) | Build tool and dev server |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion 12](https://www.framer.com/motion) | Animations |
| [React Icons](https://react-icons.github.io/react-icons) | Icon library |
| [simplebar-react](https://github.com/Grsmto/simplebar) | Custom scrollbars |
| [Inria Sans](https://fonts.google.com/specimen/Inria+Sans) | Font |

## ⚡ Quick Start

### Prerequisites

- Node.js (>= 18)
- Yarn 1.22+

### Install

```bash
yarn install
```

### Development

```bash
yarn dev
```

Starts the Vite dev server with HMR at `http://localhost:5173`.

### Build

```bash
yarn build
```

Runs `tsc -b` followed by `vite build`. Output goes to `dist/`.

### Preview

```bash
yarn preview
```

Serves the built `dist/` folder locally.

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start the Vite dev server |
| `yarn build` | Type-check and build for production |
| `yarn preview` | Preview the production build |
| `yarn lint` | Run ESLint across the project |

## 🛠️ Customize Content

- Navigation links: [src/constants/navbar.ts](src/constants/navbar.ts)
- Skills data: [src/constants/skills.ts](src/constants/skills.ts)
- Career timeline: [src/constants/career.ts](src/constants/career.ts)
- Projects list: [src/constants/projects.ts](src/constants/projects.ts)
- Achievements: [src/constants/achievements.ts](src/constants/achievements.ts)
- Social links: [src/constants/socials.tsx](src/constants/socials.tsx)

## 🧱 Project Structure

```
src/
├── components/       # Reusable UI components (Reveal, Loader, Divider, etc.)
├── constants/        # Static data (navbar, skills, career, projects, etc.)
├── contexts/         # React context providers (ScreenSize)
├── sections/         # Full-viewport page sections (Hero, About, Career, etc.)
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── index.css         # Tailwind + custom theme
```

## 📦 Deployment

Build the project and deploy the `dist/` directory to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

The live site is hosted at [kavania2002.in](https://kavania2002.in).

## 📄 License

MIT
