/**
 * Logo La Sam Gastronomia
 * variant="dark"  → fundo verde escuro, texto dourado (footer)
 * variant="light" → fundo transparente, texto verde (header com scroll)
 * variant="hero"  → fundo transparente, texto dourado (header sobre hero escuro)
 *
 * PLACEHOLDER: substituir pelo arquivo de logo real quando disponível
 */
export default function Logo({ variant = 'dark', className = '', size = 'md' }) {
  const sizes = {
    sm: { width: 120, height: 48, scriptSize: 22, labelSize: 8 },
    md: { width: 160, height: 64, scriptSize: 28, labelSize: 9 },
    lg: { width: 200, height: 80, scriptSize: 34, labelSize: 10 },
  }

  const s = sizes[size] || sizes.md

  const styles = {
    dark: { bg: '#1a3a2e', text: '#e8dcc3' },
    light: { bg: 'transparent', text: '#1a3a2e' },
    hero: { bg: 'transparent', text: '#e8dcc3' },
  }

  const { bg, text } = styles[variant] || styles.dark

  return (
    <svg
      width={s.width}
      height={s.height}
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="La Sam Gastronomia"
      role="img"
    >
      <rect width="200" height="80" rx="8" fill={bg} />
      <text
        x="100"
        y="42"
        textAnchor="middle"
        fill={text}
        fontFamily="'Dancing Script', cursive"
        fontSize={s.scriptSize}
        fontWeight="700"
      >
        La Sam
      </text>
      <text
        x="100"
        y="62"
        textAnchor="middle"
        fill={text}
        fontFamily="Inter, sans-serif"
        fontSize={s.labelSize}
        fontWeight="600"
        letterSpacing="3"
      >
        GASTRONOMIA
      </text>
    </svg>
  )
}
