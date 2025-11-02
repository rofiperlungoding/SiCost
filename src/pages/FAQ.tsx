import { useMemo, useState, useEffect, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { faqItems, faqCategories, type FAQCategory, faqLastUpdated } from '@/data/faq'
import { routes } from '@/config/routes'
import { templateMap, buildWhatsAppLink } from '@/config/whatsapp'
import Button from '@/components/ui/Button'
import { Search, Info, Wallet, Settings, ListChecks, LifeBuoy } from 'lucide-react'

const categoryIcons: Record<FAQCategory, ReactNode> = {
  general: <Info size={20} />, pricing: <Wallet size={20} />, technical: <Settings size={20} />, process: <ListChecks size={20} />, support: <LifeBuoy size={20} />,
}

function pushAnalytics(event: string, payload?: Record<string, unknown>) {
  const w = window as any
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event, ...payload })
}

export default function FAQ() {
  const { t } = useTranslation('common')
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<FAQCategory | 'all'>('all')

  const waLink = buildWhatsAppLink(t(templateMap.faqSupport))

  useEffect(() => {
    pushAnalytics('page_view', { page: 'faq' })
  }, [])

  const items = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return faqItems.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) return false
      if (!normalized) return true
      const q = t(item.questionKey).toLowerCase()
      const a = t(item.answerKey).toLowerCase()
      const tags = (item.tags || []).join(' ').toLowerCase()
      return q.includes(normalized) || a.includes(normalized) || tags.includes(normalized)
    })
  }, [query, activeCategory, t])

  const structuredData = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.slice(0, 15).map((item) => ({
        '@type': 'Question',
        name: t(item.questionKey),
        acceptedAnswer: { '@type': 'Answer', text: t(item.answerKey) },
      })),
    }
  }, [t])

  return (
    <div className="bg-white">
      <Helmet>
        <title>{t('faq.seo.title')} | {t('brand')}</title>
        <meta name="description" content={t('faq.seo.description')} />
        <meta name="keywords" content={t('faq.seo.keywords')} />
        <meta property="og:title" content={`${t('faq.seo.title')} | ${t('brand')}`} />
        <meta property="og:description" content={t('faq.seo.description')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${window.location.origin}${routes.faq}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Hero & Search */}
      <section className="bg-gradient-to-br from-brand-50 to-white">
        <div className="container py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{t('faq.title')}</h1>
          <p className="mt-3 text-slate-700 max-w-3xl">{t('faq.subtitle')}</p>
          <div className="mt-6 flex flex-col md:flex-row gap-3">
            <div className="relative md:flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="search"
                aria-label="Search FAQs"
                placeholder={t('faq.search.placeholder')}
                className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-500"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  pushAnalytics('faq_search', { query: e.target.value })
                }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {(['all', ...faqCategories] as const).map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? 'primary' : 'ghost'}
                  className={(activeCategory === cat ? '' : 'bg-transparent') + ' rounded-full'}
                  aria-pressed={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === 'all' ? t('faq.categories.all') : (
                    <span className="inline-flex items-center gap-2">
                      {categoryIcons[cat]}
                      {t(`faq.categories.${cat}`)}
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-500">{t('faq.lastUpdated', { date: faqLastUpdated.toLocaleDateString() })}</p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-white">
        <div className="container py-12 md:py-16">
          {items.length === 0 ? (
            <p className="text-slate-700">{t('faq.noResults')}</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6" role="list">
              {items.map((item) => (
                <details
                  key={item.id}
                  className="group border border-slate-200 rounded-xl p-5 bg-white"
                  role="listitem"
                  onToggle={(e) => pushAnalytics('faq_toggle_item', { id: item.id, open: (e.target as HTMLDetailsElement).open })}
                >
                  <summary className="cursor-pointer font-medium focus:outline-none rounded select-none">
                    {t(item.questionKey)}
                  </summary>
                  <p className="mt-2 text-slate-700">{t(item.answerKey)}</p>
                </details>
              ))}
            </div>
          )}

          {/* Contact Support */}
          <div className="mt-10 rounded-2xl p-6 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">{t('faq.contactPrompt')}</h2>
              <p className="text-slate-700">{t('services.hero.subtitle')}</p>
            </div>
            <div className="flex gap-3">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <Button>{t('faq.contactLinkText')}</Button>
              </a>
              <a href={routes.contact}>
                <Button variant="ghost">{t('cta.contactUs')}</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}