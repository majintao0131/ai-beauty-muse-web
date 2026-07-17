import { useEffect, useState, type ReactNode } from 'react'
import step1Photo from '../../assets/images/page5/page5-step1-photo.png'
import faceShapeIcon from '../../assets/images/page5/page5-face-shape-icon.png'
import step4Photo from '../../assets/images/page5/page5-step4-main.png'
import step4Thumb1 from '../../assets/images/page5/page5-step4-thumb-layered.png'
import step4Thumb2 from '../../assets/images/page5/page5-step4-thumb-wave.png'
import step4Thumb3 from '../../assets/images/page5/page5-step4-thumb-airy.png'
import step5Avatar from '../../assets/images/page5/page5-step5-avatar.png'
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
    <section className="process-page-bg section-cv relative overflow-hidden py-14 md:py-20 xl:min-h-[calc(100svh-var(--header-height))] xl:py-0">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:flex xl:h-full xl:flex-col xl:justify-center">
        <SectionReveal className="text-center">
          <h2 className="font-heading text-[28px] leading-[1.45] font-medium tracking-[0.08em] text-[var(--aimuse-deep-purple)] md:text-[42px] xl:text-[50px]">
            見た目だけの美容から、
            <br />
            「私だけに似合う」理由を知る美容へ。
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3 text-[var(--aimuse-gold)]">
            <span className="h-px w-20 bg-current opacity-60" />
            <span>✦</span>
            <span className="h-px w-20 bg-current opacity-60" />
          </div>
          <p className="font-heading mt-6 text-[15px] leading-[1.9] tracking-[0.04em] text-[#514274] md:text-[17px]">
            AIMUSEは、髪型をただ着せ替えるアプリではありません。
            <br className="hidden md:block" />
            AIがあなたの髪型・顔型・雰囲気を総合分析、あなたに似合うヘアスタイルを提案します。
          </p>
        </SectionReveal>

        <div className="mt-10 flex items-stretch gap-2 overflow-x-auto pb-4 md:mt-12 xl:mt-10 xl:justify-center xl:overflow-visible">
          <Step no="01" title="見る" delay={0}>
            <div className="rounded-xl overflow-hidden ring-1 ring-white/60">
              <img src={step1Photo} alt="見る" className="h-[210px] w-full object-cover" loading="lazy" />
            </div>
            <div className="mt-4">
              <CheckItem label="顔まわりを確認しました" large />
            </div>
          </Step>

          <Arrow />

          <Step no="02" title="診断する" delay={120}>
            <DonutStep />
            <div className="process-step2-checks flex flex-1 flex-col justify-around gap-3 py-2">
              <CheckItem label="運気を分析中" />
              <CheckItem label="顔型を分析中" />
              <CheckItem label="雰囲気を分析中" />
            </div>
          </Step>

          <Arrow />

          <Step no="03" title="似合うを知る" delay={240}>
            <div className="process-step3-body flex flex-1 flex-col justify-between gap-4">
              <InfoRow label="顔型" value="卵型フェイス" icon={<img src={faceShapeIcon} alt="" className="h-10 w-10 object-contain" />} />
              <div className="w-full">
                <p className="font-heading text-[12px] tracking-wide text-[#756592]">カラー</p>
                <div className="mt-2 grid w-full grid-cols-4 items-center justify-items-center gap-2">
                  {LAVENDER_MOCHA.map((c) => (
                    <span key={c} className="h-9 w-9 rounded-full ring-1 ring-white/80 shadow-[0_3px_8px_rgba(107,70,184,0.18)]" style={{ background: c }} />
                  ))}
                </div>
                <p className="font-heading mt-2 text-[13px] text-[var(--aimuse-deep-purple)]">ラベンダーモカ</p>
              </div>
              <div>
                <p className="font-heading text-[12px] tracking-wide text-[#756592]">印象</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {['やわらかい', '華やか', '透明感'].map((t) => (
                    <span key={t} className="font-heading rounded-full bg-white/60 px-2.5 py-1 text-[12px] text-[var(--aimuse-purple-deep)] ring-1 ring-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Step>

          <Arrow />

          <Step no="04" title="試す" delay={360}>
            <div className="rounded-xl overflow-hidden ring-1 ring-white/60">
              <img src={step4Photo} alt="試す" className="h-[175px] w-full object-cover" loading="lazy" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {[
                { img: step4Thumb1, label: 'レイヤーボブ' },
                { img: step4Thumb2, label: '韓国風ウェーブ' },
                { img: step4Thumb3, label: 'エアリーショート' },
              ].map((t) => (
                <div key={t.label}>
                  <div className="rounded-lg overflow-hidden ring-1 ring-white/60">
                    <img src={t.img} alt={t.label} className="h-[64px] w-full object-cover" loading="lazy" />
                  </div>
                  <p className="font-heading mt-1 text-center text-[11px] leading-tight text-[#514274]">{t.label}</p>
                </div>
              ))}
            </div>
          </Step>

          <Arrow />

          <Step no="05" title="美容師に伝える" delay={480}>
            <div className="process-step5-body flex flex-1 flex-col justify-between gap-3">
              <div className="flex items-center gap-3">
                <img src={step5Avatar} alt="" className="h-16 w-16 rounded-full object-cover ring-1 ring-white/70" loading="lazy" />
                <div>
                  <p className="font-heading text-[13px] text-[#756592]">希望スタイル</p>
                  <p className="font-heading text-[15px] text-[var(--aimuse-deep-purple)]">韓国風ウェーブ</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-heading text-[13px] text-[#756592]">ヘアカラー</p>
                <span className="h-4 w-4 rounded-full" style={{ background: '#9d76a7' }} />
                <p className="font-heading text-[14px] text-[var(--aimuse-deep-purple)]">ラベンダーモカ</p>
              </div>
              <div>
                <p className="font-heading text-[13px] text-[#756592]">スタイリストへのメモ</p>
                <div className="mt-2 space-y-2">
                  <CheckItem label="やわらかな動きのあるカール" small />
                  <CheckItem label="顔まわりにレイヤーを入れたい" small />
                  <CheckItem label="透明感のあるカラー希望" small />
                </div>
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
    <SectionReveal delay={delay} className="min-w-[238px] xl:w-[238px] xl:min-w-0">
      <GlowCard className={`process-card process-card-${no} flex h-full min-h-[430px] flex-col justify-between gap-3 p-4 md:p-5`}>
        <p className="text-center">
          <span className="text-[var(--aimuse-gold)] text-xs">✦ </span>
          <span className="font-display text-2xl text-[var(--aimuse-purple-deep)]">{no}</span>
          <span className="text-[var(--aimuse-gold)] text-xs"> ✦</span>
        </p>
        <h3 className="process-card-title font-heading text-center text-[24px] font-semibold tracking-[0.12em] text-[var(--aimuse-deep-purple)]">{title}</h3>
        {children}
      </GlowCard>
    </SectionReveal>
  )
}

function Arrow() {
  return (
    <div className="flex w-5 shrink-0 items-center justify-center text-[var(--aimuse-gold)] opacity-80">
      <svg width="18" height="32" viewBox="0 0 18 32" fill="none">
        <path d="M3 4l10 12-10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function CheckItem({ label, small, large }: { label: string; small?: boolean; large?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`shrink-0 rounded-full bg-[var(--aimuse-purple)]/15 text-[var(--aimuse-purple)] grid place-items-center ${small ? 'w-4 h-4' : 'w-5 h-5'}`}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={`font-heading ${large ? 'text-[16px]' : small ? 'text-[13px]' : 'text-[14px]'} leading-[1.45] text-[#514274]`}>{label}</span>
    </div>
  )
}

function InfoRow({ label, value, icon }: { label: string; value: string; icon: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[var(--aimuse-purple)]">{icon}</span>
      <div>
        <p className="font-heading text-[13px] tracking-[0.08em] text-[#756592]">{label}</p>
        <p className="font-heading text-[15px] text-[var(--aimuse-deep-purple)]">{value}</p>
      </div>
    </div>
  )
}

function DonutStep() {
  const { ref, visible } = useDonutIntersection()
  const value = useCountUp(62, visible)
  const circumference = 2 * Math.PI * 34
  const offset = circumference * (1 - value / 100)

  return (
    <div ref={ref} className="relative mx-auto h-[132px] w-[132px]">
      <svg width="132" height="132" viewBox="0 0 84 84" className="-rotate-90">
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
          <p className="text-[28px] font-medium text-[var(--aimuse-purple-deep)]">
            {value}
            <span className="text-[14px]">%</span>
          </p>
          <p className="font-heading text-[11px] text-[#756592]">分析中…</p>
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
