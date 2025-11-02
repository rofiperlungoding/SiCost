import Button from '@/components/ui/Button'
import FeatureCard from '@/components/FeatureCard'
import PackageCard from '@/components/PackageCard'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { routes } from '@/config/routes'
import { templateMap, buildWhatsAppLink } from '@/config/whatsapp'
import { Handshake, LifeBuoy, Wallet } from 'lucide-react'
import { motion } from 'framer-motion'
import { portfolio } from '@/data/portfolio'

export default function Home() {
  const { t } = useTranslation('common')

  const waHeroLink = buildWhatsAppLink(t(templateMap.homeHero))
  const waFinalLink = buildWhatsAppLink(t(templateMap.homeFinalCta))

  // Ensure typed arrays for package features (t with returnObjects yields object/unknown)
  const featuresBasic = t('packages.basic.features', { returnObjects: true }) as unknown as string[]
  const featuresStandard = t('packages.standard.features', { returnObjects: true }) as unknown as string[]
  const featuresMaintenance = t('packages.maintenance.features', { returnObjects: true }) as unknown as string[]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">{t('hero.h1')}</h1>
            <p className="mt-4 text-slate-700">{t('hero.sub')}</p>
            <div className="mt-6 flex gap-3">
              <a href={waHeroLink} target="_blank" rel="noopener noreferrer">
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
          {/* Mobile-only decorative block to differentiate layout */}
          <motion.div
            className="md:hidden col-span-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-8 h-40 rounded-xl border border-slate-200 bg-gradient-to-r from-brand-50 to-white flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-brand-100" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-slate-50">
        <div className="container py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">{t('why.title')}</h2>
          <p className="mt-2 text-slate-700">{t('why.subtitle')}</p>
          {/* Desktop grid */}
          <div className="mt-10 hidden md:grid md:grid-cols-3 gap-6">
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
          {/* Mobile horizontal scroll */}
          <div className="mt-10 md:hidden -mx-4 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory inline-flex gap-4">
            <div className="snap-center min-w-[260px]">
              <FeatureCard
                icon={<Handshake size={48} />}
                title={t('why.features.personal.title')}
                desc={t('why.features.personal.desc')}
              />
            </div>
            <div className="snap-center min-w-[260px]">
              <FeatureCard
                icon={<LifeBuoy size={48} />}
                title={t('why.features.support.title')}
                desc={t('why.features.support.desc')}
              />
            </div>
            <div className="snap-center min-w-[260px]">
              <FeatureCard
                icon={<Wallet size={48} />}
                title={t('why.features.price.title')}
                desc={t('why.features.price.desc')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">{t('packages.title')}</h2>
          <p className="mt-2 text-slate-700">{t('packages.subtitle')}</p>
          {/* Desktop grid */}
          <div className="mt-10 hidden md:grid md:grid-cols-3 gap-6">
            <PackageCard
              title={t('packages.basic.title')}
              price={t('packages.basic.price')}
              tagline={t('packages.basic.tagline')}
              features={featuresBasic}
              timeline={t('packages.basic.timeline')}
            />
            <PackageCard
              title={t('packages.standard.title')}
              price={t('packages.standard.price')}
              tagline={t('packages.standard.tagline')}
              features={featuresStandard}
              timeline={t('packages.standard.timeline')}
              popular
            />
            <PackageCard
              title={t('packages.maintenance.title')}
              price={t('packages.maintenance.price')}
              tagline={t('packages.maintenance.tagline')}
              features={featuresMaintenance}
              timeline={t('packages.maintenance.timeline')}
            />
          </div>
          {/* Mobile horizontal scroll */}
          <div className="mt-10 md:hidden -mx-4 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory inline-flex gap-4">
            <div className="snap-center min-w-[85%]">
              <PackageCard
                title={t('packages.standard.title')}
                price={t('packages.standard.price')}
                tagline={t('packages.standard.tagline')}
                features={featuresStandard}
                timeline={t('packages.standard.timeline')}
                popular
              />
            </div>
            <div className="snap-center min-w-[85%]">
              <PackageCard
                title={t('packages.basic.title')}
                price={t('packages.basic.price')}
                tagline={t('packages.basic.tagline')}
                features={featuresBasic}
                timeline={t('packages.basic.timeline')}
              />
            </div>
            <div className="snap-center min-w-[85%]">
              <PackageCard
                title={t('packages.maintenance.title')}
                price={t('packages.maintenance.price')}
                tagline={t('packages.maintenance.tagline')}
                features={featuresMaintenance}
                timeline={t('packages.maintenance.timeline')}
              />
            </div>
          </div>
          <p className="mt-6 text-slate-700">
            {t('home.customPrompt')}{' '}
            <Link to={routes.contact} className="text-brand-700">
              {t('home.contactLink')}
            </Link>{' '}
            {t('home.premiumSuffix')}
          </p>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-slate-50">
        <div className="container py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">{t('portfolio.title')}</h2>
          <p className="mt-2 text-slate-700">{t('portfolio.subtitle')}</p>
          {/* Desktop grid */}
          <div className="mt-8 hidden md:grid md:grid-cols-2 gap-6">
            {portfolio.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 p-6 bg-white">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
          {/* Mobile horizontal scroll */}
          <div className="mt-8 md:hidden -mx-4 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory inline-flex gap-4">
            {portfolio.map((item) => (
              <div key={item.id} className="snap-center min-w-[85%] rounded-xl border border-slate-200 p-6 bg-white">
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
            <a href={waFinalLink} target="_blank" rel="noopener noreferrer">
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