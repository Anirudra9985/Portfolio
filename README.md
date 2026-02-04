# Anirudra Singh Chauhan - Portfolio Website

> A modern, responsive portfolio website showcasing projects, skills, and professional experience.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
  - [Deploy to Vercel](#deploy-to-vercel)
  - [Deploy to Netlify](#deploy-to-netlify)
  - [Deploy to GitHub Pages](#deploy-to-github-pages)
- [Customization Guide](#customization-guide)
- [Project Structure Explained](#project-structure-explained)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

This portfolio website is designed to showcase your professional work, projects, skills, and experience in a clean, modern interface. Built with performance and accessibility in mind, it provides an excellent platform to present yourself to potential employers, clients, or collaborators.

---

## Features

- ✨ **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🚀 **Fast Performance** - Optimized loading times and SEO-friendly
- 🎨 **Customizable** - Easy to modify colors, content, and layout
- 📧 **Contact Form** - Integrated contact form with email functionality
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📊 **Analytics Ready** - Google Analytics integration
- ♿ **Accessible** - WCAG 2.1 compliant
- 🔍 **SEO Optimized** - Meta tags, sitemap, and robots.txt included

---

## Demo

🔗 **Live Demo:** [anirudra9985.github.io/Portfolio](https://anirudra9985.github.io/Portfolio)

🔗 **GitHub Repository:** [github.com/Anirudra9985/Portfolio](https://github.com/Anirudra9985/Portfolio)

### Screenshots

![Homepage](./docs/screenshots/homepage.png)
![Projects](./docs/screenshots/projects.png)
![Contact](./docs/screenshots/contact.png)

---

## Tech Stack

### Frontend
- **Framework:** React 18+ / Next.js 14+ / Vue 3+ / HTML5
- **Styling:** CSS3 / Tailwind CSS / SCSS / Styled Components
- **Animations:** Framer Motion / GSAP / AOS
- **Icons:** React Icons / Font Awesome / Heroicons

### Backend (if applicable)
- **Runtime:** Node.js
- **Framework:** Express.js / Next.js API Routes
- **Email Service:** NodeMailer / SendGrid / EmailJS

### Tools & Utilities
- **Package Manager:** npm / yarn / pnpm
- **Version Control:** Git
- **Linting:** ESLint
- **Formatting:** Prettier
- **Build Tool:** Vite / Webpack / Next.js

---

## Directory Structure

```
portfolio/
│
├── public/                      # Static assets
│   ├── images/                  # Image files
│   │   ├── profile.jpg          # Profile photo
│   │   ├── projects/            # Project screenshots
│   │   └── icons/               # Favicon and app icons
│   ├── resume.pdf               # Downloadable resume
│   ├── favicon.ico              # Website favicon
│   ├── robots.txt               # SEO robots file
│   └── sitemap.xml              # SEO sitemap
│
├── src/                         # Source files
│   ├── components/              # Reusable React components
│   │   ├── About.jsx            # About section component
│   │   ├── Contact.jsx          # Contact form component
│   │   ├── Footer.jsx           # Footer component
│   │   ├── Header.jsx           # Header/Navigation component
│   │   ├── Hero.jsx             # Hero/Landing section
│   │   ├── Projects.jsx         # Projects showcase component
│   │   ├── Skills.jsx           # Skills section component
│   │   └── common/              # Common/shared components
│   │       ├── Button.jsx       # Reusable button component
│   │       ├── Card.jsx         # Card component
│   │       ├── Modal.jsx        # Modal component
│   │       └── Loader.jsx       # Loading spinner
│   │
│   ├── pages/                   # Page components (if using routing)
│   │   ├── Home.jsx             # Homepage
│   │   ├── ProjectDetail.jsx   # Individual project page
│   │   └── NotFound.jsx         # 404 page
│   │
│   ├── styles/                  # Styling files
│   │   ├── globals.css          # Global styles
│   │   ├── variables.css        # CSS variables (colors, fonts)
│   │   ├── components/          # Component-specific styles
│   │   └── animations.css       # Animation definitions
│   │
│   ├── data/                    # Static data and content
│   │   ├── projects.js          # Project data
│   │   ├── skills.js            # Skills data
│   │   ├── experience.js        # Work experience data
│   │   └── education.js         # Education data
│   │
│   ├── utils/                   # Utility functions
│   │   ├── helpers.js           # Helper functions
│   │   ├── constants.js         # Constants and config
│   │   └── validation.js        # Form validation
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useScrollPosition.js # Scroll position hook
│   │   ├── useTheme.js          # Theme toggle hook
│   │   └── useInView.js         # Intersection observer hook
│   │
│   ├── context/                 # React Context providers
│   │   └── ThemeContext.js      # Theme context
│   │
│   ├── assets/                  # Other assets
│   │   ├── fonts/               # Custom fonts
│   │   └── icons/               # SVG icons
│   │
│   ├── App.jsx                  # Main App component
│   ├── index.js                 # Entry point
│   └── routes.js                # Route definitions
│
├── docs/                        # Documentation
│   ├── screenshots/             # Project screenshots
│   ├── DEPLOYMENT.md            # Deployment guide
│   └── CUSTOMIZATION.md         # Customization guide
│
├── tests/                       # Test files
│   ├── unit/                    # Unit tests
│   └── integration/             # Integration tests
│
├── .env.example                 # Environment variables template
├── .env.local                   # Local environment variables (not in git)
├── .gitignore                   # Git ignore file
├── .eslintrc.json               # ESLint configuration
├── .prettierrc                  # Prettier configuration
├── package.json                 # Project dependencies
├── package-lock.json            # Locked dependency versions
├── README.md                    # This file
├── LICENSE                      # Project license
└── vercel.json / netlify.toml   # Deployment configuration

```

---

## Getting Started

Follow these steps to get your portfolio up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.x or higher) - [Download here](https://nodejs.org/)
- **npm** (v8.x or higher) or **yarn** (v1.22.x or higher)
- **Git** - [Download here](https://git-scm.com/)

Verify installations:
```bash
node --version
npm --version
git --version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anirudra9985/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Or using yarn
   yarn install

   # Or using pnpm
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your actual values (see [Environment Variables](#environment-variables))

### Running Locally

Start the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

The application will open at `http://localhost:3000` (or another port if 3000 is busy).

---

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://anirudra9985.github.io/Portfolio
NEXT_PUBLIC_SITE_NAME=Anirudra Singh Chauhan Portfolio

# Email Configuration (for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Or if using SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=anirudrachauhan2004@gmail.com
SENDGRID_TO_EMAIL=anirudrachauhan2004@gmail.com

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Social Media Links
NEXT_PUBLIC_GITHUB_URL=https://github.com/Anirudra9985
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/anirudra-singh-chauhan
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/anirudra9985
```

**Important:** Never commit `.env.local` to version control. It's already included in `.gitignore`.

---

## Deployment

Your portfolio can be deployed to various hosting platforms. Here are the most popular options:

### Deploy to Vercel

Vercel is the recommended platform for Next.js applications.

#### Method 1: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

#### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables
5. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

**Custom Domain:**
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

---

### Deploy to Netlify

#### Method 1: Using Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

#### Method 2: Using Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Choose your repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build` or `dist` or `.next`
5. Add environment variables
6. Click "Deploy site"

**Configuration File (netlify.toml):**
```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

### Deploy to GitHub Pages

#### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

#### Step 2: Update package.json

Add the following to your `package.json`:

```json
{
  "homepage": "https://anirudra9985.github.io/Portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

#### Step 3: Deploy

```bash
npm run deploy
```

#### Step 4: Configure GitHub Repository

1. Go to your repository on GitHub
2. Navigate to Settings → Pages
3. Under "Source", select `gh-pages` branch
4. Click Save

Your site will be live at `https://anirudra9985.github.io/Portfolio`

**For React Router:**
Add a `404.html` file in your `public` folder that redirects to `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
</html>
```

---

## Customization Guide

### 1. Update Personal Information

Edit `src/data/` files to update your information:

**src/data/projects.js**
```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Brief description of the project",
    image: "/images/projects/project1.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Anirudra9985/project-name",
    featured: true
  },
  // Add more projects...
];
```

**src/data/skills.js**
```javascript
export const skills = {
  frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  tools: ["Git", "Docker", "AWS", "Figma"]
};
```

### 2. Change Colors and Theme

Edit `src/styles/variables.css`:
```css
:root {
  /* Primary Colors */
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-accent: #10b981;
  
  /* Text Colors */
  --color-text-primary: #1f2937;
  --color-text-secondary: #6b7280;
  
  /* Background Colors */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f9fafb;
  
  /* Fonts */
  --font-primary: 'Inter', sans-serif;
  --font-secondary: 'Poppins', sans-serif;
}
```

### 3. Replace Images

- **Profile Photo:** Replace `public/images/profile.jpg`
- **Project Images:** Add to `public/images/projects/`
- **Favicon:** Replace `public/favicon.ico`

### 4. Update Meta Tags

Edit `public/index.html` or your SEO component:
```html
<meta name="description" content="Anirudra Singh Chauhan - Full Stack Developer Portfolio">
<meta name="keywords" content="web developer, react, portfolio, full stack">
<meta name="author" content="Anirudra Singh Chauhan">
<meta property="og:title" content="Anirudra Singh Chauhan - Portfolio">
<meta property="og:image" content="/images/og-image.jpg">
```

### 5. Customize Contact Form

Edit `src/components/Contact.jsx` to connect your email service:

**Using EmailJS:**
```javascript
import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
  e.preventDefault();
  
  emailjs.sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    form.current,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  )
  .then((result) => {
    console.log('Email sent successfully');
  }, (error) => {
    console.log('Failed to send email');
  });
};
```

---

## Project Structure Explained

### Key Directories

- **`/public`** - Static files served directly (images, fonts, resume)
- **`/src/components`** - Reusable React components
- **`/src/pages`** - Page-level components
- **`/src/data`** - JSON/JS files containing content
- **`/src/styles`** - CSS/SCSS styling files
- **`/src/utils`** - Helper functions and utilities
- **`/src/hooks`** - Custom React hooks
- **`/docs`** - Project documentation

### Important Files

- **`package.json`** - Project dependencies and scripts
- **`.env.local`** - Environment variables (not in git)
- **`.gitignore`** - Files to exclude from git
- **`README.md`** - This documentation
- **`vercel.json`** - Vercel deployment config

---

## Scripts

Available npm scripts:

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report

# Deployment
npm run deploy       # Deploy to hosting platform
```

---

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Update documentation as needed
- Add tests for new features
- Ensure all tests pass before submitting

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Anirudra Singh Chauhan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## Contact

**Anirudra Singh Chauhan**

- 📧 Email: anirudrachauhan2004@gmail.com
- 💼 LinkedIn: [linkedin.com/in/anirudra-singh-chauhan](https://linkedin.com/in/anirudra-singh-chauhan)
- 🐙 GitHub: [github.com/Anirudra9985](https://github.com/Anirudra9985)
- 🌐 Portfolio: [anirudra9985.github.io/Portfolio](https://anirudra9985.github.io/Portfolio)
- 🐦 Twitter: [@anirudra9985](https://twitter.com/anirudra9985)

---

## Acknowledgments

- Design inspiration from [Dribbble](https://dribbble.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Images from [Unsplash](https://unsplash.com/)

---

## Support

If you find this project helpful, please give it a ⭐️ on GitHub!

For questions or issues, please [open an issue](https://github.com/Anirudra9985/Portfolio/issues) on GitHub.

---

**Made with ❤️ by Anirudra Singh Chauhan**

*Last updated: February 2026*