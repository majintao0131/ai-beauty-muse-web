import { useEffect, useState, type ReactNode } from 'react'

interface ModalOverlayProps {
  open: boolean
  onClose: () => void
  children: ReactNode
}

export function ModalOverlay({ open, onClose, children }: ModalOverlayProps) {
  const [mounted, setMounted] = useState(open)

  useEffect(() => {
    if (open) {
      const timer = window.setTimeout(() => setMounted(true), 0)
      return () => window.clearTimeout(timer)
    }
    const timer = window.setTimeout(() => setMounted(false), 420)
    return () => window.clearTimeout(timer)
  }, [open])

  useEffect(() => {
    if (!mounted) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mounted])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!mounted) return null

  return (
    <div
      className={`modal-overlay ${open ? 'is-open' : ''}`}
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal-panel" role="dialog" aria-modal="true">
        {children}
      </div>
    </div>
  )
}
