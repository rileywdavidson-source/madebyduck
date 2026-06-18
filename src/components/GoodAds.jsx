import { useInView } from '../hooks/useInView'
import { reveal } from '../utils/reveal'

export default function GoodAds() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className="relative bg-birch px-8 md:px-16 lg:px-24 pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40 overflow-hidden"
    >
      {/* Label pushed right for contrast with the other sections */}
      <div style={reveal(inView, 0)} className="text-right">
        <span className="text-[11px] font-semibold tracking-[0.3em] text-mallard/40 uppercase">
          03 — The Work
        </span>
      </div>

      <h2
        style={reveal(inView, 0.12)}
        className="mt-10 md:mt-14 text-[72px] md:text-[100px] lg:text-[128px] leading-[0.92] font-black text-onyx tracking-tight"
      >
        Pretty isn't
        <br />
        the point.
      </h2>

      {/* Body aligned to right column */}
      <div
        style={reveal(inView, 0.28)}
        className="mt-12 md:mt-16 md:ml-auto md:mr-0 max-w-xs md:max-w-sm md:text-right"
      >
        <p className="text-[15px] text-mallard/80 leading-relaxed">
          Built to do a job. Looks sharp on the way.
        </p>
      </div>
    </section>
  )
}
