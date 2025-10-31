import { useTranslation } from 'react-i18next'
import { 
  Zap, 
  Star, 
  Shield, 
  Crown, 
  Check, 
  X, 
  Clock, 
  MessageCircle 
} from 'lucide-react'
import Button from '@/components/ui/Button'
import type { ServicePackage } from '@/data/packages'

type ServiceCardProps = {
  package: ServicePackage
}

const iconMap = {
  Zap,
  Star,
  Shield,
  Crown,
}

export default function ServiceCard({ package: pkg }: ServiceCardProps) {
  const { t } = useTranslation()
  
  const IconComponent = iconMap[pkg.icon as keyof typeof iconMap] || Star
  
  const handleWhatsAppContact = () => {
    const waNumber = import.meta.env.VITE_WA_NUMBER || '628118120070'
    const message = `Halo! Saya tertarik dengan ${t(pkg.titleKey)}. Bisakah kita diskusi lebih lanjut?`
    const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div
      className={`flex flex-col h-full bg-white rounded-2xl p-10 border ${
        pkg.popular 
          ? 'border-brand-600 shadow-md' 
          : 'border-slate-200'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-lg ${
            pkg.popular ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-600'
          }`}>
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              {t(pkg.titleKey)}
            </h3>
            {pkg.badge && (
              <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-brand-50 text-brand-700 rounded-full">
                {t(pkg.badge)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Price and Timeline */}
      <div className="mb-6">
        <div className="text-2xl font-semibold text-brand-700 mb-2">
          {t(pkg.priceKey)}
        </div>
        <div className="flex items-center text-sm text-slate-600">
          <Clock className="w-4 h-4 mr-1" />
          {t(pkg.timelineKey)}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-700 mt-2 mb-6">
        {t(pkg.descriptionKey)}
      </p>

      {/* Suitable For */}
      <div className="mb-6">
        <h4 className="font-semibold text-slate-900 mb-3">
          {t(pkg.suitableForKey)}
        </h4>
        <ul className="space-y-2">
          {(t(pkg.suitableListKey, { returnObjects: true }) as unknown as string[]).map((item: string, index: number) => (
            <li key={index} className="flex items-start text-sm text-slate-700">
              <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* What's Included */}
      <div className="mb-6">
        <h4 className="font-semibold text-slate-900 mb-3">
          {t(pkg.includedKey)}
        </h4>
        <ul className="space-y-2">
          {(t(pkg.includedListKey, { returnObjects: true }) as unknown as string[]).map((item: string, index: number) => (
            <li key={index} className="flex items-start text-sm text-slate-700">
              <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* What's Not Included */}
      <div className="mb-8">
        <h4 className="font-semibold text-slate-900 mb-3">
          {t(pkg.notIncludedKey)}
        </h4>
        <ul className="space-y-2">
          {(t(pkg.notIncludedListKey, { returnObjects: true }) as unknown as string[]).map((item: string, index: number) => (
            <li key={index} className="flex items-start text-sm text-slate-500">
              <X className="w-4 h-4 text-slate-400 mr-2 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Buttons */}
      <div className="mt-auto space-y-3">
        <Button 
          variant="primary"
          className="w-full"
          onClick={handleWhatsAppContact}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          {t('cta.choosePackage')}
        </Button>
        <Button 
          variant="ghost"
          className="w-full"
          onClick={handleWhatsAppContact}
        >
          {t('cta.getStarted')}
        </Button>
      </div>
    </div>
  )
}