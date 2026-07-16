import type { CSSProperties } from 'react'
import kaka from '../../assets/images/kaka-transparent.webp'
import kakaMakeup from '../../assets/images/kaka-makeup.jpg'
import kakaSocial from '../../assets/images/kaka-social.jpg'
import kakaPrivate from '../../assets/images/kaka-private.jpg'
import kakaOutfit from '../../assets/images/kaka-outfit.jpg'
import kakaWork from '../../assets/images/kaka-work.jpg'
import { GlowCard } from '../common/GlowCard'
import { SectionReveal } from '../common/SectionReveal'

const PHOTO_CARDS = [
  { img: kakaMakeup, title: 'メイク', desc: '顔立ちや印象に合わせて、あなたの魅力を引き出すメイクを提案。', pos: 'left-[19%] top-[0%]' },
  { img: kakaSocial, title: '社交', desc: '会食やイベントなど、人と会う場面での印象アップをお手伝い。', pos: 'left-[9%] top-[34%]' },
  { img: kakaPrivate, title: 'プライベート', desc: 'ちょっとしたお出かけや休日も、あなたらしく心地よく過ごせる提案を。', pos: 'left-[18%] top-[70%]' },
  { img: kakaOutfit, title: 'コーデ', desc: '体型や雰囲気、シーンに合わせて、あなたらしいスタイルを提案。', pos: 'left-[60%] top-[0%]' },
  { img: kakaWork, title: '仕事', desc: '信頼感や知性が伝わる装いで、理想の自分をサポート。', pos: 'left-[66%] top-[46%]' },
]

const DIALOGUES = [
  { q: '会食で上品に見えるメイクは？', a: '柔らかなベージュトーンと血色感をプラスで、上品な印象になります。', pos: 'left-[0%] top-[-24%]' },
  { q: '人と会う日に、やわらかく見せたい。', a: 'やさしい色と軽やかな質感で、親しみやすい印象をつくれます。', pos: 'left-[0%] top-[65%]' },
  { q: '今日の会食、何を着ればいい？', a: 'やわらかなベージュ系なら、上品で自然な雰囲気に整います。', pos: 'right-[0%] top-[-16%]', reverse: true },
  { q: '仕事で信頼感が出る装いは？', a: '端正なシルエットと落ち着いた色味で、知的で信頼感のある印象になります。', pos: 'right-[0%] top-[44%]', reverse: true },
]

export function KakaSection() {
  return (
    <section className="section-cv relative overflow-hidden py-8 md:py-8 xl:py-0">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        <SectionReveal className="text-center max-w-[680px] mx-auto">
          <p className="twinkle text-[var(--aimuse-gold)]">✦</p>
          <h2 className="font-display text-[60px] md:text-[76px] leading-none tracking-[0.15em] text-[var(--aimuse-purple-deep)]">KAKA</h2>
          <p className="text-[22px] md:text-[30px] font-medium text-[var(--aimuse-deep-purple)] mt-3">あなたに寄り添う、AI Muse</p>
          <p className="mt-5 text-[14px] md:text-[15px] leading-[1.9] text-[#6a5d90]">
            KAKAは、AIMUSEのAI Museであり、AI美学顧問です。現代女性の感性をもとに設計され、メイク、ヘア、ファッション、仕事、社交まで、日常のさまざまな場面で、あなたらしい「似合う」をやさしく導きます。
          </p>
        </SectionReveal>

        {/* Desktop constellation layout */}
        <div className="hidden xl:block relative h-[480px] mt-2">
          <div className="spin-slow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-dashed border-[var(--aimuse-gold)]/30" aria-hidden="true" />
          <div className="spin-slow-reverse absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full border border-[var(--aimuse-gold)]/18" aria-hidden="true" />

          <img
            src={kaka}
            alt="KAKA"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[96%] w-auto drop-shadow-[0_30px_50px_rgba(60,37,112,0.3)] select-none"
            loading="lazy"
            draggable={false}
          />

          {PHOTO_CARDS.map((c, i) => (
            <SectionReveal key={c.title} delay={i * 120} className={`floating-slow absolute w-[275px] ${c.pos}`} style={{ animationDelay: `${i * 0.6}s` } as CSSProperties}>
              <GlowCard className="h-[160px] rounded-[1.25rem] p-2.5">
                <div className="flex h-full items-center gap-3">
                  <img src={c.img} alt={c.title} className="h-[140px] w-[114px] shrink-0 rounded-xl object-cover" loading="lazy" />
                  <div className="min-w-0">
                    <p className="text-[16px] font-medium text-[var(--aimuse-purple-deep)]">{c.title} <span className="text-[var(--aimuse-gold)] text-[13px]">✦</span></p>
                    <p className="mt-2 text-[11px] leading-[1.7] text-[#5c4f82]">{c.desc}</p>
                  </div>
                </div>
              </GlowCard>
            </SectionReveal>
          ))}

          {DIALOGUES.map((d, i) => (
            <SectionReveal key={d.q} delay={300 + i * 100} className={`absolute w-[220px] ${d.pos}`}>
              <div className={`flex flex-col gap-2 ${d.reverse ? 'items-end text-right' : 'items-start text-left'}`}>
                <div className="glow-card px-3.5 py-2.5 flex items-center gap-2">
                  <PersonIcon />
                  <p className="text-[11px] text-[#5c4f82]">{d.q}</p>
                </div>
                <div className="glow-card px-3.5 py-2.5 flex items-center gap-2">
                  <SparkIcon />
                  <p className="text-[11px] text-[var(--aimuse-purple-deep)]">{d.a}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Compact layout below xl */}
        <div className="xl:hidden mt-12">
          <div className="flex justify-center">
            <img src={kaka} alt="KAKA" className="h-[340px] md:h-[420px] w-auto drop-shadow-[0_30px_50px_rgba(60,37,112,0.3)]" loading="lazy" />
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PHOTO_CARDS.map((c) => (
              <GlowCard key={c.title} className="p-4">
                <div className="flex items-center gap-3">
                  <img src={c.img} alt={c.title} className="w-14 h-16 rounded-lg object-cover shrink-0" loading="lazy" />
                  <div className="min-w-0">
                    <p className="text-[13px] font-medium text-[var(--aimuse-deep-purple)]">{c.title}</p>
                    <p className="text-[11px] leading-snug text-[#6a5d90] mt-0.5">{c.desc}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {DIALOGUES.map((d) => (
              <GlowCard key={d.q} className="p-4">
                <div className="flex items-center gap-2">
                  <PersonIcon />
                  <p className="text-[11px] text-[#5c4f82]">{d.q}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <SparkIcon />
                  <p className="text-[11px] text-[var(--aimuse-purple-deep)]">{d.a}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        <SectionReveal delay={500} className="mt-4 text-center text-[15px] md:text-[19px] leading-relaxed text-[var(--aimuse-deep-purple)]">
          KAKAは、答えを押しつけません。
          <br className="md:hidden" />
          あなたに<span className="text-[var(--aimuse-gold)] font-medium">似合うスタイル</span>と、その理由を一緒に見つけます。
        </SectionReveal>
      </div>
    </section>
  )
}

function PersonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[var(--aimuse-purple)] shrink-0">
      <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 20c1-4 3.5-6 7-6s6 2 7 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}
function SparkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[var(--aimuse-gold)] shrink-0">
      <path d="M12 3l1.6 4.8L18 9.5l-4.4 1.7L12 16l-1.6-4.8L6 9.5l4.4-1.7L12 3z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  )
}
