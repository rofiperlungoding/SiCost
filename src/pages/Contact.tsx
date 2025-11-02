import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@/components/ui/Button'
import { routes } from '@/config/routes'
import { templateMap, buildWhatsAppLink } from '@/config/whatsapp'
import { ChevronDown } from 'lucide-react'

type FormData = {
  name: string
  email: string
  whatsapp: string
  package?: string
  message: string
}

function pushAnalytics(event: string, payload?: Record<string, unknown>) {
  const w = window as any
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event, ...payload })
}

export default function Contact() {
  const { t } = useTranslation('common')

  const waNumber = import.meta.env.VITE_WA_NUMBER || '628118120070'
  const emailAddr = import.meta.env.VITE_EMAIL || 'rofi.darmawan@outlook.com'
  const waLink = buildWhatsAppLink(t(templateMap.contactSupport))

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t('contact.form.validation.nameMin')),
        email: z.string().email(t('contact.form.validation.emailInvalid')),
        whatsapp: z
          .string()
          .min(10, t('contact.form.validation.whatsappInvalid'))
          .regex(/^\d+$/, t('contact.form.validation.whatsappInvalid')),
        package: z.string().optional(),
        message: z.string().min(20, t('contact.form.validation.messageMin')),
      }),
    [t]
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit = async (data: FormData) => {
    pushAnalytics('contact_submit', { source: 'form', name: data.name, email: data.email, whatsapp: data.whatsapp, package: data.package ?? '' })
    try {
      const subject = `${t('brand')} Contact - ${data.name}`
      const body = `Nama: ${data.name}\nEmail: ${data.email}\nWhatsApp: ${data.whatsapp}\nPaket: ${data.package || '-'}\n\nPesan:\n${data.message}`
      const mailtoUrl = `mailto:${emailAddr}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoUrl
      setStatus('success')
      reset()
    } catch (e) {
      setStatus('error')
      pushAnalytics('contact_error', { message: (e as Error)?.message })
    }
  }

  const contactStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Organization',
      name: t('brand'),
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: `+${waNumber}`,
        email: emailAddr,
        availableLanguage: ['id', 'en'],
      },
    },
  }

  return (
    <div className="bg-white">
      <Helmet>
        <title>{t('contact.seo.title')} | {t('brand')}</title>
        <meta name="description" content={t('contact.seo.description')} />
        <meta name="keywords" content={t('contact.seo.keywords')} />
        <meta property="og:title" content={`${t('contact.seo.title')} | ${t('brand')}`} />
        <meta property="og:description" content={t('contact.seo.description')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${window.location.origin}${routes.contact}`} />
        <script type="application/ld+json">{JSON.stringify(contactStructuredData)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white">
        <div className="container py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{t('contact.hero.title')}</h1>
          <p className="mt-3 text-slate-700 max-w-3xl">{t('contact.hero.subtitle')}</p>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="bg-white">
        <div className="container py-12 md:py-16 grid md:grid-cols-3 gap-8">
          {/* Methods */}
          <aside className="md:col-span-1 space-y-4">
            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200">
              <h2 className="text-lg font-semibold">{t('contact.support.title')}</h2>
              <p className="text-slate-700">{t('contact.support.description')}</p>
              <div className="mt-4 flex flex-col gap-3">
                <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => pushAnalytics('contact_whatsapp_click')}> 
                  <Button>{t('contact.support.waButton')}</Button>
                </a>
                <a href={`mailto:${emailAddr}`}>
                  <Button variant="ghost">{t('contact.support.emailButton')}</Button>
                </a>
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200">
              <h3 className="font-medium">{t('contact.methods.hours')}</h3>
              <p className="text-slate-700">{t('contact.methods.hoursValue')}</p>
              <p className="mt-2 text-slate-700"><span className="font-medium">{t('contact.methods.whatsapp')}:</span> +{waNumber}</p>
              <p className="text-slate-700"><span className="font-medium">{t('contact.methods.email')}:</span> {emailAddr}</p>
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl p-6 bg-white border border-slate-200">
              <h2 className="text-lg font-semibold">{t('contact.form.title')}</h2>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">{t('contact.form.name.label')}</label>
                  <input {...register('name')} type="text" placeholder={t('contact.form.name.placeholder')} className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-500" />
                  {errors.name && <p className="mt-1 text-sm text-red-600" role="alert">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium">{t('contact.form.email.label')}</label>
                  <input {...register('email')} type="email" placeholder={t('contact.form.email.placeholder')} className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-500" />
                  {errors.email && <p className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium">{t('contact.form.whatsapp.label')}</label>
                  <input {...register('whatsapp')} type="tel" placeholder={t('contact.form.whatsapp.placeholder')} className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-500" />
                  {errors.whatsapp && <p className="mt-1 text-sm text-red-600" role="alert">{errors.whatsapp.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium">{t('contact.form.package.label')}</label>
                  <div className="relative">
                    <select
                      {...register('package')}
                      className="mt-1 w-full appearance-none pr-10 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white"
                    >
                      <option value="">{t('contact.form.package.placeholder')}</option>
                      <option value="basic">Basic</option>
                      <option value="standard">Standard</option>
                      <option value="maintenance">Standard + Maintenance</option>
                      <option value="premium">Premium</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium">{t('contact.form.message.label')}</label>
                <textarea {...register('message')} rows={5} placeholder={t('contact.form.message.placeholder')} className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-500" />
                {errors.message && <p className="mt-1 text-sm text-red-600" role="alert">{errors.message.message}</p>}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Button type="submit" disabled={isSubmitting}>{isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}</Button>
                <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => pushAnalytics('contact_whatsapp_click')}>
                  <Button variant="ghost">{t('contact.support.waButton')}</Button>
                </a>
              </div>

              <div className="mt-4" aria-live="polite">
                {status === 'success' && <p className="text-green-700">{t('contact.form.success')}</p>}
                {status === 'error' && <p className="text-red-700">{t('contact.form.error')}</p>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}