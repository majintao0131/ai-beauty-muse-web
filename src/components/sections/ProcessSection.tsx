import { useEffect, useState, type ReactNode } from 'react'
import step1Photo from '../../assets/images/step1-photo.jpg'
import step4Photo from '../../assets/images/step4-photo.jpg'
import step4Thumb1 from '../../assets/images/step4-thumb1.jpg'
import step4Thumb2 from '../../assets/images/step4-thumb2.jpg'
import step4Thumb3 from '../../assets/images/step4-thumb3.jpg'
import step5Avatar from '../../assets/images/step5-avatar.jpg'
import { GlowCard } from '../common/GlowCard'
import { SectionReveal } from '../common/SectionReveal'

const LAVENDER_MOCHA = ['#9d76a7', '#a2677a', '#7a574e', '#8c7975']

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf: number
    const start = performance.now()
    const duration = 1600
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])
  return value
}

export function ProcessSection() {
  return (
    <section className="section-cv relative py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        <SectionReveal className="text-center">
          <h2 className="text-[26px] md:text-[36px] leading-[1.4] font-medium text-[var(--aimuse-deep-purple)]">
            見た目だけの美容から、
            <br className="md:hidden" />
            「私だけに似合う」理由を知る美容へ。
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3 text-[var(--aimuse-gold)]">
            <span className="h-px w-14 bg-current opacity-50" />
            <span>✦</span>
            <span className="h-px w-14 bg-current opacity-50" />
          </div>
          <p className="mt-5 text-[13px] md:text-[14px] leading-[1.9] text-[#6a5d90]">
            AIMUSEは、髪型をただ着せ替えるアプリではありません。
            <br className="hidden md:block" />
            AIがあなたの髪型・顔型・雰囲気を総合分析、あなたに似合うヘアスタイルを提案します。
          </p>
        </SectionReveal>

        <div className="mt-14 flex flex-col md:flex-row items-stretch gap-4 md:gap-2 overflow-x-auto pb-2">
          <Step no="01" title="見る" delay={0}>
            <div className="rounded-xl overflow-hidden ring-1 ring-white/60">
              <img src={step1Photo} alt="見る" className="w-full h-[170px] object-cover" loading="lazy" />
            </div>
            <CheckItem label="顔まわりを確認しました" />
          </Step>

          <Arrow />

          <Step no="02" title="診断する" delay={120}>
            <DonutStep />
            <CheckItem label="運気を分析中" />
            <CheckItem label="顔型を分析中" />
            <CheckItem label="雰囲気を分析中" />
          </Step>

          <Arrow />

          <Step no="03" title="似合うを知る" delay={240}>
            <InfoRow label="顔型" value="卵型フェイス" icon={<FaceGlyph />} />
            <div>
              <p className="text-[10px] text-[#8577a8] tracking-wide">カラー</p>
              <div className="mt-1.5 flex gap-1.5">
                {LAVENDER_MOCHA.map((c) => (
                  <span key={c} className="w-5 h-5 rounded-full ring-1 ring-white/70" style={{ background: c }} />
                ))}
              </div>
              <p className="mt-1 text-[11px] text-[var(--aimuse-deep-purple)]">ラベンダーモカ</p>
            </div>
            <div>
              <p className="text-[10px] text-[#8577a8] tracking-wide">印象</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {['やわらかい', '華やか', '透明感'].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-white/60 ring-1 ring-white/70 text-[10px] text-[var(--aimuse-purple-deep)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Step>

          <Arrow />

          <Step no="04" title="試す" delay={360}>
            <div className="rounded-xl overflow-hidden ring-1 ring-white/60">
              <img src={step4Photo} alt="試す" className="w-full h-[170px] object-cover" loading="lazy" />
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { img: step4Thumb1, label: 'レイヤーボブ' },
                { img: step4Thumb2, label: '韓国風ウェーブ' },
                { img: step4Thumb3, label: 'エアリーショート' },
              ].map((t) => (
                <div key={t.label}>
                  <div className="rounded-lg overflow-hidden ring-1 ring-white/60">
                    <img src={t.img} alt={t.label} className="w-full h-[58px] object-cover" loading="lazy" />
                  </div>
                  <p className="mt-1 text-[9px] text-center text-[#6a5d90] leading-tight">{t.label}</p>
                </div>
              ))}
            </div>
          </Step>

          <Arrow />

          <Step no="05" title="美容師に伝える" delay={480}>
            <div className="flex items-center gap-3">
              <img src={step5Avatar} alt="" className="w-11 h-11 rounded-full object-cover ring-1 ring-white/70" loading="lazy" />
              <div>
                <p className="text-[10px] text-[#8577a8]">希望スタイル</p>
                <p className="text-[12px] text-[var(--aimuse-deep-purple)]">韓国風ウェーブ</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[10px] text-[#8577a8]">ヘアカラー</p>
              <span className="w-3.5 h-3.5 rounded-full" style={{ background: '#9d76a7' }} />
              <p className="text-[11px] text-[var(--aimuse-deep-purple)]">ラベンダーモカ</p>
            </div>
            <div>
              <p className="text-[10px] text-[#8577a8]">スタイリストへのメモ</p>
              <div className="mt-1 space-y-1">
                <CheckItem label="やわらかな動きのあるカール" small />
                <CheckItem label="顔まわりにレイヤーを入れたい" small />
                <CheckItem label="透明感のあるカラー希望" small />
              </div>
            </div>
          </Step>
        </div>
      </div>
    </section>
  )
}

function Step({ no, title, delay, children }: { no: string; title: string; delay: number; children: ReactNode }) {
  return (
    <SectionReveal delay={delay} className="min-w-[220px] md:min-w-0 md:flex-1">
      <GlowCard className="h-full p-5 flex flex-col gap-3">
        <p className="text-center">
          <span className="text-[var(--aimuse-gold)] text-xs">✦ </span>
          <span className="font-display text-lg text-[var(--aimuse-purple-deep)]">{no}</span>
          <span className="text-[var(--aimuse-gold)] text-xs"> ✦</span>
        </p>
        <h3 className="text-center text-[15px] font-medium text-[var(--aimuse-deep-purple)]">{title}</h3>
        {children}
      </GlowCard>
    </SectionReveal>
  )
}

function Arrow() {
  return (
    <div className="hidden md:flex items-center justify-center text-[var(--aimuse-gold)] opacity-70 px-1">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function CheckItem({ label, small }: { label: string; small?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`shrink-0 rounded-full bg-[var(--aimuse-purple)]/15 text-[var(--aimuse-purple)] grid place-items-center ${small ? 'w-4 h-4' : 'w-5 h-5'}`}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={`${small ? 'text-[10px]' : 'text-[11px]'} text-[#6a5d90]`}>{label}</span>
    </div>
  )
}

function InfoRow({ label, value, icon }: { label: string; value: string; icon: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[var(--aimuse-purple)]">{icon}</span>
      <div>
        <p className="text-[10px] text-[#8577a8]">{label}</p>
        <p className="text-[12px] text-[var(--aimuse-deep-purple)]">{value}</p>
      </div>
    </div>
  )
}

function FaceGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="6" ry="8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function DonutStep() {
  const { ref, visible } = useDonutIntersection()
  const value = useCountUp(62, visible)
  const circumference = 2 * Math.PI * 34
  const offset = circumference * (1 - value / 100)

  return (
    <div ref={ref} className="mx-auto relative w-[104px] h-[104px]">
      <svg width="104" height="104" viewBox="0 0 84 84" className="-rotate-90">
        <circle cx="42" cy="42" r="34" stroke="rgba(107,70,184,0.15)" strokeWidth="7" fill="none" />
        <circle
          cx="42"
          cy="42"
          r="34"
          stroke="url(#donutGrad)"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 200ms linear' }}
        />
        <defs>
          <linearGradient id="donutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--aimuse-purple)" />
            <stop offset="100%" stopColor="var(--aimuse-gold)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <p className="text-[18px] font-medium text-[var(--aimuse-purple-deep)]">
            {value}
            <span className="text-[11px]">%</span>
          </p>
          <p className="text-[8px] text-[#8577a8]">分析中…</p>
        </div>
      </div>
    </div>
  )
}

function useDonutIntersection() {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.5 },
    )
    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref])
  return { ref: setRef, visible }
}
