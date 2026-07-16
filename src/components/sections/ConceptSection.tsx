import conceptBackground from '../../assets/images/concept-background.png'
import conceptKaka from '../../assets/images/concept-kaka-cropped.png'
import conceptAtmosphere from '../../assets/icons/concept-atmosphere.png'
import conceptCalendar from '../../assets/icons/concept-calendar.png'
import conceptColor from '../../assets/icons/concept-color.png'
import conceptFace from '../../assets/icons/concept-face.png'
import conceptImpression from '../../assets/icons/concept-impression.png'
import conceptNineStar from '../../assets/icons/concept-nine-star.png'
import conceptSukuyo from '../../assets/icons/concept-sukuyo.png'
import conceptZodiac from '../../assets/icons/concept-zodiac.png'
import { SectionReveal } from '../common/SectionReveal'

const LEFT_TAGS = [
  { label: '生年月日', icon: conceptCalendar, tone: 'gold' as const },
  { label: '12星座', icon: conceptZodiac, tone: 'gold' as const },
  { label: '九星気学', icon: conceptNineStar, tone: 'gold' as const },
  { label: '宿曜占星術', icon: conceptSukuyo, tone: 'gold' as const },
]
const RIGHT_TAGS = [
  { label: '顔立ち・骨格', icon: conceptFace, tone: 'purple' as const },
  { label: '雰囲気', icon: conceptAtmosphere, tone: 'purple' as const },
  { label: '似合う色', icon: conceptColor, tone: 'gold' as const },
  { label: '印象タイプ', icon: conceptImpression, tone: 'gold' as const },
]

const LEFT_TAG_POSITIONS = [
  'left-[50px] top-[84px] !w-[176px]',
  'left-[25px] top-[218px] !w-[162px]',
  'left-[5px] top-[340px] !w-[184px]',
  'left-[15px] top-[455px] !w-[196px]',
]

const RIGHT_TAG_POSITIONS = [
  'left-[625px] top-[120px] !w-[208px]',
  'left-[640px] top-[250px] !w-[170px]',
  'left-[655px] top-[380px] !w-[186px]',
  'left-[605px] top-[500px] !w-[206px]',
]

export function ConceptSection() {
  return (
    <section id="concept" className="section-cv relative overflow-hidden py-10 md:py-12 xl:h-[calc(100svh-var(--header-height))] xl:min-h-[calc(100svh-var(--header-height))] xl:py-0">
      <img aria-hidden="true" src={conceptBackground} className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      <div className="relative z-10 mx-auto hidden h-full max-w-[1440px] grid-cols-[520px_1fr] items-center gap-[60px] px-10 xl:grid">
        <SectionReveal className="relative z-10 -mt-8">
          <div className="absolute -left-10 -top-10 text-[var(--aimuse-gold)] text-2xl">✦</div>
          <h2 className="whitespace-nowrap text-[44px] leading-[1.55] font-medium text-[var(--aimuse-deep-purple)]">
            生まれ持つ
            <br />
            「美のポテンシャル」を、
            <br />
            あなたらしい「似合う」へ。
          </h2>
          <div className="mt-8 flex items-center gap-3 text-[var(--aimuse-gold)]">
            <span className="h-px w-40 bg-current opacity-50" />
            <span className="text-2xl">✧</span>
            <span className="h-px w-40 bg-current opacity-50" />
          </div>
          <p className="mt-7 max-w-[490px] text-[15px] leading-[2.25] text-[#6a5d90]">
            AIMUSEは、一人ひとりが持つ個性やリズムをやさしく読み解き、生年月日や星の要素も取り入れながら、本来のあなたに似合う美しさへ導きます。
          </p>
        </SectionReveal>

        <SectionReveal delay={150} className="relative h-[700px] xl:translate-x-[40px] xl:translate-y-[28px]">
          <img src={conceptKaka} alt="AIMUSE コンセプト" className="absolute left-1/2 top-[8px] h-[675px] w-auto -translate-x-1/2 object-contain drop-shadow-[0_30px_60px_rgba(107,70,184,0.2)]" loading="lazy" />
          <div className="pointer-events-none absolute inset-0 z-20">
            {LEFT_TAGS.map((tag, i) => <TagChip key={tag.label} {...tag} className={`!absolute ${LEFT_TAG_POSITIONS[i]}`} />)}
          </div>
          <div className="pointer-events-none absolute inset-0 z-20">
            {RIGHT_TAGS.map((tag, i) => <TagChip key={tag.label} {...tag} className={`!absolute ${RIGHT_TAG_POSITIONS[i]}`} />)}
          </div>
        </SectionReveal>
      </div>

      <div className="pointer-events-none absolute bottom-7 left-10 right-10 z-10 hidden items-center gap-3 text-[var(--aimuse-gold)]/70 xl:flex">
        <span className="h-px flex-1 bg-current" />
        <span className="text-3xl leading-none">◇</span>
        <span className="h-px flex-1 bg-current" />
      </div>

      <div className="relative z-10 mx-auto max-w-[680px] px-6 xl:hidden">
        <SectionReveal>
          <span className="text-lg text-[var(--aimuse-gold)]">✦</span>
          <h2 className="mt-3 text-[30px] leading-[1.45] font-medium text-[var(--aimuse-deep-purple)]">生まれ持つ<br />「美のポテンシャル」を、<br />あなたらしい「似合う」へ。</h2>
          <p className="mt-5 text-[14px] leading-[2] text-[#6a5d90]">AIMUSEは、一人ひとりが持つ個性やリズムをやさしく読み解き、生年月日や星の要素も取り入れながら、本来のあなたに似合う美しさへ導きます。</p>
        </SectionReveal>
        <SectionReveal delay={150} className="relative mt-8">
          <img src={conceptKaka} alt="AIMUSE コンセプト" className="mx-auto h-[560px] w-auto object-contain" loading="lazy" />
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[...LEFT_TAGS, ...RIGHT_TAGS].map((tag) => <TagChip key={tag.label} {...tag} compact />)}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

function TagChip({
  label,
  icon: Icon,
  compact,
  className,
  tone = 'gold',
}: {
  label: string
  icon: string
  compact?: boolean
  className?: string
  tone?: 'gold' | 'purple'
}) {
  return (
    <div className={`feature-chip relative flex h-[84px] w-[190px] items-center gap-3 overflow-visible rounded-[1.15rem] border border-[var(--aimuse-gold)]/55 bg-transparent px-4 py-3 shadow-none ${compact ? 'h-auto w-auto justify-center' : ''} ${className ?? ''}`}>
      <span className={`shrink-0 ${tone === 'purple' ? 'text-[var(--aimuse-purple)]' : 'text-[var(--aimuse-gold)]'}`}>
        <img src={Icon} alt="" className="h-9 w-9 object-contain" />
      </span>
      <span className={`whitespace-nowrap font-heading text-[18px] leading-tight tracking-[0.02em] ${tone === 'purple' ? 'text-[var(--aimuse-deep-purple)]' : 'text-[#75491f]'}`}>{label}</span>
    </div>
  )
}
