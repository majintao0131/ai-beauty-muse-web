import whyCard1 from '../../assets/images/why-card1.jpg'
import whyCard2 from '../../assets/images/why-card2.jpg'
import whyCard3 from '../../assets/images/why-card3.jpg'
import { GlowCard } from '../common/GlowCard'
import { SectionReveal } from '../common/SectionReveal'

const CARDS = [
  { no: '01', title: '流行 ≠ 似合う', desc: 'SNSで見た髪型やメイクが、私に合うとは限りません。', img: whyCard1 },
  { no: '02', title: '選択肢 ≠ 答え', desc: '色、服、メイク、髪型。情報が増えるほど、選べなくなる。', img: whyCard2 },
  { no: '03', title: '誰かの正解 ≠ 私だけの正解', desc: 'AIMUSEは、他人の基準ではなく、あなた自身に似合う美しさを見つけます。', img: whyCard3 },
]

export function WhySection() {
  return (
    <section className="section-cv relative py-12 md:py-16 xl:min-h-[780px] xl:py-8">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        <SectionReveal as="h2" className="text-center text-[28px] md:text-[40px] xl:text-[42px] leading-[1.25] font-medium text-[var(--aimuse-deep-purple)]">
          なぜ、私には「似合う」がわからないの？
        </SectionReveal>

        <div className="mt-8 md:mt-9 grid md:grid-cols-3 gap-4 md:gap-5 xl:gap-6">
          {CARDS.map((card, i) => (
            <SectionReveal key={card.no} delay={i * 140}>
              <GlowCard className="h-full flex flex-col p-5 md:p-6 xl:p-6">
                <span className="font-display text-[30px] leading-none text-[var(--aimuse-gold)]">{card.no}<span className="ml-1 text-[18px]">✦</span></span>
                <h3 className="mt-2 text-[21px] md:text-[22px] xl:text-[23px] font-medium leading-tight text-[var(--aimuse-deep-purple)]">{card.title}</h3>
                <p className="mt-2 text-[13px] xl:text-[12px] leading-[1.7] text-[#6a5d90] min-h-[42px]">{card.desc}</p>
                <div className="mt-4 rounded-2xl overflow-hidden ring-1 ring-white/60">
                  <img src={card.img} alt={card.title} className="w-full h-[300px] md:h-[300px] xl:h-[342px] object-cover" loading="lazy" />
                </div>
              </GlowCard>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={350} className="mt-8 xl:mt-7 text-center text-[18px] md:text-[21px] leading-[1.75] text-[var(--aimuse-deep-purple)]">
          <p>
            AIMUSEは、流行をそのまま提案せず、
            <br className="md:hidden" />
            あなたに<span className="text-[var(--aimuse-gold)] font-medium">似合う理由</span>から、美しさを提案します。
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
