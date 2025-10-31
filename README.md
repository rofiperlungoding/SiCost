# 🚀 SICOST - Professional Website Building Service

<div align="center">

![SICOST Logo](https://img.shields.io/badge/SICOST-Website%20Builder-blue?style=for-the-badge&logo=react)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)](https://github.com/sicost/website)
[![Code Quality](https://img.shields.io/badge/code%20quality-A-brightgreen?style=flat-square)](https://github.com/sicost/website)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

*Enterprise-grade website building service platform built with modern web technologies*

[🌐 Live Demo](https://sicost.vercel.app) • [📖 Documentation](docs/) • [🐛 Report Bug](issues/) • [✨ Request Feature](issues/)

</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [⚙️ Development](#️-development)
- [🏗️ Build & Deployment](#️-build--deployment)
- [🌍 Environment Variables](#-environment-variables)
- [📁 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🎯 Overview

**SICOST** is a cutting-edge website building service platform designed to deliver professional, scalable, and SEO-optimized websites for businesses of all sizes. Built with enterprise-grade architecture and modern development practices, SICOST provides a comprehensive solution for digital presence establishment.

### 🎨 Design Philosophy

- **Performance First**: Optimized for Core Web Vitals and lighthouse scores
- **Accessibility**: WCAG 2.1 AA compliant design patterns
- **Scalability**: Modular architecture supporting rapid feature development
- **User Experience**: Intuitive interfaces with smooth animations and interactions

---

## ✨ Features

### 🌟 Core Features

- **🎨 Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **🌐 Internationalization**: Multi-language support (Indonesian/English)
- **📱 Mobile-First**: Fully responsive across all device sizes
- **⚡ Performance**: Lightning-fast loading with Vite bundling
- **🔍 SEO Optimized**: Meta tags, structured data, and sitemap generation
- **📧 Contact Forms**: Integrated EmailJS for seamless communication
- **🎭 Animations**: Smooth transitions with Framer Motion
- **♿ Accessibility**: Screen reader friendly and keyboard navigation

### 🛡️ Technical Features

- **🔒 Type Safety**: Full TypeScript implementation
- **📋 Form Validation**: Robust validation with React Hook Form + Zod
- **🎯 Code Quality**: ESLint + Prettier for consistent code style
- **🧪 Testing Ready**: Configured for unit and integration testing
- **📊 Analytics Ready**: Google Analytics and tracking integration
- **🚀 CI/CD Ready**: Automated deployment pipelines

---

## 🛠️ Tech Stack

### Frontend Core
- **[React 19](https://reactjs.org/)** - UI Library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Next-generation build tool
- **[React Router](https://reactrouter.com/)** - Client-side routing

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[Hookform Resolvers](https://github.com/react-hook-form/resolvers)** - Validation integration

### Internationalization & SEO
- **[React i18next](https://react.i18next.com/)** - Internationalization framework
- **[React Helmet Async](https://github.com/staylor/react-helmet-async)** - Document head management

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[PostCSS](https://postcss.org/)** - CSS processing

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** >= 18.0.0
- **npm** >= 8.0.0 or **yarn** >= 1.22.0

### Installation

```bash
# Clone the repository
git clone https://github.com/sicost/website.git
cd sicost-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

🎉 **Success!** Open [http://localhost:5173](http://localhost:5173) to view the application.

---

## ⚙️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run preview      # Preview production build locally

# Build
npm run build        # Create production build
npm run build:analyze # Analyze bundle size

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Type Checking
npm run type-check   # Run TypeScript compiler check
```

### Development Workflow

1. **Feature Development**
   ```bash
   git checkout -b feature/your-feature-name
   npm run dev
   # Make your changes
   npm run lint && npm run type-check
   git commit -m "feat: add your feature"
   ```

2. **Code Quality Checks**
   ```bash
   npm run format:check  # Ensure code formatting
   npm run lint          # Check for linting issues
   npm run type-check    # Verify TypeScript types
   ```

3. **Testing**
   ```bash
   npm run test          # Run unit tests
   npm run test:coverage # Generate coverage report
   ```

---

## 🏗️ Build & Deployment

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

### Deployment Options

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## 🌍 Environment Variables

Create a `.env` file in the root directory:

```env
# Application Configuration
VITE_APP_NAME=SICOST Website Builder
VITE_APP_LOCALE=id

# API Configuration
VITE_API_BASE_URL=https://api.sicost.com
VITE_WA_NUMBER=6281234567890

# Analytics (Optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX

# Email Service (EmailJS)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CHAT=false
```

### Environment Variable Reference

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_APP_NAME` | Application name | ✅ | SICOST Website Builder |
| `VITE_APP_LOCALE` | Default locale | ✅ | id |
| `VITE_WA_NUMBER` | WhatsApp contact number | ✅ | - |
| `VITE_GA_TRACKING_ID` | Google Analytics ID | ❌ | - |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID | ❌ | - |

---

## 📁 Project Structure

```
sicost-website/
├── 📁 public/                 # Static assets
├── 📁 src/
│   ├── 📁 components/         # Reusable UI components
│   │   ├── 📁 ui/            # Base UI components
│   │   ├── FeatureCard.tsx   # Feature display component
│   │   ├── PackageCard.tsx   # Service package component
│   │   └── ServiceCard.tsx   # Service detail component
│   ├── 📁 config/            # Configuration files
│   │   ├── i18n.ts          # Internationalization setup
│   │   └── routes.ts        # Route definitions
│   ├── 📁 data/             # Static data and content
│   │   ├── faq.ts           # FAQ content
│   │   ├── packages.ts      # Service packages
│   │   └── portfolio.ts     # Portfolio items
│   ├── 📁 layouts/          # Layout components
│   │   └── Layout.tsx       # Main layout wrapper
│   ├── 📁 pages/            # Page components
│   │   ├── Home.tsx         # Homepage
│   │   ├── Services.tsx     # Services page
│   │   ├── Portfolio.tsx    # Portfolio showcase
│   │   ├── About.tsx        # About page
│   │   ├── Contact.tsx      # Contact page
│   │   ├── FAQ.tsx          # FAQ page
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── 📄 package.json           # Dependencies and scripts
├── 📄 tailwind.config.js     # Tailwind configuration
├── 📄 tsconfig.json          # TypeScript configuration
├── 📄 vite.config.ts         # Vite configuration
├── 📄 eslint.config.js       # ESLint configuration
├── 📄 .prettierrc            # Prettier configuration
└── 📄 README.md              # Project documentation
```

### Architecture Principles

- **Component-Based**: Modular, reusable components
- **Type-Safe**: Full TypeScript coverage
- **Performance**: Code splitting and lazy loading
- **Maintainable**: Clear separation of concerns
- **Scalable**: Easy to extend and modify

---

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

### Development Process

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

### Code Style

- Use **TypeScript** for all new code
- Follow **ESLint** and **Prettier** configurations
- Write **meaningful commit messages**
- Add **JSDoc comments** for complex functions
- Ensure **100% type coverage**

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### 🌟 Star this repository if you find it helpful!

**Built with ❤️ by the SICOST Team**

[🌐 Website](https://sicost.com) • [📧 Contact](mailto:hello@sicost.com) • [🐦 Twitter](https://twitter.com/sicost)

</div>
