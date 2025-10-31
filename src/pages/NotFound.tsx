import { Link } from 'react-router-dom'
import { routes } from '@/config/routes'

export default function NotFound() {
  return (
    <section className="container py-20">
      <h2 className="text-2xl md:text-3xl font-semibold">Halaman tidak ditemukan</h2>
      <p className="mt-4 text-slate-700">Halaman yang Anda cari tidak tersedia.</p>
      <Link to={routes.home} className="mt-6 inline-block text-brand-700">
        Kembali ke Beranda
      </Link>
    </section>
  )
}