import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'solid' | 'outline'
  className?: string
}

export function ShimmerButton({ children, variant = 'solid', className = '', ...rest }: ShimmerButtonProps) {
  return (
    <button
      className={`shimmer-btn shimmer-btn--${variant} px-7 py-3.5 text-sm font-medium tracking-wide cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
