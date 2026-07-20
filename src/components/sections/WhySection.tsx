import whyCard1 from '../../assets/images/page2/why-card-01-height@4x.png'
import whyCard2 from '../../assets/images/page2/why-card-02-height@4x.png'
import whyCard3 from '../../assets/images/page2/why-card-03-height@4x.png'
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

        <div className="mt-8 md:mt-9 flex flex-wrap items-start justify-center gap-3 md:gap-4 xl:mt-4 xl:gap-2">
          {CARDS.map((card, i) => (
            <SectionReveal key={card.no} delay={i * 140}>
              <div className="group flex h-[380px] w-fit cursor-pointer items-center justify-center transition-transform duration-500 ease-out hover:-translate-y-1 xl:h-[460px]">
                <img src={card.img} alt={card.title} className="block h-full w-auto max-w-full object-contain transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.025] group-hover:drop-shadow-[0_18px_28px_rgba(107,70,184,0.28)] xl:max-w-none" loading="lazy" />
              </div>
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
