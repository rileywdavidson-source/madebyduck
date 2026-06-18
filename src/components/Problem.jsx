import { useInView } from '../hooks/useInView'
import { reveal } from '../utils/reveal'

export default function Problem() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className="relative bg-chestnut px-8 md:px-16 lg:px-24 pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40 overflow-hidden"
    >
      <div style={reveal(inView, 0)}>
        <span className="text-[11px] font-semibold tracking-[0.3em] text-birch/40 uppercase">
          01 — The Problem
        </span>
      </div>

      <h2
        style={reveal(inView, 0.12)}
        className="mt-10 md:mt-14 text-[72px] md:text-[100px] lg:text-[128px] leading-[0.92] font-black text-birch tracking-tight"
      >
        Marketing
        <br />
        <span className="text-beak">≠</span>
        <br />
        advertising.
      </h2>

      {/* Body offset right on desktop — editorial column tension */}
      <div
        style={reveal(inView, 0.28)}
        className="mt-12 md:mt-16 md:ml-[38%] max-w-xs md:max-w-sm"
      >
        <p className="text-[15px] text-birch/70 leading-relaxed">
          One plans the campaign. The other makes the thing people
          actually stop for. Ask one person to do both and the
          creative gets shortchanged — every time.
        </p>
      </div>
    </section>
  )
}
