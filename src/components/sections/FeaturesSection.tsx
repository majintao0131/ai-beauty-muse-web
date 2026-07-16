import hairThumb1 from '../../assets/images/hair-thumb1.jpg'
import hairThumb2 from '../../assets/images/hair-thumb2.jpg'
import hairThumb3 from '../../assets/images/hair-thumb3.jpg'
import makeupPanel from '../../assets/images/makeup-panel.jpg'
import outfit1 from '../../assets/images/outfit1.jpg'
import outfit2 from '../../assets/images/outfit2.jpg'
import outfit3 from '../../assets/images/outfit3.jpg'
import { GlowCard } from '../common/GlowCard'
import { SectionReveal } from '../common/SectionReveal'

const HAIR_STYLES = [
  { img: hairThumb1, label: 'ソフトレイヤーボブ' },
  { img: hairThumb2, label: 'くびれミディ' },
  { img: hairThumb3, label: 'ひし形ショート' },
]
const HAIR_COLORS = ['#2d1d1e', '#333224', '#4c3024', '#5a3726', '#573624', '#4d3731']

const SEASONS = [
  {
    name: 'SPRING',
    rows: [
      ['#e27157', '#e77762'],
      ['#e98860', '#f3af81'],
      ['#e9a757', '#b9ab68'],
    ],
  },
  {
    name: 'SUMMER',
    rows: [
      ['#c76376', '#dc93a4'],
      ['#b7617c', '#ba6d88'],
      ['#a1acc8', '#bc9bb9'],
    ],
  },
  {
    name: 'AUTUMN',
    rows: [
      ['#a92402', '#bf3d0a'],
      ['#c45401', '#e38f2b'],
      ['#864e13', '#ac683f'],
    ],
  },
  {
    name: 'WINTER',
    rows: [
      ['#ab1845', '#aa3976'],
      ['#0c2684', '#3b57a8'],
      ['#1f6964', '#87a4ab'],
    ],
  },
]

const OUTFITS = [
  { img: outfit1, label: '休日' },
  { img: outfit2, label: '仕事' },
  { img: outfit3, label: 'デート' },
]

const BOTTOM_ICONS = [
  { label: '商品提案', icon: IconBag },
  { label: 'ヘアサロン相談カード', icon: IconScissors },
  { label: 'コミュニティ', icon: IconPeople },
  { label: '開運予測', icon: IconDiamond },
]

export function FeaturesSection() {
  return (
    <section id="features" className="section-cv relative py-12 md:py-16 xl:min-h-[780px] xl:py-10">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        <SectionReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 xl:gap-8">
          <h2 className="text-[28px] md:text-[38px] xl:text-[34px] font-medium text-[var(--aimuse-deep-purple)]">4つの主要機能</h2>
          <p className="text-[13px] md:text-[14px] xl:text-[12px] leading-[1.75] text-[#6a5d90] max-w-[440px] xl:max-w-[620px]">
            AIMUSEは、あなたの骨格、色、スタイル、印象を読み解き、「私だけに似合う」を見つけ、選び、自信につなげます。
            <br />
            予測するのではなく、あなた自身の美しさを見つけ導き出します。
          </p>
        </SectionReveal>

        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-3">
          {/* 01 AI・ヘア診断 */}
          <SectionReveal delay={0}>
            <GlowCard className="p-5 xl:p-4 h-full">
              <FeatureHeading no="01" title="AI・ヘア診断" />
              <p className="mt-2 text-[13px] xl:text-[11px] leading-relaxed text-[#6a5d90]">顔立ちや雰囲気をもとに、似合う髪型・髪色・印象を提案します。</p>

              <p className="mt-4 xl:mt-3 text-[11px] tracking-wide text-[var(--aimuse-gold)]">おすすめヘアスタイル</p>
              <div className="mt-2 grid grid-cols-3 gap-3">
                {HAIR_STYLES.map((h) => (
                  <div key={h.label} className="group">
                    <div className="rounded-xl overflow-hidden ring-1 ring-white/60">
                      <img src={h.img} alt={h.label} className="w-full h-[92px] xl:h-[70px] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                    <p className="mt-1.5 text-[10px] text-center text-[#6a5d90]">{h.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 xl:mt-3 text-[11px] tracking-wide text-[var(--aimuse-gold)]">おすすめヘアカラー</p>
              <div className="mt-2 flex gap-2 xl:gap-1.5">
                {HAIR_COLORS.map((c, i) => (
                  <span
                    key={i}
                    className="w-7 h-7 xl:w-6 xl:h-6 rounded-full ring-1 ring-white/70 transition-transform duration-500 hover:scale-125 hover:shadow-[0_0_10px_rgba(207,154,83,0.6)]"
                    style={{ background: c }}
                  />
                ))}
              </div>
            </GlowCard>
          </SectionReveal>

          {/* 02 パーソナルカラー診断 */}
          <SectionReveal delay={120}>
            <GlowCard className="p-5 xl:p-4 h-full">
              <FeatureHeading no="02" title="パーソナルカラー診断" />
              <p className="mt-2 text-[13px] xl:text-[11px] leading-relaxed text-[#6a5d90]">肌の透明感や雰囲気を見ながら、あなたの魅力を引き出す色を見つけます。</p>

              <div className="mt-4 xl:mt-3 relative rounded-2xl bg-white/40 p-3 overflow-hidden">
                <span
                  aria-hidden="true"
                  className="feature-sweep pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 opacity-40"
                  style={{ background: 'linear-gradient(100deg, transparent, rgba(255,255,255,0.9), transparent)' }}
                />
                <p className="text-center text-[10px] tracking-[0.2em] text-[var(--aimuse-purple-deep)]">BEST COLORS</p>
                <div className="mt-3 grid grid-cols-4 gap-x-2 gap-y-2">
                  {SEASONS.map((s) => (
                    <div key={s.name} className="flex flex-col items-center gap-1.5">
                      {s.rows.map((pair, ri) => (
                        <div key={ri} className="flex gap-1.5">
                          {pair.map((c, ci) => (
                            <span
                              key={ci}
                              className="w-5 h-5 xl:w-4 xl:h-4 rounded-full ring-1 ring-white/70 transition-transform duration-500 hover:scale-125"
                              style={{ background: c }}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-4 text-center">
                  {SEASONS.map((s) => (
                    <p key={s.name} className="text-[9px] tracking-wide text-[#8577a8]">{s.name}</p>
                  ))}
                </div>
              </div>
            </GlowCard>
          </SectionReveal>

          {/* 03 似合うメイク提案 */}
          <SectionReveal delay={240}>
            <GlowCard className="p-5 xl:p-4 h-full">
              <FeatureHeading no="03" title="似合うメイク提案" />
              <p className="mt-2 text-[13px] xl:text-[11px] leading-relaxed text-[#6a5d90]">顔立ちと印象に合わせて、リップ・アイメイク・質感まで提案します。</p>
              <div className="mt-4 xl:mt-3 rounded-2xl overflow-hidden ring-1 ring-white/60">
                <img src={makeupPanel} alt="似合うメイク提案" className="w-full h-[190px] xl:h-[146px] object-cover" loading="lazy" />
              </div>
            </GlowCard>
          </SectionReveal>

          {/* 04 コーデ・スタイル提案 */}
          <SectionReveal delay={360}>
            <GlowCard className="p-5 xl:p-4 h-full">
              <FeatureHeading no="04" title="コーデ・スタイル提案" />
              <p className="mt-2 text-[13px] xl:text-[11px] leading-relaxed text-[#6a5d90]">似合う色・雰囲気・シーンに合わせて、服・アクセサリー・全体の印象を整えます。</p>
              <div className="mt-4 xl:mt-3 grid grid-cols-3 gap-2">
                {OUTFITS.map((o) => (
                  <div key={o.label} className="rounded-xl overflow-hidden ring-1 ring-white/60 relative group">
                    <img src={o.img} alt={o.label} className="w-full h-[190px] xl:h-[146px] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                ))}
              </div>
            </GlowCard>
          </SectionReveal>
        </div>

        <SectionReveal delay={450} className="mt-6 xl:mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 xl:gap-2">
          {BOTTOM_ICONS.map((b) => (
            <div key={b.label} className="glow-card flex items-center gap-2 px-3 py-3 xl:py-2 justify-center">
              <span className="text-[var(--aimuse-purple)] shrink-0">
                <b.icon />
              </span>
              <span className="text-[12px] xl:text-[11px] text-[var(--aimuse-deep-purple)]">{b.label}</span>
            </div>
          ))}
        </SectionReveal>
      </div>
    </section>
  )
}

function FeatureHeading({ no, title }: { no: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-display text-lg w-9 h-9 rounded-full border border-[var(--aimuse-gold)]/50 grid place-items-center text-[var(--aimuse-gold)]">
        {no}
      </span>
      <h3 className="text-[18px] md:text-[20px] font-medium text-[var(--aimuse-deep-purple)]">{title}</h3>
    </div>
  )
}

function IconBag() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M6 9h12l1 11H5L6 9z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M9 9V7a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}
function IconScissors() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="6" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7.6 7.4L19 18M7.6 16.6L19 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
function IconPeople() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="9.5" r="2.1" stroke="currentColor" strokeWidth="1.1" />
      <path d="M3.5 19c.5-3 2.7-4.6 5.5-4.6s5 1.6 5.5 4.6M15 19c.3-2.2 1.7-3.7 4.5-3.7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}
function IconDiamond() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l3 4.5H9L12 3zM4.5 7.5h15L12 20 4.5 7.5z" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
    </svg>
  )
}
