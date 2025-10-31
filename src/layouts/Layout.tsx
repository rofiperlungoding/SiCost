import { NavLink, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { routes } from '@/config/routes'
import Button from '@/components/ui/Button'

export default function Layout() {
  const { t, i18n } = useTranslation('common')

  const waNumber = import.meta.env.VITE_WA_NUMBER || '628118120070'
  const waText = encodeURIComponent('Halo SICOST, saya mau konsultasi website.')
  const waLink = `https://wa.me/${waNumber}?text=${waText}`

  const currentLng = i18n.language || 'id'
  const toggleLanguage = () => {
    const next = currentLng === 'id' ? 'en' : 'id'
    i18n.changeLanguage(next)
    document.documentElement.lang = next
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? 'text-brand-700' : 'text-slate-600 hover:text-slate-900'
    }`

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="container flex items-center justify-between h-16">
          <div className="font-semibold text-brand-700">{t('brand')}</div>
          <nav className="flex items-center gap-2">
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
              aria-label="Toggle language"
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              {currentLng === 'id' ? 'ID' : 'EN'}
            </button>
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button className="ml-2">{t('cta.getStarted')}</Button>
            </a>
          </nav>
        </div>
      </header>
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