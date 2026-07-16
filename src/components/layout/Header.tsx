import { useEffect, useState } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { ShimmerButton } from '../common/ShimmerButton'

const NAV_ITEMS = [
  { id: 'home', label: 'ホーム' },
  { id: 'concept', label: 'コンセプト' },
  { id: 'features', label: '特徴' },
  { id: 'founders', label: '創業者' },
  { id: 'contact', label: 'お問い合わせ' },
]

interface HeaderProps {
  onDownloadClick: () => void
}

export function Header({ onDownloadClick }: HeaderProps) {
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id))
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/85 shadow-[0_8px_32px_-16px_rgba(107,70,184,0.25)]' : 'bg-white/70'
      }`}
    >
      <div className="mx-auto max-w-[1360px] px-6 md:px-10 h-[64px] md:h-[76px] flex items-center justify-between">
        <button onClick={() => handleNavClick('home')} className="cursor-pointer shrink-0">
          <img src="/logo.png" alt="AIMUSE" className="h-8 md:h-9 w-auto object-contain" draggable={false} />
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link text-[15px] tracking-wide py-1 cursor-pointer transition-colors ${
                activeId === item.id ? 'is-active text-[var(--aimuse-purple-deep)] font-medium' : 'hover:text-[var(--aimuse-purple)]'
              }`}
            >
              {item.label}
              <span className="nav-link__underline" />
              <span className="nav-link__dot" />
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <ShimmerButton variant="solid" onClick={onDownloadClick} className="text-sm">
            アプリをダウンロード
            <DownloadIcon />
          </ShimmerButton>
        </div>

        <button
          className="md:hidden text-[var(--aimuse-purple-deep)] p-2 cursor-pointer"
          aria-label="メニュー"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 border-t border-white/60 px-6 py-5 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-[15px] py-1 cursor-pointer ${
                activeId === item.id ? 'text-[var(--aimuse-purple-deep)] font-medium' : 'text-[#4a3d70]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <ShimmerButton
            variant="solid"
            onClick={() => {
              setMenuOpen(false)
              onDownloadClick()
            }}
            className="text-sm mt-1 w-full"
          >
            アプリをダウンロード
            <DownloadIcon />
          </ShimmerButton>
        </div>
      )}
    </header>
  )
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
