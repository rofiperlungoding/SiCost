import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import FeatureCard from '@/components/FeatureCard'
import Button from '@/components/ui/Button'
import { routes } from '@/config/routes'
import { templateMap, buildWhatsAppLink } from '@/config/whatsapp'
import { Target, ShieldCheck, Sparkles } from 'lucide-react'

export default function About() {
  const { t } = useTranslation('common')

  const values = t('about.values.items', { returnObjects: true }) as { title: string; desc: string }[]
  const steps = t('about.process.steps', { returnObjects: true }) as { title: string; desc: string }[]

  const waLink = buildWhatsAppLink(t(templateMap.aboutFinalCta))

  return (
    <div className="bg-white">
      <Helmet>
        <title>{t('about.seo.title')} | {t('brand')}</title>
        <meta name="description" content={t('about.seo.description')} />
        <meta name="keywords" content={t('about.seo.keywords')} />
        <meta property="og:title" content={`${t('about.seo.title')} | ${t('brand')}`} />
        <meta property="og:description" content={t('about.seo.description')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${window.location.origin}${routes.about}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: t('brand'),
            url: window.location.origin,
            description: t('about.seo.description'),
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section
        aria-labelledby="about-hero-title"
        className="bg-gradient-to-br from-brand-50 to-white text-slate-900"
      >
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <motion.div
              className="md:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 id="about-hero-title" className="text-3xl md:text-5xl font-semibold tracking-tight">
                {t('about.hero.title')}
              </h1>
              <p className="mt-4 text-slate-700 text-base md:text-lg max-w-2xl">
                {t('about.hero.subtitle')}
              </p>
              <div className="mt-6 flex gap-3">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <Button>{t('cta.getStarted')}</Button>
                </a>
              </div>
            </motion.div>
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="h-64 rounded-xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white flex items-center justify-center" aria-hidden="true">
                <div className="w-24 h-24 rounded-full bg-brand-100" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section aria-labelledby="about-who-title" className="bg-white">
        <div className="container py-16 md:py-20">
          <h2 id="about-who-title" className="text-2xl md:text-3xl font-semibold">
            {t('about.who.title')}
          </h2>
          <p className="mt-3 text-slate-700 max-w-3xl">{t('about.who.description')}</p>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="about-values-title" className="bg-slate-50">
        <div className="container py-16 md:py-20">
          <h2 id="about-values-title" className="text-2xl md:text-3xl font-semibold">
            {t('about.values.title')}
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FeatureCard
                key={i}
                icon={i === 0 ? <Target size={48} /> : i === 1 ? <ShieldCheck size={48} /> : <Sparkles size={48} />}
                title={v.title}
                desc={v.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process (interactive details) */}
      <section aria-labelledby="about-process-title" className="bg-white">
        <div className="container py-16 md:py-20">
          <h2 id="about-process-title" className="text-2xl md:text-3xl font-semibold">
            {t('about.process.title')}
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6" role="list">
            {steps.map((s, i) => (
              <details key={i} className="group border border-slate-200 rounded-xl p-5 bg-white" role="listitem">
                <summary className="cursor-pointer font-medium focus:outline-none rounded select-none">
                  {s.title}
                </summary>
                <p className="mt-2 text-slate-700">{s.desc}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-brand-50 to-white">
        <div className="container py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">{t('finalCta.title')}</h2>
          <div className="mt-6 flex gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button>{t('cta.getStarted')}</Button>
            </a>
            <a href={routes.portfolio}>
              <Button variant="ghost">{t('cta.viewPortfolio')}</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}