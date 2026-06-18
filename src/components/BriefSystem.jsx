import { useInView } from '../hooks/useInView'
import { reveal } from '../utils/reveal'

export default function BriefSystem() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className="relative bg-mallard px-8 md:px-16 lg:px-24 pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40 overflow-hidden"
    >
      <div style={reveal(inView, 0)}>
        <span className="text-[11px] font-semibold tracking-[0.3em] text-birch/40 uppercase">
          02 — The Brief
        </span>
      </div>

      <h2
        style={reveal(inView, 0.12)}
        className="mt-10 md:mt-14 text-[72px] md:text-[100px] lg:text-[128px] leading-[0.92] font-black text-birch tracking-tight max-w-4xl"
      >
        Better ads start with a better brief.
      </h2>

      <div
        style={reveal(inView, 0.28)}
        className="mt-12 md:mt-16 max-w-md"
      >
        <p className="text-[15px] text-birch/70 leading-relaxed">
          Vague briefs make boring ads. We pull the right thinking
          out before anyone opens software. Objective, Strategy,
          Idea, Insight — every job, every time.
        </p>
      </div>
    </section>
  )
}
