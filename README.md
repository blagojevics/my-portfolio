# 💼 Personal Portfolio - [Stefan Blagojević]

This is my personal portfolio website built with **Next.js (App Router)** and **TypeScript**.  
It showcases my projects, experience, and blog posts, and serves as a way to connect with me online.

 Deployed on [Vercel](https://vercel.com).

---

## ✨ Features

-  Built with [Next.js](https://nextjs.org/) 15 + React 18
-  Written in **TypeScript** for type safety
-  Styled with [Tailwind CSS](https://tailwindcss.com/)
-  Light/Dark Mode support
-  Fully responsive design
-  Projects section with live previews

---

## 📂 Project Structure

```text
my-portfolio/
├── .github/             # GitHub workflows / configs
│   └── chatmodes/       # Custom GitHub-related scripts/configs
├── public/              # Static assets (images, favicon, etc.)
├── src/                 # Main source code
│   ├── app/             # Next.js App Router (layouts, pages, routing)
│   ├── assets/          # Static files used in components (icons, svgs, etc.)
│   ├── components/      # Reusable UI components
│   ├── data/            # Config/data (e.g. portfolio items, constants)
│   └── types/           # TypeScript type definitions
├── .gitignore           # Git ignore rules
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS configuration (used by Tailwind CSS)
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Lock file for npm
├── README.md            # Project README
```

---

## 🛠 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/blagojevics/my-portfolio.git
cd my-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

##  Deployment

Deployed easily with [Vercel](https://vercel.com).

Push to `main` branch → live automatically at:
