import type { ElementType, ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  as?: ElementType
  style?: React.CSSProperties
}

export function GlowCard({ children, className = '', as: Tag = 'div', style }: GlowCardProps) {
  return (
    <Tag className={`glow-card ${className}`} style={style}>
      <div className="relative z-[2]">{children}</div>
    </Tag>
  )
}
