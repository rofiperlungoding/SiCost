import type { ButtonHTMLAttributes } from 'react'
import { clsx } from 'clsx'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function Button({ variant = 'primary', className, ...rest }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium'
  const styles = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700',
    secondary:
      'bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-300',
    ghost: 'bg-transparent text-brand-700 hover:bg-brand-50',
  }

  return <button className={clsx(base, styles[variant], className)} {...rest} />
}