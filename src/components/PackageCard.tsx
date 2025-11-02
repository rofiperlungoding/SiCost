import Button from '@/components/ui/Button'
import { useTranslation } from 'react-i18next'

type PackageCardProps = {
  title: string
  price: string
  tagline: string
  features: string[]
  timeline: string
  popular?: boolean
}

export default function PackageCard({ title, price, tagline, features, timeline, popular }: PackageCardProps) {
  const { t } = useTranslation('common')
  return (
    <div
      className={`bg-white rounded-2xl p-10 border ${
        popular ? 'border-brand-600 shadow-md' : 'border-slate-200'
      }`}
    >
      {popular && (
        <div className="text-xs px-2 py-1 bg-brand-50 text-brand-700 inline-block rounded mb-4">
          {t('packages.standard.badge')}
        </div>
      )}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-slate-700">{tagline}</p>
      <div className="mt-4 text-2xl font-semibold text-brand-700">{price}</div>
      <ul className="mt-6 space-y-2 text-slate-700">
        {features.map((f, i) => (
          <li key={i}>✓ {f}</li>
        ))}
      </ul>
      <div className="mt-4 text-sm text-slate-600">{timeline}</div>
      <div className="mt-6">
        <Button variant={popular ? 'primary' : 'ghost'}>{t('cta.choosePackage')}</Button>
      </div>
    </div>
  )
}