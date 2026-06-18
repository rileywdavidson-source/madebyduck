const STRIP =
  'AD CREATIVE — THE BRIEF — THE IDEA — THE WORK — MADEBYDUCK.COM — '

export default function Marquee() {
  return (
    <div
      className="bg-beak overflow-hidden py-3.5 select-none"
      aria-hidden="true"
    >
      {/* Two copies — marquee animates -50% so it loops seamlessly */}
      <div
        style={{ animation: 'marquee 22s linear infinite', display: 'flex', width: 'max-content' }}
      >
        <span className="text-[11px] font-black tracking-[0.28em] text-birch whitespace-nowrap">
          {STRIP.repeat(6)}
        </span>
        <span className="text-[11px] font-black tracking-[0.28em] text-birch whitespace-nowrap">
          {STRIP.repeat(6)}
        </span>
      </div>
    </div>
  )
}
