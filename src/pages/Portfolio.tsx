import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { routes } from '@/config/routes'
import { portfolio as data } from '@/data/portfolio'
import PortfolioCard from '@/components/PortfolioCard'
import Button from '@/components/ui/Button'
import { templateMap, buildWhatsAppLink } from '@/config/whatsapp'

export default function Portfolio() {
  const { t } = useTranslation('common')

  // Showcase penuh: tampilkan semua proyek terbaru terlebih dahulu
  const showcase = useMemo(() => {
    return [...data].sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
  }, [])

  const waLink = buildWhatsAppLink(t(templateMap.portfolioCta))

  return (
    <section className="container py-16 md:py-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">{t('portfolio.title')}</h2>
          <p className="mt-2 text-slate-700">{t('portfolio.subtitle')}</p>
        </div>
      </div>

      {/* Showcase Grid */}
      <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {showcase.map((p) => (
          <PortfolioCard key={p.id} project={p} />
        ))}
      </div>

      {/* CTA di bagian bawah (tengah) */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-center">
        <a href={waLink} target="_blank" rel="noopener noreferrer">
          <Button>{t('cta.getStarted')}</Button>
        </a>
        <a
          href={routes.contact}
          className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium border border-slate-300 text-brand-700"
        >
          {t('cta.contactUs')}
        </a>
      </div>
    </section>
  )
}