import compareBeforeAfter from '../../assets/images/compare-beforeafter.jpg'
import compareGrid from '../../assets/images/compare-grid.jpg'
import comparePhone from '../../assets/images/compare-phone.jpg'
import logoTransparent from '../../assets/images/logo-transparent.png'
import { GlowCard } from '../common/GlowCard'
import { SectionReveal } from '../common/SectionReveal'

const SIDE_ICONS = [
  { label: '顔立ち', icon: IconFace },
  { label: '雰囲気', icon: IconWave },
  { label: '似合う色', icon: IconDots },
  { label: 'ライフ\nスタイル', icon: IconBag },
]

export function CompareSection() {
  return (
    <section className="section-cv relative py-10 md:py-12 xl:py-0">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="hidden xl:block relative min-h-[770px]">
          <SectionReveal className="absolute left-[2%] top-[30px] z-10 max-w-[900px] min-[1400px]:top-0">
            <h2 className="text-[34px] leading-[1.38] font-medium text-[var(--aimuse-deep-purple)] min-[1400px]:text-[40px]">
              AIMUSEは、
              <br />
              変身AIでも、美容情報アプリでもありません。
            </h2>
            <div className="mt-5 h-px w-[300px] bg-[var(--aimuse-gold)]/50" />
          </SectionReveal>

          <div className="absolute left-[2%] top-[226px] z-[3] grid grid-cols-[250px_30px_250px_30px_290px] items-center gap-0 min-[1400px]:top-[184px] min-[1400px]:grid-cols-[280px_38px_280px_38px_322px]">
            <ComparePanel compactDesktop title="普通のAI変身アプリ" subtitle="変身・画像生成体験" image={compareBeforeAfter} imageAlt="普通のAI変身アプリ" items={[['画像を生成できる', true], ['見た目の変化がわかる', true], ['似合う理由はわからない', false]]} />
            <VsBadge />
            <ComparePanel compactDesktop title="美容アプリ" subtitle="情報・美容コンテンツ体験" image={compareGrid} imageAlt="美容アプリ" items={[['情報が多い', true], ['流行・人気がわかる', true], ['似合う理由はわからない', false]]} />
            <VsBadge />
            <ComparePanel compactDesktop gold title="AIMUSE" subtitle="理由から選び、行動につながる体験" image={logoTransparent} imageAlt="AIMUSE" items={[['似合う理由から納得して選べる', true], ['顔立ち・雰囲気・色を総合分析', true], ['商品・サロン・美容師選びに直結', true], ['自分らしく、自信を持って選べる', true]]} />
          </div>

          <SectionReveal delay={300} className="absolute right-[3%] top-[30px] z-[4] min-[1400px]:right-[8%] min-[1400px]:top-[4px]">
            <img src={comparePhone} alt="AIMUSE診断結果" className="w-[220px] drop-shadow-[0_25px_40px_rgba(60,37,112,0.3)] min-[1400px]:w-[260px]" loading="lazy" />
          </SectionReveal>
          <div className="absolute right-[-1%] top-[68px] z-[5] flex flex-col gap-5">
            {SIDE_ICONS.map((s) => (
              <div key={s.label} className="compare-side-icon relative grid h-[78px] w-[78px] place-items-center rounded-full border border-[var(--aimuse-gold)]/70 bg-white/65 text-[var(--aimuse-purple)] shadow-[0_4px_18px_rgba(110,77,180,0.12)]">
                <s.icon />
                <span className="absolute top-[48px] whitespace-pre text-center text-[11px] leading-tight text-[var(--aimuse-deep-purple)]">{s.label}</span>
              </div>
            ))}
          </div>
          <SectionReveal delay={450} className="absolute inset-x-0 bottom-0 text-center text-[18px] leading-relaxed text-[var(--aimuse-deep-purple)]">
            AIMUSEは、「私だけに似合う」理由を読み解き、現実の選択につなげるAIビューティーミューズです。
          </SectionReveal>
        </div>

        <div className="xl:hidden">
          <SectionReveal className="max-w-[640px]">
            <h2 className="text-[28px] leading-[1.35] font-medium text-[var(--aimuse-deep-purple)]">
              AIMUSEは、<br />変身AIでも、美容情報アプリでもありません。
            </h2>
          </SectionReveal>
          <div className="mt-10 space-y-5">
            <ComparePanel compact title="普通のAI変身アプリ" subtitle="変身・画像生成体験" image={compareBeforeAfter} imageAlt="普通のAI変身アプリ" items={[['画像を生成できる', true], ['見た目の変化がわかる', true], ['似合う理由はわからない', false]]} />
            <ComparePanel compact title="美容アプリ" subtitle="情報・美容コンテンツ体験" image={compareGrid} imageAlt="美容アプリ" items={[['情報が多い', true], ['流行・人気がわかる', true], ['似合う理由はわからない', false]]} />
            <ComparePanel compact gold title="AIMUSE" subtitle="理由から選び、行動につながる体験" image={logoTransparent} imageAlt="AIMUSE" items={[['似合う理由から納得して選べる', true], ['顔立ち・雰囲気・色を総合分析', true], ['商品・サロン・美容師選びに直結', true], ['自分らしく、自信を持って選べる', true]]} />
            <img src={comparePhone} alt="AIMUSE診断結果" className="mx-auto w-[220px] drop-shadow-[0_25px_40px_rgba(60,37,112,0.3)]" loading="lazy" />
          </div>
          <p className="mt-10 text-center text-[15px] leading-relaxed text-[var(--aimuse-deep-purple)]">AIMUSEは、「私だけに似合う」理由を読み解き、現実の選択につなげるAIビューティーミューズです。</p>
        </div>
      </div>
    </section>
  )
}

function ComparePanel({ compact, compactDesktop, gold, title, subtitle, image, imageAlt, items }: { compact?: boolean; compactDesktop?: boolean; gold?: boolean; title: string; subtitle: string; image: string; imageAlt: string; items: [string, boolean][] }) {
  return (
    <GlowCard className={`${compact ? 'min-h-[360px] p-5' : compactDesktop ? 'h-[400px] p-3 min-[1400px]:h-[440px] min-[1400px]:p-4' : 'h-[440px] p-4'} ${gold ? 'ring-2 ring-[var(--aimuse-gold)]/70' : ''}`}>
      <div className="flex h-full flex-col">
        <p className={`${gold ? 'text-[18px]' : 'text-[17px]'} text-center font-medium text-[var(--aimuse-deep-purple)]`}>
          {gold && <span className="text-[var(--aimuse-gold)]">✦ </span>}{title}{gold && <span className="text-[var(--aimuse-gold)]"> ✦</span>}
        </p>
        <p className="mt-1 text-center text-[11px] text-[#8577a8]">{subtitle}</p>
        <div className={`${gold ? 'my-4 h-[100px] w-[100px] min-[1400px]:my-5 min-[1400px]:h-[116px] min-[1400px]:w-[116px]' : 'mt-4 h-[180px] w-full min-[1400px]:h-[210px]'} mx-auto overflow-hidden rounded-xl ring-1 ring-white/60`}>
          <img src={image} alt={imageAlt} className={`${gold ? 'h-full w-full object-contain drop-shadow-[0_8px_20px_rgba(107,70,184,0.4)]' : 'h-full w-full object-cover'}`} loading="lazy" />
        </div>
        <ul className={`${gold ? 'mt-1' : 'mt-3'} space-y-2 text-[12px] leading-relaxed ${gold ? 'text-[var(--aimuse-deep-purple)]' : 'text-[#5c4f82]'}`}>
          {items.map(([label, ok]) => <ListItem key={label} ok={ok} gold={gold} label={label} />)}
        </ul>
      </div>
    </GlowCard>
  )
}

function VsBadge() {
  return (
    <div className="hidden lg:flex items-center justify-center">
      <span className="soft-pulse w-11 h-11 rounded-full grid place-items-center bg-white/60 ring-1 ring-[var(--aimuse-gold)]/40 text-[var(--aimuse-purple-deep)] text-[12px] font-medium shadow-[0_0_18px_rgba(207,154,83,0.3)]">
        VS
      </span>
    </div>
  )
}

function ListItem({ label, ok, gold }: { label: string; ok?: boolean; gold?: boolean }) {
  return (
    <li className="flex items-start gap-2">
      <span className={`mt-0.5 shrink-0 ${ok ? (gold ? 'text-[var(--aimuse-gold)]' : 'text-[var(--aimuse-purple)]') : 'text-[#b9aed6]'}`}>
        {ok ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        )}
      </span>
      {label}
    </li>
  )
}

function IconFace() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 4c4 0 6 2.5 6 6.5 0 1-.2 2-.5 3M12 4c-4 0-6 2.5-6 6.5 0 4 2.5 8 6 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
function IconWave() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 10c2-2 4-2 6 0s4 2 6 0 4-2 6 0M4 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
function IconDots() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="15" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="12" cy="15" r="3.2" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}
function IconBag() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M6 9h12l1 11H5L6 9z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M9 9V7a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}
