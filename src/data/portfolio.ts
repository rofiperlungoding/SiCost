export type PortfolioItem = {
  id: string
  title: string
  description: string
  href?: string
}

export const portfolio: PortfolioItem[] = [
  { 
    id: 'p1', 
    title: 'Website UMKM',
    description: 'Sederhana, cepat, fokus konversi.'
  },
  { 
    id: 'p2', 
    title: 'Landing Page Kampanye',
    description: 'Desain modern untuk campaign digital.'
  },
]