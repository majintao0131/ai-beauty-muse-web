import kaka from '../assets/images/kaka-transparent.webp'
import { ModalOverlay } from './common/ModalOverlay'

interface DownloadModalProps {
  open: boolean
  onClose: () => void
}

export function DownloadModal({ open, onClose }: DownloadModalProps) {
  return (
    <ModalOverlay open={open} onClose={onClose}>
      <div className="relative w-[92vw] max-w-[860px] rounded-[1.75rem] overflow-hidden bg-white/95 backdrop-blur-2xl shadow-[0_40px_100px_-30px_rgba(36,17,65,0.55)] ring-1 ring-white/70 grid md:grid-cols-[1.15fr_0.85fr]">
        <button
          onClick={onClose}
          aria-label="閉じる"
          className="absolute right-4 top-4 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur grid place-items-center text-[var(--aimuse-purple-deep)] ring-1 ring-white/70 hover:bg-white transition-colors cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <div className="px-8 py-10 md:px-10 md:py-12 flex flex-col items-center justify-center text-center">
          <p className="text-[12px] tracking-[0.15em] text-[var(--aimuse-gold)] flex items-center justify-center gap-2">
            <span className="twinkle">✦</span> AIMUSEからのお知らせ <span className="twinkle">✦</span>
          </p>
          <h3 className="mt-3 text-[24px] md:text-[28px] leading-snug font-medium text-[var(--aimuse-deep-purple)]">
            正式公開に向けて準備中です
          </h3>
          <div className="mt-4 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[var(--aimuse-gold)] to-transparent" />
          <p className="mt-5 text-[13px] leading-[1.9] text-[#6a5d90]">
            AIMUSEにご関心をお寄せいただき、ありがとうございます。
            <br />
            現在、よりよい体験をお届けするため、正式公開に向けて準備を進めています。
          </p>
          <p className="mt-4 text-[13px] leading-[1.9] text-[#6a5d90]">
            お問い合わせ・取材・提携のご相談は、
            <br />
            下記までご連絡ください。
          </p>

          <a
            href="mailto:aimusejapan@outlook.com"
            className="mt-6 inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/70 ring-1 ring-[var(--aimuse-purple)]/20 text-[13px] text-[var(--aimuse-purple-deep)] hover:bg-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M4 6.5l8 6 8-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            aimusejapan@outlook.com
          </a>

          <button
            onClick={onClose}
            className="shimmer-btn shimmer-btn--solid mt-7 px-8 py-3 text-sm cursor-pointer"
          >
            <span className="text-[var(--aimuse-gold-pale)]">✦</span> 閉じる <span className="text-[var(--aimuse-gold-pale)]">✦</span>
          </button>
        </div>

        <div className="relative hidden md:block overflow-hidden">
          <div
            aria-hidden="true"
            className="breathing-glow absolute inset-0"
            style={{ background: 'radial-gradient(circle at 60% 40%, rgba(168,130,255,0.35), transparent 65%)' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(217,205,240,0.6), rgba(231,198,138,0.25))' }}
          />
          <img src={kaka} alt="AIMUSE ビューティーアドバイザー KAKA" className="absolute -right-6 bottom-0 h-[112%] w-auto max-w-none select-none" draggable={false} />
          <div className="absolute left-5 bottom-5 text-white drop-shadow-md">
            <p className="text-[10px] tracking-wide opacity-90">AIMUSE ビューティーアドバイザー</p>
            <p className="font-display italic text-xl">KAKA</p>
          </div>
        </div>
      </div>
    </ModalOverlay>
  )
}
