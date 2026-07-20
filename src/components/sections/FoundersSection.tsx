import type { ReactNode } from 'react'
import founderFlame from '../../assets/images/founder-flame.jpg'
import founderTree from '../../assets/images/founder-tree.jpg'
import { GlowCard } from '../common/GlowCard'
import { SectionReveal } from '../common/SectionReveal'

export function FoundersSection() {
  return (
    <section id="founders" className="founders-section section-cv relative overflow-hidden py-20 md:py-28 xl:py-0">
      <div className="relative z-[1] mx-auto max-w-[1350px] px-6 md:px-10 xl:px-0 xl:pt-4">
        <SectionReveal className="text-center">
          <h2 className="font-heading text-[38px] md:text-[52px] leading-none font-medium text-[var(--aimuse-deep-purple)]">
            <span className="mr-5 text-[var(--aimuse-gold)]">✦</span>
            創業者
            <span className="ml-5 text-[var(--aimuse-gold)]">✦</span>
          </h2>
          <p className="mt-5 text-[16px] md:text-[20px] text-[var(--aimuse-purple-deep)] tracking-[0.12em]">ファッションの感性 × AIエンジニアリング</p>
          <div className="mt-5 flex items-center justify-center gap-3 text-[var(--aimuse-gold)]">
            <span className="h-px w-20 bg-current opacity-50" />
            <span>✦</span>
            <span className="h-px w-20 bg-current opacity-50" />
          </div>
        </SectionReveal>

        <div className="mt-12 md:mt-14 relative grid md:grid-cols-2 gap-8 xl:mt-5 xl:gap-[11.5vw]">
          <FounderCard
            delay={0}
            name="Huo Huo"
            role={<span>Founder / CEO</span>}
            symbol="丁火"
            image={founderFlame}
            paragraphs={[
              'ファッションの感性、コンテンツへの洞察、そしてユーザー成長の経験をもとに、AIMUSEの美学的な方向性とプロダクト体験を形づくる。',
              'AIMUSEを単なるトレンド提案にとどめず、一人ひとりが本当に似合うものと出会うための存在へ。',
            ]}
            capabilities={[
              ['Beauty Direction', <IconDress key="dress" />],
              ['Fashion Insight', <IconEye key="eye" />],
              ['User Growth', <IconUsers key="users" />],
            ]}
          />

          <FounderCard
            delay={160}
            name="GEEK MA"
            role={<><span>Co-founder / CTO</span><span>AI / App Engineering Lead</span></>}
            symbol="甲木"
            image={founderTree}
            mirrored
            paragraphs={[
              'コンピュータ業界における豊富な経験を持ち、AIMUSEのAIシステム、プロダクト設計、アプリケーション開発を統括。',
              '複雑なアルゴリズムを、やさしく、明快で、信頼できる美的判断体験へと変えていく。',
            ]}
            capabilities={[
              ['AI System', <IconBrain key="brain" />],
              ['Product Architecture', <IconLayers key="layers" />],
              ['App Engineering', <IconPhone key="phone" />],
            ]}
          />

          <span aria-hidden="true" className="founder-cross hidden md:grid place-items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] w-[170px] h-[170px] rounded-full border border-dashed border-[var(--aimuse-gold)]/45 text-[var(--aimuse-gold)] text-[52px] font-light z-10">
            ×
          </span>
        </div>

        <SectionReveal delay={320} className="mt-14 text-center text-[15px] md:text-[18px] leading-relaxed text-[var(--aimuse-deep-purple)] max-w-[820px] mx-auto xl:mt-5">
          AIMUSEは、ファッションの感性とAIエンジニアリングを掛け合わせた、『私に似合う』を見つけるための新しいビューティー体験アプリです。
        </SectionReveal>
      </div>
    </section>
  )
}

function FounderCard({
  delay,
  name,
  role,
  symbol,
  image,
  paragraphs,
  capabilities,
  mirrored = false,
}: {
  delay: number
  name: string
  role: ReactNode
  symbol: string
  image: string
  paragraphs: string[]
  capabilities: [string, ReactNode][]
  mirrored?: boolean
}) {
  return (
    <SectionReveal delay={delay}>
      <GlowCard className="relative min-h-[508px] overflow-hidden rounded-[2rem] bg-white/68 ring-1 ring-white/80 shadow-[0_25px_70px_-30px_rgba(107,70,184,0.42)]">
        <div className="relative h-[508px]">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="founder-art pointer-events-none absolute bottom-[4px] left-[-14px] z-0 h-[500px] w-auto max-w-[58%] select-none object-contain object-left mix-blend-multiply opacity-90"
            loading="lazy"
            draggable={false}
          />

          <div className={`relative z-[2] ml-auto flex flex-col pt-9 ${mirrored ? 'mr-[13%] w-[47%]' : 'mr-[7%] w-[40%]'}`}>
          <div className={`flex items-start gap-3 ${mirrored ? 'flex-row' : 'justify-between'}`}>
            {mirrored && <FounderHex symbol={symbol} />}
            <div className="min-w-0">
              <h3 className="font-display text-[30px] md:text-[40px] leading-none tracking-wide text-[var(--aimuse-purple-deep)]">{name}</h3>
              <div className="mt-3 flex flex-col gap-1 text-[13px] md:text-[17px] leading-tight text-[var(--aimuse-purple-deep)]">{role}</div>
            </div>
            {!mirrored && <FounderHex symbol={symbol} />}
          </div>

          <div className="mt-5 flex items-center gap-3 text-[var(--aimuse-gold)]">
            <span className="h-px flex-1 bg-current opacity-50" />
            <span className="text-xs">✦</span>
            <span className="h-px flex-1 bg-current opacity-50" />
          </div>

          <div className="mt-6 space-y-6 text-[12px] md:text-[14px] leading-[1.8] text-[var(--aimuse-deep-purple)]">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          </div>

          <div className="absolute inset-x-[7%] bottom-[40px] z-[2] grid grid-cols-3 divide-x divide-[var(--aimuse-purple)]/20">
            {capabilities.map(([label, icon]) => (
              <FounderCapability key={label} label={label} icon={icon} />
            ))}
          </div>
        </div>
      </GlowCard>
    </SectionReveal>
  )
}

function FounderHex({ symbol }: { symbol: string }) {
  return (
    <span className="grid h-14 w-14 shrink-0 place-items-center border border-[var(--aimuse-gold)]/70 text-[15px] text-[var(--aimuse-purple-deep)]" style={{ clipPath: 'polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)' }}>
      {symbol}
    </span>
  )
}

function FounderCapability({ label, icon }: { label: string; icon: ReactNode }) {
  return (
    <div className="flex min-w-0 items-center justify-center gap-2 px-2 text-[var(--aimuse-purple-deep)] md:gap-3 md:px-3">
      <span className="shrink-0 text-[var(--aimuse-purple)] [&>svg]:h-8 [&>svg]:w-8">{icon}</span>
      <span className="text-[10px] md:text-[15px] leading-[1.35]">{label.split(' ').map((word, index) => <span key={`${word}-${index}`} className="block">{word}{index < label.split(' ').length - 1 ? ' ' : ''}</span>)}</span>
    </div>
  )
}

function IconDress() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M9 4h6l1 3-2 1 2 12H8L10 8l-2-1 1-3z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  )
}
function IconEye() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}
function IconUsers() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="16" cy="9.5" r="2" stroke="currentColor" strokeWidth="1" />
      <path d="M3.5 19c.5-3 2.7-4.6 5.5-4.6s5 1.6 5.5 4.6M15 19c.3-2.2 1.7-3.7 4.5-3.7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}
function IconBrain() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M9 4a3 3 0 00-3 3 3 3 0 00-1 5.6A3.5 3.5 0 008 18a3 3 0 003-3V6a2 2 0 00-2-2zM15 4a3 3 0 013 3 3 3 0 011 5.6A3.5 3.5 0 0116 18a3 3 0 01-3-3V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  )
}
function IconLayers() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M3 13l9 5 9-5M3 17l9 5 9-5" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="7" y="2.5" width="10" height="19" rx="2" stroke="currentColor" strokeWidth="1.1" />
      <path d="M11 19h2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}
