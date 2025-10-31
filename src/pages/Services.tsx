import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, MessageCircle, Users, Target, Lightbulb } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import FeatureCard from '@/components/FeatureCard'
import Button from '@/components/ui/Button'
import { servicePackages } from '@/data/packages'
import { motion } from 'framer-motion'

export default function Services() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState<'all' | 'basic' | 'standard' | 'maintenance' | 'premium'>('all')

  const handleWhatsAppContact = () => {
    const waNumber = import.meta.env.VITE_WA_NUMBER || '628118120070'
    const message = 'Halo! Saya ingin konsultasi tentang layanan pembuatan website. Bisakah kita diskusi?'
    const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <Helmet>
        <title>{t('services.hero.title')} | {t('brand')}</title>
        <meta 
          name="description" 
          content={t('services.hero.subtitle')} 
        />
        <meta 
          name="keywords" 
          content="website development, web design, UMKM website, landing page, e-commerce, maintenance, SEO" 
        />
        <meta property="og:title" content={`${t('services.hero.title')} | ${t('brand')}`} />
        <meta property="og:description" content={t('services.hero.subtitle')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${window.location.origin}/services`} />
        
        {/* Structured Data for Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": t('services.hero.title'),
            "description": t('services.hero.subtitle'),
            "provider": {
              "@type": "Organization",
              "name": t('brand'),
              "url": window.location.origin
            },
            "serviceType": "Website Development",
            "areaServed": "Indonesia",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Website Development Packages",
              "itemListElement": servicePackages.map((pkg, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": t(pkg.titleKey),
                  "description": t(pkg.descriptionKey)
                },
                "price": t(pkg.priceKey),
                "position": index + 1
              }))
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section - light theme consistent with site */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-white text-slate-900">
        <div className="container py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <motion.div
              className="md:col-span-6 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-xl mx-auto md:mx-0">
                {t('services.hero.title')}
              </h1>
              <p className="mt-5 text-slate-700 text-base md:text-lg max-w-xl mx-auto md:mx-0">
                {t('services.hero.subtitle')}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button aria-label="Mulai Konsultasi" className="w-full sm:w-auto" onClick={handleWhatsAppContact}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t('cta.getStarted')}
                </Button>
                <Button 
                  aria-label="Lihat Portfolio"
                  variant="ghost"
                  className="w-full sm:w-auto"
                  onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('cta.viewPortfolio')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="md:col-span-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="h-36 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm" />
                <div className="h-36 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm" />
                <div className="h-36 col-span-2 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section - zigzag timeline layout */}
      <section className="bg-slate-50">
        <div className="container py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">{t('services.intro.title')}</h2>
          <p className="mt-2 text-slate-700">{t('services.intro.description')}</p>
          <div className="relative mt-12">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-slate-200" aria-hidden="true" />
            <div className="space-y-10">
              <div className="md:grid md:grid-cols-2 md:gap-10">
                <motion.div className="md:pr-12" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <FeatureCard icon={<Users size={48} />} title="Komunikasi Personal" desc="Diskusi langsung dengan founder untuk memahami visi bisnis Anda secara mendalam" />
                </motion.div>
                <div className="hidden md:block" />
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-10">
                <div className="hidden md:block" />
                <motion.div className="md:pl-12" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <FeatureCard icon={<Target size={48} />} title="Solusi Tepat Sasaran" desc="Paket yang disesuaikan dengan kebutuhan spesifik dan budget bisnis Anda" />
                </motion.div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-10">
                <motion.div className="md:pr-12" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <FeatureCard icon={<Lightbulb size={48} />} title="Inovasi Berkelanjutan" desc="Menggunakan teknologi terkini dan best practices untuk hasil optimal" />
                </motion.div>
                <div className="hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages Section - dynamic with filters & animation */}
      <section id="packages" className="relative bg-white">
        <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-brand-50/60 to-transparent" aria-hidden="true" />
        <div className="container py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold">{t('packages.title')}</h2>
          <p className="mt-2 text-slate-700">{t('packages.subtitle')}</p>

          {/* Filters */}
          <div className="mt-6 flex flex-wrap gap-3">
            {(['all','basic','standard','maintenance','premium'] as const).map((key) => (
              <Button
                key={key}
                variant={activeFilter === key ? 'primary' : 'ghost'}
                className={(activeFilter === key ? '' : 'bg-transparent') + ' rounded-full'}
                aria-pressed={activeFilter === key}
                onClick={() => setActiveFilter(key)}
              >
                {key === 'all' ? (t('common:filters.all') || 'Semua') : t(`packages.${key}.title`)}
              </Button>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-7xl mx-auto auto-rows-fr items-stretch">
            {servicePackages
              .filter((pkg) => activeFilter === 'all' || pkg.id === activeFilter)
              .map((pkg, idx) => (
                <motion.div 
                  className="h-full"
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <ServiceCard package={pkg} />
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - bold gradient card */}
      <section className="bg-gradient-to-br from-brand-50 to-white">
        <div className="container py-16 md:py-24">
          <div className="rounded-2xl p-10 md:p-12 bg-gradient-to-tr from-brand-600 to-brand-700 text-white shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold">{t('finalCta.title')}</h2>
            <p className="mt-2 text-brand-100">{t('services.hero.subtitle')}</p>
            <div className="mt-6 flex gap-3">
              <Button variant="secondary" className="bg-white hover:bg-slate-100" onClick={handleWhatsAppContact}>{t('cta.getStarted')}</Button>
              <Button variant="ghost" className="text-white hover:bg-white/10" onClick={handleWhatsAppContact}>{t('cta.contactUs')}</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}