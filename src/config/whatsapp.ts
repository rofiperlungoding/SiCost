export const templateMap = {
  layoutNav: 'whatsapp.message.layoutNav',
  homeHero: 'whatsapp.message.homeHero',
  homeFinalCta: 'whatsapp.message.homeFinalCta',
  servicesFinalGetStarted: 'whatsapp.message.servicesFinalGetStarted',
  servicesFinalContact: 'whatsapp.message.servicesFinalContact',
  servicesCard: 'whatsapp.message.servicesCard',
  portfolioCta: 'whatsapp.message.portfolioCta',
  aboutFinalCta: 'whatsapp.message.aboutFinalCta',
  faqSupport: 'whatsapp.message.faqSupport',
  contactSupport: 'whatsapp.message.contactSupport',
} as const

export type TemplateKey = typeof templateMap[keyof typeof templateMap]

export function buildWhatsAppLink(message: string): string {
  const waNumber = import.meta.env.VITE_WA_NUMBER || '628118120070'
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`
}