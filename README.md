# SiCost - Professional Website Services for SMEs

<div align="center">

![SiCost Logo](https://via.placeholder.com/200x80/DC2626/FFFFFF?text=SiCost)

**Website Profesional untuk UMKM Indonesia**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)

[Live Demo](https://sicost.com) • [Documentation](#-documentation) • [Contact](#-contact)

</div>

---

## 📖 About SiCost

SiCost is a professional web development service specializing in creating **affordable, high-quality websites** for small and medium-sized businesses (UMKM) in Indonesia. We believe every business deserves a strong online presence without breaking the bank.

### 🎯 Our Mission

From consultation to maintenance, we're here to help businesses establish their digital identity and grow online.

### ✨ Key Highlights

- 💰 **Affordable Pricing**: Starting from Rp 120,000
- 🤝 **Personal Touch**: Direct communication with founder
- 🛠️ **Ongoing Support**: Maintenance included in select packages
- 🌐 **Bilingual**: Full Indonesian & English support
- 📱 **Mobile-First**: Responsive design for all devices
- ⚡ **Fast & Accessible**: Performance-optimized

---

## 🚀 Features

### Core Features

- ✅ **Comprehensive Service Packages** - Basic, Standard, Standard + Maintenance, Premium
- ✅ **Portfolio Showcase** - Display completed projects with tech stack
- ✅ **Multilingual Support** - Indonesian and English with i18n
- ✅ **Contact Form** - Integrated with EmailJS for inquiries
- ✅ **FAQ Section** - 15 comprehensive frequently asked questions
- ✅ **SEO Optimized** - Meta tags, Open Graph, structured data
- ✅ **Responsive Design** - Works seamlessly on mobile, tablet, desktop
- ✅ **Smooth Animations** - Framer Motion for delightful interactions
- ✅ **Dark Mode Ready** - Foundation for future dark mode implementation

### Technical Features

- 🎨 **Modern UI Components** - Reusable, type-safe React components
- 🔍 **Type Safety** - Full TypeScript coverage
- 🎯 **Form Validation** - React Hook Form + Zod schema validation
- 🌍 **Internationalization** - react-i18next with localStorage persistence
- 📊 **SEO Management** - React Helmet Async for meta tags
- 🎭 **Smooth Animations** - Framer Motion with scroll triggers
- 🔗 **Clean Routing** - React Router v6 with nested routes
- 📦 **Optimized Build** - Vite for lightning-fast builds

---

## 📦 Service Packages

| Package | Price | Features | Timeline |
|---------|-------|----------|----------|
| **Basic** | Rp 120,000 | 1-page landing, mobile responsive, contact form, Google Maps | 7-12 days |
| **Standard** | Rp 220,000 | 3-5 pages, WhatsApp integration, basic SEO, 2x revisions | 7-12 days |
| **Standard + Maintenance** | Rp 320,000 | All Standard features + 3 months support & updates | 7-16 days |
| **Premium** | Custom Quote | Fully custom, e-commerce, booking systems, advanced features | Custom |

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: React 18.x
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **Build Tool**: Vite 5.x
- **Routing**: React Router v6
- **State Management**: React Hooks (useState, useReducer)

### Form & Validation

- **Form Management**: React Hook Form
- **Validation**: Zod
- **Email Service**: EmailJS

### UI & UX

- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Internationalization**: react-i18next

### SEO & Analytics

- **Meta Management**: React Helmet Async
- **Analytics**: Google Analytics 4 (optional)

### Development Tools

- **Linting**: ESLint + TypeScript ESLint
- **Formatting**: Prettier
- **Version Control**: Git

---

## 🏁 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sicost-website.git

# Navigate to project directory
cd sicost-website

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=SiCost
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_WHATSAPP_NUMBER=628xxxxxxxxxx
VITE_EMAIL=contact@sicost.com
```

### Development

```bash
# Start development server
npm run dev

# Open browser at http://localhost:5173
```

### Build for Production

```bash
# Type check
npm run type-check

# Lint code
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
sicost-website/
├── public/                  # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/              # Images, illustrations
│   ├── components/
│   │   ├── ui/              # Reusable UI components (Button, Card, etc.)
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   ├── sections/        # Page sections (Hero, Pricing, etc.)
│   │   └── common/          # Shared components (ContactForm, etc.)
│   ├── pages/               # Page components
│   │   ├── HomePage.tsx
│   │   ├── LayananPage.tsx
│   │   ├── PortfolioPage.tsx
│   │   ├── TentangPage.tsx
│   │   ├── FAQPage.tsx
│   │   ├── KontakPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── types/               # TypeScript type definitions
│   ├── locales/             # i18n translation files
│   │   ├── en/              # English translations
│   │   └── id/              # Indonesian translations
│   ├── config/              # Configuration files
│   │   ├── i18n.ts
│   │   └── routes.ts
│   ├── data/                # Static data
│   │   ├── packages.ts      # Service packages
│   │   ├── portfolio.ts     # Portfolio projects
│   │   └── faq.ts           # FAQ items
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── .env.example             # Environment variables template
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🎨 Design System

### Color Palette

- **Primary Red**: `#DC2626` - Brand color, CTAs, accents
- **White**: `#FFFFFF` - Background, negative space
- **Gray Scale**: `#F9FAFB` to `#111827` - Text, borders, surfaces

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Design Principles

- ✨ **Minimalist** - Clean layouts, ample whitespace
- 📐 **Consistent** - 8px spacing grid system
- 🎯 **Accessible** - WCAG 2.1 Level AA compliant
- 📱 **Mobile-First** - Optimized for mobile devices

---

## 🌐 Pages

### Main Pages

1. **Home (`/`)** - Hero, service overview, pricing preview, portfolio showcase
2. **Layanan (`/layanan`)** - Detailed service packages and workflow
3. **What We've Built (`/portfolio`)** - Portfolio showcase
4. **Tentang Kami (`/tentang`)** - About us, story, values, credentials
5. **FAQ (`/faq`)** - 15 frequently asked questions
6. **Kontak (`/kontak`)** - Contact form and information

### Error Pages

- **404 Not Found** - Friendly error page with navigation

---

## 🔧 Configuration

### Tailwind Configuration

Custom colors, fonts, and utilities defined in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      brand: {
        red: '#DC2626',
        'red-light': '#FEF2F2',
        'red-dark': '#B91C1C',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
}
```

### Route Configuration

Routes defined in `src/config/routes.ts`:

```typescript
export const routes = {
  home: '/',
  services: '/layanan',
  portfolio: '/portfolio',
  about: '/tentang',
  faq: '/faq',
  contact: '/kontak',
}
```

---

## 📊 Performance Targets

### Lighthouse Scores

- ⚡ **Performance**: 90+
- ♿ **Accessibility**: 95+
- 🎯 **Best Practices**: 95+
- 🔍 **SEO**: 95+

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## ♿ Accessibility

- ✅ WCAG 2.1 Level AA compliant
- ✅ Semantic HTML structure
- ✅ ARIA labels where appropriate
- ✅ Keyboard navigation support
- ✅ Focus indicators visible
- ✅ Color contrast ratio 4.5:1 minimum
- ✅ Alt text for all images
- ✅ Form labels and error messages

---

## 🌍 Internationalization

### Supported Languages

- 🇮🇩 **Indonesian (ID)** - Default
- 🇬🇧 **English (EN)**

### Language Switching

Language preference is stored in `localStorage` and persists across sessions.

### Translation Files

Located in `src/locales/`:
- `en/` - English translations
- `id/` - Indonesian translations

---

## 🚀 Deployment

### Recommended Platforms

1. **Vercel** (Recommended)
   ```bash
   npm i -g vercel
   vercel --prod
   ```

2. **Netlify**
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Pages**
   ```bash
   npm run build
   # Upload dist/ folder
   ```

4. **Hostinger** (Traditional Hosting)
   - Upload `dist/` contents to `public_html`
   - Configure `.htaccess` for SPA routing

---

## 📈 Future Enhancements

### Planned Features

- [ ] Blog section for web development tips
- [ ] Client testimonials carousel
- [ ] Detailed case studies
- [ ] Project quote calculator
- [ ] Client dashboard/portal
- [ ] Live chat integration
- [ ] Newsletter subscription
- [ ] Advanced portfolio filtering
- [ ] Dark mode implementation
- [ ] Progressive Web App (PWA)

### Technical Improvements

- [ ] Server-Side Rendering (Next.js migration)
- [ ] Backend API for form submissions
- [ ] Database integration
- [ ] Admin CMS panel
- [ ] Advanced analytics
- [ ] A/B testing setup

---

## 🧪 Testing

### Manual Testing

```bash
# Run linter
npm run lint

# Type checking
npm run type-check

# Build test
npm run build && npm run preview
```

### Testing Checklist

- [ ] All routes accessible
- [ ] Forms validate correctly
- [ ] Language switching works
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors
- [ ] SEO meta tags present
- [ ] Accessibility audit passed
- [ ] Performance targets met

---

## 🤝 Contributing

This is a proprietary project for SiCost web development services. 

For inquiries, suggestions, or collaboration opportunities, please contact us through:
- Website contact form
- Email: [your-email]
- WhatsApp: [your-number]

---

## 📄 License

© 2025 SiCost. All rights reserved.

This project is proprietary software. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.

---

## 📞 Contact

<div align="center">

**SiCost - Professional Website Services**

🌐 **Website**: [sicost.com](https://sicost.com)  
📱 **WhatsApp**: +62 xxx-xxxx-xxxx  
📧 **Email**: contact@sicost.com  
📍 **Location**: Malang, East Java, Indonesia

[![Instagram](https://img.shields.io/badge/Instagram-@sicost.id-E4405F?style=flat&logo=instagram&logoColor=white)](https://instagram.com/sicost.id)
[![Facebook](https://img.shields.io/badge/Facebook-SiCost_Official-1877F2?style=flat&logo=facebook&logoColor=white)](https://facebook.com/sicostofficial)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-SiCost-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/company/sicost)

</div>

---

## 🙏 Acknowledgments

### Technologies

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Vite](https://vitejs.dev/) - Build tool
- [Framer Motion](https://www.framer.com/motion/) - Animations

### Design Resources

- [Lucide](https://lucide.dev/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Inter font family
- [Unsplash](https://unsplash.com/) - Stock photography
- [unDraw](https://undraw.co/) - Illustrations

---

<div align="center">

**Made with ❤️ in Malang, Indonesia**

⭐ Star this repo if you find it helpful!

</div>
