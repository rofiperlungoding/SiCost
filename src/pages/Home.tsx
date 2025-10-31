import Button from '@/components/ui/Button'
import FeatureCard from '@/components/FeatureCard'
import PackageCard from '@/components/PackageCard'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { routes } from '@/config/routes'
import { Handshake, LifeBuoy, Wallet } from 'lucide-react'
import { motion } from 'framer-motion'
import { portfolio } from '@/data/portfolio'

export default function Home() {
  const { t } = useTranslation('common')

  const waNumber = import.meta.env.VITE_WA_NUMBER || '628118120070'
  const waText = encodeURIComponent('Halo SICOST, saya mau konsultasi website.')
  const waLink = `https://wa.me/${waNumber}?text=${waText}`

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">{t('hero.h1')}</h1>
            <p className="mt-4 text-slate-700">{t('hero.sub')}</p>
            <div className="mt-6 flex gap-3">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <Button>{t('cta.getStarted')}</Button>
              </a>
              <Link to={routes.portfolio}>
                <Button variant="ghost">{t('cta.viewPortfolio')}</Button>
              </Link>
            </div>
          </div>
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-64 rounded-xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-brand-100" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-slate-50">
        <div className="container py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">{t('why.title')}</h2>
          <p className="mt-2 text-slate-700">{t('why.subtitle')}</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Handshake size={48} />}
              title={t('why.features.personal.title')}
              desc={t('why.features.personal.desc')}
            />
            <FeatureCard
              icon={<LifeBuoy size={48} />}
              title={t('why.features.support.title')}
              desc={t('why.features.support.desc')}
            />
            <FeatureCard
              icon={<Wallet size={48} />}
              title={t('why.features.price.title')}
              desc={t('why.features.price.desc')}
            />
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">{t('packages.title')}</h2>
          <p className="mt-2 text-slate-700">{t('packages.subtitle')}</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <PackageCard
              title={t('packages.basic.title')}
              price={t('packages.basic.price')}
              tagline={t('packages.basic.tagline')}
              features={[
                'Landing Page (1 halaman)',
                'Mobile Responsive',
                'Form Kontak',
                'Google Maps',
                '1x Revisi',
                'Panduan Upload',
              ]}
              timeline={t('packages.basic.timeline')}
            />
            <PackageCard
              title={t('packages.standard.title')}
              price={t('packages.standard.price')}
              tagline={t('packages.standard.tagline')}
              features={[
                'Website 3-5 halaman',
                'Mobile Responsive',
                'Form + WhatsApp Button',
                'Google Maps',
                'Basic SEO Setup',
                '2x Revisi',
                'Panduan Upload',
              ]}
              timeline={t('packages.standard.timeline')}
              popular
            />
            <PackageCard
              title={t('packages.maintenance.title')}
              price={t('packages.maintenance.price')}
              tagline={t('packages.maintenance.tagline')}
              features={[
                'Semua fitur Standard',
                'Support 3 bulan',
                'Update konten ringan',
                'Bug fixing',
                'Monitoring',
                'Konsultasi WhatsApp',
              ]}
              timeline={t('packages.maintenance.timeline')}
            />
          </div>
          <p className="mt-6 text-slate-700">
            Butuh website custom atau fitur khusus?{' '}
            <Link to={routes.contact} className="text-brand-700">
              Hubungi Kami
            </Link>{' '}
            untuk Paket Premium
          </p>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-slate-50">
        <div className="container py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">{t('portfolio.title')}</h2>
          <p className="mt-2 text-slate-700">{t('portfolio.subtitle')}</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {portfolio.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 p-6 bg-white">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="container py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">{t('finalCta.title')}</h2>
          <div className="mt-6 flex gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button>{t('cta.getStarted')}</Button>
            </a>
            <Link to={routes.portfolio}>
              <Button variant="ghost">{t('cta.viewPortfolio')}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}