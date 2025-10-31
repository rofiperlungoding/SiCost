import { Route, Routes } from 'react-router-dom'
import Layout from '@/layouts/Layout'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import Portfolio from '@/pages/Portfolio'
import About from '@/pages/About'
import FAQ from '@/pages/FAQ'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'
import { routes } from '@/config/routes'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={routes.home} element={<Home />} />
        {/* Alias route to access Services page via /services in addition to /layanan */}
        <Route path="/services" element={<Services />} />
        <Route path={routes.services} element={<Services />} />
        <Route path={routes.portfolio} element={<Portfolio />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.faq} element={<FAQ />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
