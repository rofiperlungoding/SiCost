export const faqCategories = ['general', 'pricing', 'technical', 'process', 'support'] as const
export type FAQCategory = typeof faqCategories[number]

export type FAQItem = {
  id: string
  category: FAQCategory
  questionKey: string
  answerKey: string
  tags?: string[]
}

export const faqItems: FAQItem[] = [
  // General
  { id: 'g1', category: 'general', questionKey: 'faq.items.general.0.q', answerKey: 'faq.items.general.0.a', tags: ['layanan','umum','website'] },
  { id: 'g2', category: 'general', questionKey: 'faq.items.general.1.q', answerKey: 'faq.items.general.1.a', tags: ['responsif','mobile'] },
  { id: 'g3', category: 'general', questionKey: 'faq.items.general.2.q', answerKey: 'faq.items.general.2.a', tags: ['paket','rekomendasi'] },
  { id: 'g4', category: 'general', questionKey: 'faq.items.general.3.q', answerKey: 'faq.items.general.3.a', tags: ['konten','copywriting'] },
  // Pricing
  { id: 'p1', category: 'pricing', questionKey: 'faq.items.pricing.0.q', answerKey: 'faq.items.pricing.0.a', tags: ['harga','biaya'] },
  { id: 'p2', category: 'pricing', questionKey: 'faq.items.pricing.1.q', answerKey: 'faq.items.pricing.1.a', tags: ['pembayaran','metode'] },
  { id: 'p3', category: 'pricing', questionKey: 'faq.items.pricing.2.q', answerKey: 'faq.items.pricing.2.a', tags: ['biaya','tersembunyi'] },
  { id: 'p4', category: 'pricing', questionKey: 'faq.items.pricing.3.q', answerKey: 'faq.items.pricing.3.a', tags: ['revisi'] },
  // Technical
  { id: 't1', category: 'technical', questionKey: 'faq.items.technical.0.q', answerKey: 'faq.items.technical.0.a', tags: ['cms'] },
  { id: 't2', category: 'technical', questionKey: 'faq.items.technical.1.q', answerKey: 'faq.items.technical.1.a', tags: ['seo'] },
  { id: 't3', category: 'technical', questionKey: 'faq.items.technical.2.q', answerKey: 'faq.items.technical.2.a', tags: ['security','performance'] },
  { id: 't4', category: 'technical', questionKey: 'faq.items.technical.3.q', answerKey: 'faq.items.technical.3.a', tags: ['analytics','tracking'] },
  // Process
  { id: 'pr1', category: 'process', questionKey: 'faq.items.process.0.q', answerKey: 'faq.items.process.0.a', tags: ['timeline','durasi'] },
  { id: 'pr2', category: 'process', questionKey: 'faq.items.process.1.q', answerKey: 'faq.items.process.1.a', tags: ['workflow','alur'] },
  { id: 'pr3', category: 'process', questionKey: 'faq.items.process.2.q', answerKey: 'faq.items.process.2.a', tags: ['persiapan','klien'] },
  { id: 'pr4', category: 'process', questionKey: 'faq.items.process.3.q', answerKey: 'faq.items.process.3.a', tags: ['migrasi','konten'] },
  // Support
  { id: 's1', category: 'support', questionKey: 'faq.items.support.0.q', answerKey: 'faq.items.support.0.a', tags: ['dukungan','pascapeluncuran'] },
  { id: 's2', category: 'support', questionKey: 'faq.items.support.1.q', answerKey: 'faq.items.support.1.a', tags: ['jam','respons'] },
  { id: 's3', category: 'support', questionKey: 'faq.items.support.2.q', answerKey: 'faq.items.support.2.a', tags: ['kontak','support'] },
  { id: 's4', category: 'support', questionKey: 'faq.items.support.3.q', answerKey: 'faq.items.support.3.a', tags: ['sla'] },
]

export const faqLastUpdated = new Date('2025-10-30')