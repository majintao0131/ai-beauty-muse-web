import hairThumb1 from '../../assets/images/hair-style-1-hd.png'
import hairThumb2 from '../../assets/images/hair-style-2-hd.png'
import hairThumb3 from '../../assets/images/hair-style-3-hd.png'
import makeupPanel from '../../assets/images/makeup-panel.jpg'
import outfitHoliday from '../../assets/images/outfit-holiday-hd.png'
import outfitWork from '../../assets/images/outfit-work-hd.png'
import outfitDate from '../../assets/images/outfit-date-hd.png'
import personalColorPanel from '../../assets/images/personal-color-panel-am4.png'
import { GlowCard } from '../common/GlowCard'
import { SectionReveal } from '../common/SectionReveal'

const HAIR_STYLES = [
  { img: hairThumb1, label: 'ソフトレイヤーボブ' },
  { img: hairThumb2, label: 'くびれミディ' },
  { img: hairThumb3, label: 'ひし形ショート' },
]
const HAIR_COLORS = ['#2d1d1e', '#333224', '#4c3024', '#5a3726', '#573624', '#4d3731']

const OUTFITS = [
  { img: outfitHoliday, label: '休日' },
  { img: outfitWork, label: '仕事' },
  { img: outfitDate, label: 'デート' },
]

const BOTTOM_ICONS = [
  { label: '商品提案', icon: IconBag },
  { label: 'ヘアサロン相談カード', icon: IconScissors },
  { label: 'コミュニティ', icon: IconPeople },
  { label: '開運予測', icon: IconDiamond },
]

export function FeaturesSection() {
  return (
    <section id="features" className="section-cv relative overflow-hidden py-12 md:py-16 xl:h-[calc(100svh-var(--header-height))] xl:min-h-[calc(100svh-var(--header-height))] xl:py-0">
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-6 md:px-10 xl:h-full">
        <SectionReveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between xl:h-[142px] xl:shrink-0 xl:items-start xl:pt-7">
          <h2 className="text-[32px] font-medium text-[var(--aimuse-deep-purple)] md:text-[42px] xl:pt-1 xl:text-[64px]">4つの主要機能</h2>
          <p className="max-w-[500px] text-[15px] leading-[1.9] text-[#6a5d90] md:text-[16px] xl:max-w-[680px] xl:pt-1 xl:text-[17px]">
            AIMUSEは、あなたの骨格、色、スタイル、印象を読み解き、「私だけに似合う」を見つけ、選び、自信につなげます。
            <br />
            予測するのではなく、あなた自身の美しさを見つけ導き出します。
          </p>
        </SectionReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:mt-2 xl:h-[532px] xl:shrink-0 xl:grid-cols-2 xl:grid-rows-2 xl:gap-4">
          {/* 01 AI・ヘア診断 */}
          <SectionReveal delay={0}>
            <GlowCard className="feature-main-card feature-hair-card h-full p-4 xl:p-3">
              <FeatureHeading no="01" title="AI・ヘア診断" />
                  <p className="mt-2 text-[15px] leading-[1.65] text-[#6a5d90] xl:text-[16px] xl:leading-[1.7]">顔立ちや雰囲気をもとに、似合う髪型・髪色・印象を提案します。</p>

              <p className="mt-3 text-[13px] tracking-wide text-[var(--aimuse-gold)] xl:mt-2 xl:text-[14px]">おすすめヘアスタイル</p>
              <div className="mt-2 grid grid-cols-3 gap-3">
                {HAIR_STYLES.map((h) => (
                  <div key={h.label} className="group">
                    <div className="feature-person-frame rounded-xl overflow-hidden ring-1 ring-white/60">
                      <img src={h.img} alt={h.label} className="h-[118px] w-full bg-white/20 object-contain object-center transition-transform duration-700 group-hover:scale-105 xl:h-[126px]" loading="lazy" />
                    </div>
                    <p className="mt-1 text-center text-[12px] leading-tight text-[#6a5d90]">{h.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-2 text-[13px] tracking-wide text-[var(--aimuse-gold)] xl:mt-2 xl:text-[14px]">おすすめヘアカラー</p>
              <div className="mt-2 flex gap-2 xl:gap-1.5">
                {HAIR_COLORS.map((c, i) => (
                  <span
                    key={i}
                    className="h-6 w-6 rounded-full ring-1 ring-white/70 transition-transform duration-500 hover:scale-125 hover:shadow-[0_0_10px_rgba(207,154,83,0.6)] xl:h-6 xl:w-6"
                    style={{ background: c }}
                  />
                ))}
              </div>
            </GlowCard>
          </SectionReveal>

          {/* 02 パーソナルカラー診断 */}
          <SectionReveal delay={120}>
            <GlowCard className="feature-main-card p-5 xl:p-4 h-full">
              <FeatureHeading no="02" title="パーソナルカラー診断" />
                  <p className="mt-3 text-[15px] leading-[1.9] text-[#6a5d90] xl:text-[16px]">肌の透明感や雰囲気を見ながら、あなたの魅力を引き出す色を見つけます。</p>

              <div className="feature-person-frame mt-4 overflow-hidden rounded-2xl ring-1 ring-white/60 xl:mt-3">
                <img src={personalColorPanel} alt="SPRING SUMMER AUTUMN WINTER パーソナルカラー" className="h-[210px] w-full object-contain object-center xl:h-[190px]" loading="lazy" />
              </div>
            </GlowCard>
          </SectionReveal>

          {/* 03 似合うメイク提案 */}
          <SectionReveal delay={240}>
            <GlowCard className="feature-main-card p-5 xl:p-4 h-full">
              <FeatureHeading no="03" title="似合うメイク提案" />
                  <p className="mt-3 text-[15px] leading-[1.9] text-[#6a5d90] xl:text-[16px]">顔立ちと印象に合わせて、リップ・アイメイク・質感まで提案します。</p>
              <div className="feature-person-frame mt-4 rounded-2xl overflow-hidden ring-1 ring-white/60 xl:mt-3">
                <img src={makeupPanel} alt="似合うメイク提案" className="h-[210px] w-full bg-white/20 object-contain object-center xl:h-[190px]" loading="lazy" />
              </div>
            </GlowCard>
          </SectionReveal>

          {/* 04 コーデ・スタイル提案 */}
          <SectionReveal delay={360}>
            <GlowCard className="feature-main-card p-5 xl:p-4 h-full">
              <FeatureHeading no="04" title="コーデ・スタイル提案" />
              <p className="mt-3 text-[15px] leading-[1.9] text-[#6a5d90] xl:text-[16px]">似合う色・雰囲気・シーンに合わせて、服・アクセサリー・全体の印象を整えます。</p>
              <div className="mt-4 grid grid-cols-3 gap-2 xl:mt-3">
                {OUTFITS.map((o) => (
                  <div key={o.label} className="feature-person-frame relative aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/60">
                    <img src={o.img} alt={o.label} className="h-full w-full scale-[1.08] object-contain object-center" loading="lazy" />
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-4 py-0.5 text-[11px] text-[var(--aimuse-deep-purple)]">{o.label}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </SectionReveal>
        </div>

        <SectionReveal delay={450} className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 xl:mt-5 xl:h-[60px] xl:shrink-0 xl:gap-2">
          {BOTTOM_ICONS.map((b) => (
            <div key={b.label} className="glow-card flex items-center gap-2 px-3 py-3 xl:py-2 justify-center">
              <span className="text-[var(--aimuse-purple)] shrink-0">
                <b.icon />
              </span>
              <span className="text-[14px] text-[var(--aimuse-deep-purple)] xl:text-[15px]">{b.label}</span>
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
      <span className="grid h-11 w-11 place-items-center rounded-full border border-[var(--aimuse-gold)]/50 font-display text-xl text-[var(--aimuse-gold)]">
        {no}
      </span>
      <h3 className="text-[21px] font-medium text-[var(--aimuse-deep-purple)] md:text-[23px] xl:text-[25px]">{title}</h3>
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
