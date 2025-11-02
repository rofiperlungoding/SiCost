import { NavLink, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { routes } from '@/config/routes'
import Button from '@/components/ui/Button'
import { templateMap, buildWhatsAppLink } from '@/config/whatsapp'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import MobileNav from '@/components/MobileNav'

export default function Layout() {
  const { t, i18n } = useTranslation('common')

  const waLink = buildWhatsAppLink(t(templateMap.layoutNav))

  const currentLng = i18n.language || 'id'
  const toggleLanguage = () => {
    const next = currentLng === 'id' ? 'en' : 'id'
    i18n.changeLanguage(next)
    document.documentElement.lang = next
    try {
      localStorage.setItem('locale', next)
    } catch {}
  }

  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `inline-flex items-center px-3 py-2 rounded-md text-sm font-medium min-h-[48px] ${
      isActive ? 'text-brand-700' : 'text-slate-600 hover:text-slate-900'
    }`

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="container flex items-center justify-between h-16">
          <div className="font-semibold text-brand-700">{t('brand')}</div>
          <nav className="hidden md:flex items-center gap-2 -mx-2 px-2">
            <NavLink to={routes.home} className={linkClass}>
              {t('nav.home')}
            </NavLink>
            <NavLink to={routes.services} className={linkClass}>
              {t('nav.services')}
            </NavLink>
            <NavLink to={routes.portfolio} className={linkClass}>
              {t('nav.portfolio')}
            </NavLink>
            <NavLink to={routes.about} className={linkClass}>
              {t('nav.about')}
            </NavLink>
            <NavLink to={routes.faq} className={linkClass}>
              {t('nav.faq')}
            </NavLink>
            <NavLink to={routes.contact} className={linkClass}>
              {t('nav.contact')}
            </NavLink>
            <span className="mx-2 text-slate-300">|</span>
            <button
              aria-label={t('aria.toggleLanguage')}
              onClick={toggleLanguage}
              className="px-3 py-2 text-sm rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 min-h-[48px] min-w-[48px]"
            >
              {currentLng === 'id' ? t('lang.idShort') : t('lang.enShort')}
            </button>
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button className="ml-2">{t('cta.getStarted')}</Button>
            </a>
          </nav>
          {/* Hamburger trigger mobile */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 min-h-[48px] min-w-[48px] text-slate-700 hover:bg-slate-50"
            aria-label={t('nav.menu') || 'Buka menu'}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>
      {/* Mobile navigation panel */}
      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onToggleLanguage={toggleLanguage}
        currentLng={currentLng}
      />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t bg-white">
        <div className="container py-6 text-sm text-slate-600">
          {t('footer.rights', { year: new Date().getFullYear() })}
        </div>
      </footer>
    </div>
  )
}