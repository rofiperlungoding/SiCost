export type PortfolioProject = {
  id: string
  title: string
  description: string
  href: string
  websiteUrl?: string
  category: 'Education' | 'Data Science' | 'Finance' | 'News/API' | 'Personal'
  technologies: string[]
  features: string[]
  previewImage: string
  updatedAt: string
  linked: boolean
}

// Sumber deskripsi & teknologi diambil dari repositori publik masing-masing.
// Preview menggunakan OpenGraph image GitHub agar ringan dan selalu up to date.
export const portfolio: PortfolioProject[] = [
  {
    id: 'mathlabrofi',
    title: "Rofi's Mathlab",
    description:
      'Platform belajar matematika interaktif dengan solusi langkah demi langkah dan visualisasi konsep.',
    href: 'https://github.com/rofiperlungoding/mathlabrofi',
    websiteUrl: 'https://rofimath.netlify.app/',
    category: 'Education',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'KaTeX', 'MathJS', 'Algebrite', 'Plotly.js', 'Lucide React'],
    features: [
      'Learning paths interaktif untuk Algebra, Geometri, Kalkulus',
      'Referensi formula lengkap dengan penjelasan',
      'Latihan terarah dengan umpan balik instan',
      '20+ aplikasi matematika interaktif (grafing, derivatif, vektor, fractal, dsb.)',
    ],
    previewImage: 'https://opengraph.githubassets.com/1/rofiperlungoding/mathlabrofi',
    updatedAt: '2025-06-08',
    linked: true,
  },
  {
    id: 'statisticlabrofi',
    title: "Rofi's StatisticLab",
    description:
      'Suite analisis statistik produksi dengan 16 aplikasi profesional untuk riset dan edukasi.',
    href: 'https://github.com/rofiperlungoding/statisticlabrofi',
    websiteUrl: 'https://statisticslabrofi.netlify.app/',
    category: 'Data Science',
    technologies: ['React 18.3.1', 'TypeScript 5.5', 'Vite', 'Tailwind CSS', 'Recharts', 'D3', 'Papa Parse', 'Lodash'],
    features: [
      'Descriptive stats, ANOVA, chi-square, t-test, regresi',
      'CSV explorer, ekspor hasil (CSV/PDF/JSON)',
      'Visualisasi interaktif dengan chart komprehensif',
      'Dark mode dan desain responsif',
    ],
    previewImage: 'https://opengraph.githubassets.com/1/rofiperlungoding/statisticlabrofi',
    updatedAt: '2025-06-08',
    linked: true,
  },
  {
    id: 'moneytrackrrofi',
    title: 'MoneyTrackr',
    description:
      'Aplikasi personal finance modern dengan analitik canggih, multi‑currency, dan autentikasi aman.',
    href: 'https://github.com/rofiperlungoding/moneytrackrrofi',
    websiteUrl: 'https://moneytrackrrofi.netlify.app/',
    category: 'Finance',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Supabase', 'Recharts', 'Vite'],
    features: [
      'Tracking pengeluaran/pemasukan, budget & goal',
      'Autentikasi Supabase dengan 2FA',
      'Dashboard analytics dengan chart interaktif',
      'Dark theme sinematik dan animasi halus',
    ],
    previewImage: 'https://opengraph.githubassets.com/1/rofiperlungoding/moneytrackrrofi',
    updatedAt: '2025-06-08',
    linked: true,
  },
  {
    id: 'rivex',
    title: 'Rivex',
    description:
      'Proyek berita Indonesia dengan integrasi detiknews_api dan update real‑time.',
    href: 'https://github.com/rofiperlungoding/rivex',
    websiteUrl: 'https://rivex.space/',
    category: 'News/API',
    technologies: ['React', 'WebSocket', 'Node.js', 'Express', 'detiknews_api'],
    features: [
      'Integrasi API berita Indonesia',
      'Update live via WebSocket',
      'Arsitektur frontend + server sederhana',
    ],
    previewImage: 'https://opengraph.githubassets.com/1/rofiperlungoding/rivex',
    updatedAt: '2025-06-08',
    linked: true,
  },
  {
    id: 'cvandriesatria',
    title: 'CV & Portfolio – Andrie Satria',
    description:
      'Situs CV/Portfolio pribadi dengan showcase proyek, pengalaman, dan kontak.',
    href: 'https://github.com/rofiperlungoding/cvandriesatria',
    websiteUrl: 'https://cvaspu.com/',
    category: 'Personal',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    features: [
      'Resume & timeline pengalaman',
      'Grid portfolio dengan link eksternal',
      'Form kontak dan navigasi jelas',
    ],
    previewImage: 'https://opengraph.githubassets.com/1/rofiperlungoding/cvandriesatria',
    updatedAt: '2024-12-31',
    linked: true,
  },
]