type Props = {
  categories: string[]
  category: string
  search: string
  sort: 'recent' | 'az' | 'za'
  onCategoryChange: (v: string) => void
  onSearchChange: (v: string) => void
  onSortChange: (v: 'recent' | 'az' | 'za') => void
}

export default function PortfolioFilters({
  categories,
  category,
  search,
  sort,
  onCategoryChange,
  onSearchChange,
  onSortChange,
}: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 md:p-6">
      <div className="grid md:grid-cols-3 gap-4">
        {/* Search */}
        <div>
          <label htmlFor="portfolio-search" className="text-sm font-medium text-slate-700">
            Cari proyek
          </label>
          <input
            id="portfolio-search"
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Ketik judul/fitur/teknologi"
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="portfolio-category" className="text-sm font-medium text-slate-700">
            Kategori
          </label>
          <select
            id="portfolio-category"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          >
            <option value="Semua">Semua</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label htmlFor="portfolio-sort" className="text-sm font-medium text-slate-700">
            Urutkan
          </label>
          <select
            id="portfolio-sort"
            value={sort}
            onChange={(e) => onSortChange(e.target.value as 'recent' | 'az' | 'za')}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          >
            <option value="recent">Terbaru</option>
            <option value="az">Nama A-Z</option>
            <option value="za">Nama Z-A</option>
          </select>
        </div>
      </div>
    </div>
  )
}