type Props = {
  categories: string[]
  category: string
  search: string
  sort: 'recent' | 'az' | 'za'
  onCategoryChange: (v: string) => void
  onSearchChange: (v: string) => void
  onSortChange: (v: 'recent' | 'az' | 'za') => void
}

import { useTranslation } from 'react-i18next'

export default function PortfolioFilters({
  categories,
  category,
  search,
  sort,
  onCategoryChange,
  onSearchChange,
  onSortChange,
}: Props) {
  const { t } = useTranslation('common')
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 md:p-6">
      <div className="grid md:grid-cols-3 gap-4">
        {/* Search */}
        <div>
          <label htmlFor="portfolio-search" className="text-sm font-medium text-slate-700">
            {t('portfolio.filters.searchLabel')}
          </label>
          <input
            id="portfolio-search"
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t('portfolio.filters.searchPlaceholder')}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="portfolio-category" className="text-sm font-medium text-slate-700">
            {t('portfolio.filters.categoryLabel')}
          </label>
          <select
            id="portfolio-category"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          >
            <option value={t('portfolio.filters.all')}>{t('portfolio.filters.all')}</option>
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
            {t('portfolio.filters.sortLabel')}
          </label>
          <select
            id="portfolio-sort"
            value={sort}
            onChange={(e) => onSortChange(e.target.value as 'recent' | 'az' | 'za')}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          >
            <option value="recent">{t('portfolio.filters.recent')}</option>
            <option value="az">{t('portfolio.filters.az')}</option>
            <option value="za">{t('portfolio.filters.za')}</option>
          </select>
        </div>
      </div>
    </div>
  )
}