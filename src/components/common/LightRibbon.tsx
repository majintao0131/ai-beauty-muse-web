interface LightRibbonProps {
  className?: string
  color?: string
  path?: string
  viewBox?: string
}

export function LightRibbon({
  className = '',
  color = 'var(--aimuse-gold)',
  path = 'M0,60 C150,10 300,110 450,50 C600,-10 750,90 900,40',
  viewBox = '0 0 900 120',
}: LightRibbonProps) {
  return (
    <div className={`light-ribbon ${className}`} aria-hidden="true">
      <svg viewBox={viewBox} fill="none" preserveAspectRatio="none">
        <path d={path} stroke={color} strokeWidth="1" opacity="0.5" />
        <path className="light-ribbon__path" d={path} stroke={color} strokeWidth="1.5" opacity="0.9" />
      </svg>
    </div>
  )
}
