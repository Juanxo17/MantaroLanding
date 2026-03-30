/**
 * Logo Component - Genera un logo SVG para Mantaro Ginebra
 * Logo tribal/precolombino circular
 */
export default function LogoSVG({ size = 200, className = '' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="logoBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C8A96E" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#F5C518" stopOpacity="0.05" />
        </radialGradient>
        <filter id="logoGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Fondo circular */}
      <circle cx="100" cy="100" r="95" fill="url(#logoBg)" stroke="#C8A96E" strokeWidth="2" />

      {/* Círculo interior más oscuro */}
      <circle cx="100" cy="100" r="85" fill="#1a1008" opacity="0.3" stroke="#C8A96E" strokeWidth="1" />

      {/* Patrón tribal - diamantes */}
      <g fill="none" stroke="#C8A96E" strokeWidth="1.5" opacity="0.7">
        {/* Diamante central grande */}
        <path d="M 100 40 L 140 80 L 100 120 L 60 80 Z" />
        {/* Diamantes pequeños en las esquinas */}
        <path d="M 80 70 L 90 75 L 85 85 L 75 80 Z" />
        <path d="M 120 70 L 130 75 L 125 85 L 115 80 Z" />
        <path d="M 80 120 L 90 125 L 85 135 L 75 130 Z" />
        <path d="M 120 120 L 130 125 L 125 135 L 115 130 Z" />
      </g>

      {/* Líneas ornamentales horizontales */}
      <g stroke="#F5C518" strokeWidth="1" opacity="0.6">
        <line x1="50" y1="100" x2="70" y2="100" />
        <line x1="130" y1="100" x2="150" y2="100" />
        <line x1="100" y1="50" x2="100" y2="70" />
        <line x1="100" y1="130" x2="100" y2="150" />
      </g>

      {/* Centro decorativo - flor/sol */}
      <circle cx="100" cy="100" r="20" fill="none" stroke="#F5C518" strokeWidth="1.5" opacity="0.8" />
      <circle cx="100" cy="100" r="12" fill="#F5C518" opacity="0.4" />
      <circle cx="100" cy="100" r="8" fill="#C8A96E" />

      {/* Pétalos alrededor */}
      <g fill="#F5C518" opacity="0.6">
        <circle cx="100" cy="75" r="3" />
        <circle cx="125" cy="100" r="3" />
        <circle cx="100" cy="125" r="3" />
        <circle cx="75" cy="100" r="3" />
      </g>

      {/* Texto "MANTARO" en el círculo (opcional, texto SVG es complicado, mejor con estilos) */}
      <text
        x="100"
        y="165"
        textAnchor="middle"
        fill="#C8A96E"
        fontSize="12"
        fontFamily="Cinzel, serif"
        fontWeight="bold"
        letterSpacing="2"
      >
        MANTARO
      </text>
    </svg>
  );
}
