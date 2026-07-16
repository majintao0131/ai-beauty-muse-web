import type { ReactNode } from 'react'
import contactQr from '../../assets/images/contact-qr.jpg'
import { GlowCard } from '../common/GlowCard'
import { SectionReveal } from '../common/SectionReveal'

const contactPhone = '/mobile_app-phone-transparent.webp'

const BOTTOM_ICONS = [
  { label: '公式LINE', desc: '最新情報をお届け', icon: IconLine },
  { label: 'メール相談', desc: 'ご質問・ご相談に対応', icon: IconMail },
  { label: 'SNS更新', desc: 'X / Instagram / YouTube', icon: IconShare },
  { label: '先行案内', desc: '公開情報をお知らせ', icon: IconBell },
]

export function ContactSection() {
  return (
    <section id="contact" className="section-cv relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-32 xl:h-[calc(100svh-var(--header-height))] xl:min-h-[calc(100svh-var(--header-height))] xl:py-0">
      <div className="relative z-[1] mx-auto max-w-[1380px] px-6 md:px-8 xl:h-full">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.06fr] xl:gap-6 xl:pt-14">
          <div className="pt-4 xl:pt-2">
            <SectionReveal>
              <p className="text-[14px] tracking-[0.12em] text-[var(--aimuse-gold)]">
                <span className="mr-2 text-xl">✦</span>公式LINE / お問い合わせ
              </p>
              <h2 className="mt-12 font-heading text-[42px] md:text-[56px] leading-none font-medium tracking-wide text-[var(--aimuse-deep-purple)] xl:mt-8">AIMUSEとつながる</h2>
              <p className="mt-6 text-[14px] md:text-[15px] text-[#5c4f82] xl:mt-4">サービスは現在、正式公開に向けて準備中です。</p>
            </SectionReveal>

            <SectionReveal delay={100}>
              <GlowCard className="mt-14 min-h-[278px] rounded-[1.75rem] border border-white/80 bg-white/65 p-7 shadow-[0_24px_60px_-28px_rgba(107,70,184,0.38)] md:p-8 xl:mt-8 xl:p-7">
                <div className="flex h-full items-center gap-7 md:gap-9">
                  <div className="qr-frame h-[190px] w-[190px] shrink-0 overflow-hidden rounded-2xl p-2">
                    <img src={contactQr} alt="AIMUSE 公式LINE QRコード" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="min-w-0 flex-1 border-l border-[var(--aimuse-gold)]/35 pl-7 md:pl-9">
                    <div className="flex items-start gap-3">
                      <IconLineBadge />
                      <div>
                        <p className="text-[15px] font-medium text-[var(--aimuse-deep-purple)]">公式LINEでお問い合わせ</p>
                        <p className="mt-2 text-[12px] text-[#6a5d90]">QRコードを読み取ってご連絡ください。</p>
                      </div>
                    </div>
                    <div className="my-6 h-px bg-[var(--aimuse-gold)]/25" />
                    <div className="flex items-start gap-3">
                      <IconMail />
                      <div>
                        <p className="text-[15px] font-medium text-[var(--aimuse-deep-purple)]">メールでのお問い合わせ</p>
                        <p className="mt-2 break-all text-[14px] text-[var(--aimuse-purple-deep)]">aimusejapan@outlook.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </SectionReveal>
          </div>

          <SectionReveal delay={140} className="relative min-h-[494px] xl:min-h-[484px]">
            <GlowCard className="min-h-[494px] rounded-[1.75rem] border border-white/80 bg-white/62 p-8 pr-[230px] shadow-[0_24px_65px_-28px_rgba(107,70,184,0.4)] md:p-9 md:pr-[250px] xl:min-h-[484px] xl:p-7 xl:pr-[230px]">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--aimuse-purple)] px-4 py-2 text-[13px] text-white shadow-[0_8px_18px_rgba(107,70,184,0.28)]">
                ✦ Private Beta
              </span>
              <h3 className="mt-10 whitespace-nowrap font-heading text-[27px] md:text-[31px] font-medium text-[var(--aimuse-deep-purple)] xl:mt-7">正式公開に向けて準備中</h3>
              <p className="mt-4 text-[14px] text-[#6a5d90] xl:mt-3">最新情報は公式LINE・SNSでお知らせします。</p>

              <div className="mt-7 flex flex-col gap-4 xl:mt-5 xl:gap-3">
                <StoreButton icon={<AppleIcon />} title="App Store" subtitle="近日公開予定" />
                <StoreButton icon={<PlayIcon />} title="Google Play" subtitle="近日公開予定" />
              </div>

              <div className="mt-7 border-t border-[var(--aimuse-gold)]/30 pt-5 xl:mt-5 xl:pt-4">
                <div className="flex items-start justify-between gap-3 text-[var(--aimuse-purple-deep)]">
                  <SocialIcon label="X"><XIcon /></SocialIcon>
                  <SocialIcon label="Instagram"><InstagramIcon /></SocialIcon>
                  <SocialIcon label="YouTube"><YoutubeIcon /></SocialIcon>
                </div>
              </div>
            </GlowCard>

            <div className="absolute right-3 top-7 hidden lg:block">
              <img src={contactPhone} alt="AIMUSEアプリ" className="relative w-[200px] xl:w-[210px]" loading="lazy" />
            </div>
            <div className="mt-8 flex justify-center lg:hidden">
              <img src={contactPhone} alt="AIMUSEアプリ" className="w-[170px]" loading="lazy" />
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={300} className="relative left-1/2 mt-10 w-screen -translate-x-1/2 border-y border-white/70 bg-white/18 px-6 py-6 md:mt-9 md:px-8 md:py-5 xl:mt-6 xl:py-3">
          <div className="mx-auto grid max-w-[1240px] grid-cols-2 md:grid-cols-4">
            {BOTTOM_ICONS.map((b) => (
              <div key={b.label} className="flex items-center justify-center gap-3 border-b border-[var(--aimuse-purple)]/15 px-3 py-4 last:border-b-0 md:border-b-0 md:border-r md:py-2 md:last:border-r-0 xl:gap-2">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-[var(--aimuse-gold)]/60 bg-white/55 text-[var(--aimuse-purple)] [&>svg]:h-6 [&>svg]:w-6 md:h-[72px] md:w-[72px] xl:h-16 xl:w-16">
                  <b.icon />
                </span>
                <span>
                  <span className="block text-[13px] font-medium text-[var(--aimuse-deep-purple)]">{b.label}</span>
                  <span className="mt-1 block text-[11px] text-[#8577a8]">{b.desc}</span>
                </span>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={380} className="border-b border-white/60 py-7 text-center text-[13px] text-[#6a5d90] xl:py-3">
          <span className="mr-3 text-[var(--aimuse-gold)]">✦</span>AIMUSEは、正式公開に向けて準備を進めています。最新情報は公式LINEとSNSでお知らせします。<span className="ml-3 text-[var(--aimuse-gold)]">✦</span>
        </SectionReveal>

        <div className="flex flex-col items-center justify-between gap-3 pt-5 text-[11px] text-[#9a8fc0] md:flex-row xl:pt-3">
          <span className="font-display tracking-[0.2em]">AIMUSE</span>
          <span>© {new Date().getFullYear()} AIMUSE. All rights reserved.</span>
        </div>
      </div>
    </section>
  )
}

function StoreButton({ icon, title, subtitle }: { icon: ReactNode; title: string; subtitle: string }) {
  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className="flex h-[68px] w-[274px] items-center gap-4 rounded-[13px] bg-[#171526] px-6 text-white cursor-default opacity-95"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center">{icon}</span>
      <span className="text-left">
        <span className="block text-[17px] font-medium leading-tight">{title}</span>
        <span className="block text-[11px] text-white/75">{subtitle}</span>
      </span>
    </button>
  )
}

function SocialIcon({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span className="flex flex-col items-center gap-1.5 group cursor-pointer">
      <span className="text-[var(--aimuse-purple-deep)] transition-transform duration-500 group-hover:scale-110 group-hover:text-[var(--aimuse-gold)] [&>svg]:h-6 [&>svg]:w-6">{children}</span>
      <span className="text-[10px] text-[#8577a8]">{label}</span>
    </span>
  )
}

function IconLine() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="13" rx="4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 15V9M8 15l3-6M11 15V9M14 15V9h3.5M14 12h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function IconLineBadge() {
  return (
    <span className="relative mt-0.5 grid h-8 w-11 shrink-0 place-items-center rounded-full bg-[var(--aimuse-purple)] text-[10px] font-medium text-white after:absolute after:bottom-[-4px] after:left-2 after:border-[4px] after:border-transparent after:border-t-[var(--aimuse-purple)] after:rotate-[18deg]">LINE</span>
  )
}
function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[var(--aimuse-purple)] shrink-0">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 6.5l8 6 8-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function IconShare() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="17" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="17" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8.2 10.8L14.8 7.2M8.2 13.2l6.6 3.6" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}
function IconBell() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M6 17h12l-1.5-2V11a4.5 4.5 0 00-9 0v4L6 17z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M10 19.5a2 2 0 004 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 1.5c.1 1.1-.3 2.1-1 2.9-.7.8-1.8 1.4-2.9 1.3-.1-1 .4-2.1 1-2.8.8-.8 2-1.4 2.9-1.4zM20.7 17.2c-.4 1-.9 1.9-1.6 2.8-.9 1.2-1.8 2.5-3.3 2.5-1.4 0-1.9-.9-3.5-.9s-2.1.9-3.5.9c-1.4 0-2.4-1.2-3.4-2.5-1.7-2.3-3-6.5-1.2-9.4.9-1.4 2.4-2.3 4.1-2.3 1.4 0 2.3.9 3.5.9 1.1 0 1.9-1 3.5-1 1.2 0 2.5.7 3.4 1.8-3 1.6-2.5 5.9 1 7.2z" />
    </svg>
  )
}
function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 3.5l14 8.5-14 8.5v-17z" fill="url(#playGrad)" stroke="none" />
      <defs>
        <linearGradient id="playGrad" x1="4" y1="3.5" x2="18" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E1FF" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#F97316" />
        </linearGradient>
      </defs>
    </svg>
  )
}
function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3l7.5 9.5L3.3 21H6l6-6.8 4.8 6.8H21l-8-10.2L20.4 3H18l-5.5 6.2L8 3H3z" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  )
}
function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" />
    </svg>
  )
}
