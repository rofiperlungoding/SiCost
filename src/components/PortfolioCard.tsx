import type { PortfolioProject } from '@/data/portfolio'

type Props = {
  project: PortfolioProject
}

export default function PortfolioCard({ project }: Props) {
  // Buat deskripsi singkat (1 kalimat atau maksimal ~140 karakter)
  const shortDescription = (() => {
    const max = 140
    const text = project.description.trim()
    const firstSentence = text.split(/\.(\s|$)/)[0].trim()
    if (firstSentence && firstSentence.length <= max) {
      return firstSentence + (text.length > firstSentence.length ? '…' : '')
    }
    return text.length > max ? text.slice(0, max) + '…' : text
  })()

  return (
    <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Visual preview */}
      <div className="bg-slate-50 pt-4 px-4 pb-2">
        <div className="aspect-[16/9] w-full rounded-xl overflow-hidden">
          <img
            src={project.previewImage}
            alt={`Preview ${project.title}`}
            loading="lazy"
            className="h-full w-full object-contain rounded-xl"
          />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <span className="mt-1 inline-block text-xs px-2 py-1 rounded bg-brand-50 text-brand-700">
              {project.category}
            </span>
          </div>
          <span className="text-xs text-slate-500">Diperbarui: {project.updatedAt}</span>
        </div>

        {/* Description (ringkas) */}
        <p className="mt-3 text-slate-700">{shortDescription}</p>

        {/* Features & Tech */}
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-semibold">Fitur Utama</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {project.features.slice(0, 2).map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Teknologi</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((t, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded border border-slate-200 text-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action: GitHub Button (selalu di bawah & simetris) */}
        <div className="mt-auto pt-4 flex items-center justify-center">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Kunjungi repositori GitHub: ${project.title}`}
            className="group inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm font-medium
                       bg-gradient-to-r from-black via-black to-violet-700 !text-white hover:!text-white shadow-sm
                       hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]
                       transition-all duration-200 ease-out
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <img
              src="https://cdn.simpleicons.org/github/ffffff"
              alt=""
              aria-hidden="true"
              className="h-4 w-4 opacity-95 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
            />
            <span className="select-none">Lihat di GitHub</span>
          </a>
        </div>
      </div>
    </article>
  )
}