import type { ReactNode } from 'react'

type FeatureCardProps = {
  icon: ReactNode
  title: string
  desc: string
}

export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-brand-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-slate-700">{desc}</p>
    </div>
  )
}