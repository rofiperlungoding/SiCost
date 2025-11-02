import { Link } from 'react-router-dom'
import { routes } from '@/config/routes'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation('common')
  return (
    <section className="container py-20">
      <h2 className="text-2xl md:text-3xl font-semibold">{t('notFound.title')}</h2>
      <p className="mt-4 text-slate-700">{t('notFound.description')}</p>
      <Link to={routes.home} className="mt-6 inline-block text-brand-700">
        {t('notFound.back')}
      </Link>
    </section>
  )
}