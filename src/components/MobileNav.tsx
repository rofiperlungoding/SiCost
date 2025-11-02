import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { routes } from '@/config/routes'
import Button from '@/components/ui/Button'
import { templateMap, buildWhatsAppLink } from '@/config/whatsapp'
import { X } from 'lucide-react'

type MobileNavProps = {
  open: boolean
  onClose: () => void
  onToggleLanguage: () => void
  currentLng: string
}

export default function MobileNav({ open, onClose, onToggleLanguage, currentLng }: MobileNavProps) {
  const { t } = useTranslation('common')
  const waLink = buildWhatsAppLink(t(templateMap.layoutNav))

  return (
    <div
      aria-hidden={!open}
      className={
        `fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`
      }
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white border-l border-slate-200 shadow-xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label={t('nav.menu') || 'Menu'}
      >
        <div className="flex items-center justify-between h-14 px-4 border-b">
          <div className="font-semibold text-brand-700">{t('brand')}</div>
          <button
            aria-label={t('aria.close') || 'Tutup'}
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md p-2 min-h-[48px] min-w-[48px] text-slate-700 hover:bg-slate-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { to: routes.home, label: t('nav.home') },
            { to: routes.services, label: t('nav.services') },
            { to: routes.portfolio, label: t('nav.portfolio') },
            { to: routes.about, label: t('nav.about') },
            { to: routes.faq, label: t('nav.faq') },
            { to: routes.contact, label: t('nav.contact') },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-md text-base font-medium ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-50'}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="flex items-center gap-2 pt-4">
            <button
              aria-label={t('aria.toggleLanguage')}
              onClick={() => { onToggleLanguage(); onClose(); }}
              className="px-3 py-2 text-sm rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 min-h-[48px] min-w-[48px]"
            >
              {currentLng === 'id' ? t('lang.idShort') : t('lang.enShort')}
            </button>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full">{t('cta.getStarted')}</Button>
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}