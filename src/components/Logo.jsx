// PLACEHOLDER — swap this file for the real SVG logo when ready.
// Rendered at ~44px tall wherever it appears.

export default function Logo({ size = 44 }) {
  const width = Math.round(size * 2.6)

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 104 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Creative Duck logo placeholder"
      role="img"
    >
      {/* Duck body */}
      <ellipse cx="38" cy="24" rx="18" ry="13" fill="#1B5533" />
      {/* Duck head */}
      <circle cx="56" cy="14" r="9" fill="#1B5533" />
      {/* Beak */}
      <polygon points="65,13 74,16 65,19" fill="#FF6D2D" />
      {/* Eye */}
      <circle cx="59" cy="12" r="1.8" fill="#FFF3D6" />
      {/* Tail */}
      <path d="M20 20 Q12 14 16 26 Z" fill="#1B5533" />

      {/* Wordmark */}
      <text
        x="78"
        y="28"
        fontFamily="Figtree, sans-serif"
        fontWeight="800"
        fontSize="11"
        fill="#1B5533"
        letterSpacing="-0.3"
      >
        DUCK
      </text>
      {/* PLACEHOLDER label — remove when replacing with real SVG */}
      <rect
        x="0"
        y="33"
        width="104"
        height="7"
        rx="2"
        fill="#FF6D2D"
        opacity="0.15"
      />
      <text
        x="52"
        y="38.5"
        textAnchor="middle"
        fontFamily="Figtree, sans-serif"
        fontSize="5"
        fill="#FF6D2D"
        letterSpacing="0.5"
        fontWeight="600"
      >
        PLACEHOLDER — SWAP SVG
      </text>
    </svg>
  )
}
