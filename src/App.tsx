import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { label: '产品功能', href: '#features' },
  { label: '如何体验', href: '#cta' },
]

const FEATURES = [
  {
    key: 'face',
    title: '面部分析',
    desc: '脸型识别、五官与比例分析、面相解读，以及当日幸运色与妆容建议。',
    icon: '◇',
  },
  {
    key: 'color',
    title: '色彩诊断',
    desc: '个人色彩类型、适合与避免色、妆发色推荐，助你选对四季型。',
    icon: '◆',
  },
  {
    key: 'body',
    title: '身材风格',
    desc: '身材类型、扬长避短、廓形与穿搭建议，输入三围即可获得分析。',
    icon: '▣',
  },
  {
    key: 'hair',
    title: '发型发色',
    desc: '3 款发型 + 3 款发色推荐，AI 换发/换色效果图，可生成理发师沟通卡。',
    icon: '✦',
  },
  {
    key: 'lab',
    title: 'AI 实验室',
    desc: '发色实验一键试色、自由指令改发型/发色，玩转形象可能。',
    icon: '✧',
  },
  {
    key: 'destiny',
    title: '命理运势',
    desc: '八字、喜用神、今日运势与幸运色、场合建议，为决策添一份参考。',
    icon: '◎',
  },
  {
    key: 'daily',
    title: '每日能量',
    desc: '当日干支、五行能量、幸运色、穿搭与妆容要点，每日打开获取指引。',
    icon: '◉',
  },
  {
    key: 'reports',
    title: '历史报告',
    desc: '所有 AI 结果自动落地为报告，支持列表、筛选、详情与删除。',
    icon: '◈',
  },
  {
    key: 'landing',
    title: '全面落地建议',
    desc: '综合脸型、色彩、身材、命理与当日能量，生成可执行行动清单。',
    icon: '◇',
  },
]

function useVisible(ref: React.RefObject<HTMLElement | null>, once = true) {
  const [visible, setVisible] = useState(false)
  const done = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el || (once && done.current)) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        setVisible(true)
        if (once) done.current = true
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, once])
  return visible
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--color-cream)]/95 backdrop-blur-md shadow-sm' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-display text-xl font-semibold text-[var(--color-ink)]">
          AI Beauty Muse
        </a>
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-gold)]"
            >
              {label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-cream)] transition-all hover:bg-[var(--color-gold)]"
          >
            立即体验
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  const ref = useRef<HTMLElement>(null)
  const visible = useVisible(ref)
  return (
    <section
      ref={ref}
      className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-24 text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,var(--color-gold-muted),transparent_50%)]" />
      <div className="relative z-10 max-w-3xl">
        <p
          className={`mb-4 font-body text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-gold)] opacity-0 transition-all duration-700 ${
            visible ? 'animate-fade-up opacity-100' : ''
          }`}
        >
          智能美学与形象顾问
        </p>
        <h1
          className={`font-display text-4xl font-semibold leading-tight text-[var(--color-ink)] opacity-0 transition-all duration-700 md:text-5xl lg:text-6xl ${
            visible ? 'animate-fade-up animate-delay-1 opacity-100' : ''
          }`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          让 AI 读懂你的美
        </h1>
        <p
          className={`mt-6 text-lg text-[var(--color-ink-muted)] opacity-0 transition-all duration-700 md:text-xl ${
            visible ? 'animate-fade-up animate-delay-2 opacity-100' : ''
          }`}
        >
          面部分析、色彩诊断、发型发色、命理运势与每日能量，一站式形象与运势顾问。
        </p>
        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-4 opacity-0 transition-all duration-700 ${
            visible ? 'animate-fade-up animate-delay-3 opacity-100' : ''
          }`}
        >
          <a
            href="#cta"
            className="rounded-full bg-[var(--color-gold)] px-8 py-3.5 font-medium text-[var(--color-cream)] transition-all hover:bg-[var(--color-gold-light)] hover:shadow-lg"
          >
            下载 APP 体验
          </a>
          <a
            href="#features"
            className="rounded-full border-2 border-[var(--color-ink)] px-8 py-3.5 font-medium text-[var(--color-ink)] transition-all hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)]"
          >
            了解功能
          </a>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const ref = useRef<HTMLElement>(null)
  const visible = useVisible(ref)
  return (
    <section id="features" ref={ref} className="border-t border-[var(--color-cream-dark)] bg-white/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className={`text-center opacity-0 transition-all duration-700 ${visible ? 'animate-fade-up opacity-100' : ''}`}>
          <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)] md:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            产品功能
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-[var(--color-ink-muted)]">
            基于 AI 的全面美学与形象分析，从面相到色彩、从发型到运势，为你提供可执行的建议。
          </p>
        </div>
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <li
              key={f.key}
              className={`group rounded-2xl border border-[var(--color-cream-dark)] bg-[var(--color-cream)]/50 p-6 transition-all duration-300 hover:border-[var(--color-gold-muted)] hover:shadow-lg opacity-0 ${
                visible ? 'animate-fade-up opacity-100' : ''
              }`}
              style={{ animationDelay: `${0.05 * Math.min(i, 6)}s` }}
            >
              <span className="text-2xl text-[var(--color-gold)] transition-transform group-hover:scale-110">
                {f.icon}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-display)' }}>
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {f.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CTA() {
  const ref = useRef<HTMLElement>(null)
  const visible = useVisible(ref)
  return (
    <section
      id="cta"
      ref={ref}
      className="relative overflow-hidden border-t border-[var(--color-cream-dark)] py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-burgundy-muted)_0%,var(--color-gold-muted)_100%)]" />
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <h2
          className={`font-display text-3xl font-semibold text-[var(--color-ink)] opacity-0 transition-all duration-700 md:text-4xl ${
            visible ? 'animate-fade-up opacity-100' : ''
          }`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          开启你的美学之旅
        </h2>
        <p
          className={`mt-4 text-[var(--color-ink-muted)] opacity-0 transition-all duration-700 ${
            visible ? 'animate-fade-up animate-delay-1 opacity-100' : ''
          }`}
        >
          手机号登录，免费体验部分功能；开通会员享受更高次数与完整体验。
        </p>
        <div
          className={`mt-10 opacity-0 transition-all duration-700 ${
            visible ? 'animate-fade-up animate-delay-2 opacity-100' : ''
          }`}
        >
          <a
            href="#"
            className="inline-block rounded-full bg-[var(--color-gold)] px-10 py-4 font-medium text-[var(--color-cream)] transition-all hover:bg-[var(--color-gold-light)] hover:shadow-xl"
          >
            下载 APP
          </a>
          <p className="mt-4 text-sm text-[var(--color-ink-muted)]">
            支持 iOS / Android，首次登录即自动注册
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-cream-dark)] bg-[var(--color-ink)] py-12 text-[var(--color-cream)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <span className="font-display text-lg font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
            AI Beauty Muse
          </span>
          <div className="flex gap-8 text-sm text-[var(--color-cream)]/80">
            <a href="#features" className="transition-colors hover:text-[var(--color-gold-light)]">产品功能</a>
            <a href="#cta" className="transition-colors hover:text-[var(--color-gold-light)]">立即体验</a>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-[var(--color-cream)]/60">
          智能美学与形象顾问 · 面部分析 · 色彩诊断 · 发型发色 · 命理运势 · 每日能量
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
