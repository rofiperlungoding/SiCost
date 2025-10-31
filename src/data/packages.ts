export type ServicePackage = {
  id: string
  titleKey: string
  priceKey: string
  timelineKey: string
  descriptionKey: string
  suitableForKey: string
  suitableListKey: string
  includedKey: string
  includedListKey: string
  notIncludedKey: string
  notIncludedListKey: string
  badge?: string
  popular?: boolean
  icon: string
}

export const servicePackages: ServicePackage[] = [
  {
    id: 'basic',
    titleKey: 'services.packages.basic.title',
    priceKey: 'services.packages.basic.price',
    timelineKey: 'services.packages.basic.timeline',
    descriptionKey: 'services.packages.basic.description',
    suitableForKey: 'services.packages.basic.suitableFor',
    suitableListKey: 'services.packages.basic.suitableList',
    includedKey: 'services.packages.basic.included',
    includedListKey: 'services.packages.basic.includedList',
    notIncludedKey: 'services.packages.basic.notIncluded',
    notIncludedListKey: 'services.packages.basic.notIncludedList',
    icon: 'Zap',
  },
  {
    id: 'standard',
    titleKey: 'services.packages.standard.title',
    priceKey: 'services.packages.standard.price',
    timelineKey: 'services.packages.standard.timeline',
    descriptionKey: 'services.packages.standard.description',
    suitableForKey: 'services.packages.standard.suitableFor',
    suitableListKey: 'services.packages.standard.suitableList',
    includedKey: 'services.packages.standard.included',
    includedListKey: 'services.packages.standard.includedList',
    notIncludedKey: 'services.packages.standard.notIncluded',
    notIncludedListKey: 'services.packages.standard.notIncludedList',
    badge: 'services.packages.standard.badge',
    popular: true,
    icon: 'Star',
  },
  {
    id: 'maintenance',
    titleKey: 'services.packages.maintenance.title',
    priceKey: 'services.packages.maintenance.price',
    timelineKey: 'services.packages.maintenance.timeline',
    descriptionKey: 'services.packages.maintenance.description',
    suitableForKey: 'services.packages.maintenance.suitableFor',
    suitableListKey: 'services.packages.maintenance.suitableList',
    includedKey: 'services.packages.maintenance.included',
    includedListKey: 'services.packages.maintenance.includedList',
    notIncludedKey: 'services.packages.maintenance.notIncluded',
    notIncludedListKey: 'services.packages.maintenance.notIncludedList',
    icon: 'Shield',
  },
  {
    id: 'premium',
    titleKey: 'services.packages.premium.title',
    priceKey: 'services.packages.premium.price',
    timelineKey: 'services.packages.premium.timeline',
    descriptionKey: 'services.packages.premium.description',
    suitableForKey: 'services.packages.premium.suitableFor',
    suitableListKey: 'services.packages.premium.suitableList',
    includedKey: 'services.packages.premium.included',
    includedListKey: 'services.packages.premium.includedList',
    notIncludedKey: 'services.packages.premium.notIncluded',
    notIncludedListKey: 'services.packages.premium.notIncludedList',
    icon: 'Crown',
  },
]

// Keep the old Package type and packages for backward compatibility
export type Package = {
  id: string
  name: string
  price: string
  features: string[]
}

export const packages: Package[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'Rp 3.5jt',
    features: ['Landing page', 'Responsif', 'Integrasi WhatsApp'],
  },
  { id: 'business', name: 'Business', price: 'Rp 6jt', features: ['5 halaman', 'CMS', 'SEO dasar'] },
  { id: 'pro', name: 'Pro', price: 'Rp 10jt', features: ['Custom desain', 'Performa', 'Integrasi lanjutan'] },
]