import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  as?: ElementType
  delay?: number
  id?: string
  style?: CSSProperties
}

export function SectionReveal({ children, className = '', as: Tag = 'div', delay = 0, id, style }: SectionRevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const Component = Tag as ElementType<{
    id?: string
    ref?: typeof ref
    className?: string
    style?: CSSProperties
    children?: ReactNode
  }>

  return (
    <Component
      id={id}
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Component>
  )
}
