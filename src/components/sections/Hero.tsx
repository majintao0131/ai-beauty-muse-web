import kaka from '../../assets/images/kaka-transparent.webp'
import hairIcon from '../../assets/icons/hero-hair.png'
import colorIcon from '../../assets/icons/hero-color.png'
import makeupIcon from '../../assets/icons/hero-makeup.png'
import styleIcon from '../../assets/icons/hero-style.png'
import fortuneIcon from '../../assets/icons/hero-fortune.png'

const heroPhone = '/mobile_app-phone-transparent.webp'
import { ShimmerButton } from '../common/ShimmerButton'
import { SectionReveal } from '../common/SectionReveal'
import { LightRibbon } from '../common/LightRibbon'

const HERO_FEATURES = [
  { label: 'AIヘア診断', desc: 'あなたに似合う髪型を提案', icon: hairIcon },
  { label: 'パーソナルカラー', desc: '似合う色で印象をアップ', icon: colorIcon },
  { label: '似合うメイク', desc: '魅力を引き出すメイク提案', icon: makeupIcon },
  { label: 'コーデ提案', desc: 'あなたらしい着こなしを提案', icon: styleIcon },
  { label: '開運ビューティー', desc: '運気を上げる美容アドバイス', icon: fortuneIcon },
]

export function Hero({ onDownloadClick }: { onDownloadClick: () => void }) {
  return (
    <section id="home" className="relative overflow-hidden pt-[76px] pb-0">
      <div className="mx-auto grid min-h-[624px] max-w-[1440px] items-center gap-8 px-6 md:grid-cols-[0.92fr_1.08fr] md:px-10">
        <SectionReveal as="div" className="order-2 md:order-1">
          <h1 className="text-[40px] leading-[1.25] md:text-[54px] md:leading-[1.2] font-medium text-[var(--aimuse-deep-purple)]">
            <span className="relative inline-block">
              「似合う」
            </span>
            を、私に。
          </h1>
          <p className="mt-6 text-left text-[21px] md:text-[23px] leading-[1.9] text-[#463a6b]">
            誰にでも似合う美しさではなく、
            <br />
            私だけに似合う美しさを。
          </p>
          <p className="mt-5 text-[14px] md:text-[15px] leading-[1.5] text-[#6a5d90] max-w-[460px]">
            AIMUSEは、運勢、顔立ち・骨格、雰囲気、スタイルをもとに、あなたがもっと自分らしく、美しくなるための選択をサポートします。
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ShimmerButton variant="solid" onClick={onDownloadClick}>
              アプリをダウンロード
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ShimmerButton>
            <ShimmerButton
              variant="outline"
              onClick={() => document.getElementById('concept')?.scrollIntoView({ behavior: 'smooth' })}
            >
              AIMUSEについて
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ShimmerButton>
          </div>
        </SectionReveal>

        <SectionReveal as="div" delay={150} className="order-1 md:order-2 relative ml-auto h-[500px] w-full max-w-[700px] md:h-[624px]">
          {/* halo behind KAKA */}
          <div
            aria-hidden="true"
            className="breathing-glow absolute left-1/2 top-[36%] -translate-x-[58%] -translate-y-1/2 w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(168,130,255,0.35), rgba(231,198,138,0.18) 55%, transparent 72%)' }}
          />
          <LightRibbon
            className="absolute left-[8%] top-[30%] w-[68%] h-[120px] hidden md:block"
            path="M0,40 C120,0 260,80 400,30 C480,0 540,50 600,20"
            viewBox="0 0 600 100"
          />

          <img
            src={kaka}
            alt="AIMUSE ビューティーアドバイザー KAKA"
            className="absolute left-1/2 top-0 -translate-x-[85%] h-full w-auto max-w-none select-none drop-shadow-[0_30px_45px_rgba(60,37,112,0.25)]"
            draggable={false}
          />

          <div className="absolute left-[20%] md:left-[24%] bottom-[8%] md:bottom-[12%] text-right md:text-left">
            <p className="text-[11px] tracking-[0.15em] text-[#6a5d90]">AIMUSE ビューティーアドバイザー</p>
            <p className="font-display italic text-2xl text-[var(--aimuse-purple-deep)]">KAKA</p>
          </div>

          <div className="absolute right-0 bottom-[6%] md:bottom-[8%] w-[185px] md:w-[230px] xl:w-[240px] aspect-[405/835] overflow-hidden bg-transparent">
            <img
              src={heroPhone}
              alt="AIMUSEアプリ"
              className="relative w-full h-full object-contain bg-transparent"
              loading="eager"
              fetchPriority="high"
              draggable={false}
            />
          </div>
        </SectionReveal>
      </div>

      <SectionReveal as="div" delay={250} className="border-y border-white/70 bg-white/20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-6 py-5 md:grid-cols-5 md:px-10 md:py-7">
          {HERO_FEATURES.map((f) => (
            <div key={f.label} className="group flex items-center gap-3 border-r border-white/70 px-2 py-3 [&:nth-child(even)]:border-r-0 md:justify-center md:px-4 md:py-0 md:[&:nth-child(even)]:border-r md:[&:nth-child(5)]:border-r-0">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/55 text-[var(--aimuse-purple)] ring-1 ring-[var(--aimuse-gold)]/30 transition-all duration-500 group-hover:text-[var(--aimuse-gold)] group-hover:shadow-[0_0_16px_rgba(207,154,83,0.45)] md:h-[72px] md:w-[72px] [&>svg]:h-8 [&>svg]:w-8">
                <img src={f.icon} alt="" className="h-9 w-9 object-contain md:h-11 md:w-11" />
              </span>
              <span>
                <span className="block text-[13px] font-medium text-[var(--aimuse-deep-purple)] md:text-[15px]">{f.label}</span>
                <span className="block text-[11px] text-[#7a6da0] md:text-[12px]">{f.desc}</span>
              </span>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  )
}
