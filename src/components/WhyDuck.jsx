import { useInView } from '../hooks/useInView'
import { reveal } from '../utils/reveal'

export default function WhyDuck() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className="relative bg-speculum px-8 md:px-16 lg:px-24 pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40 overflow-hidden"
    >
      <div style={reveal(inView, 0)}>
        <span className="text-[11px] font-semibold tracking-[0.3em] text-birch/40 uppercase">
          04 — The Studio
        </span>
      </div>

      <h2
        style={reveal(inView, 0.12)}
        className="mt-10 md:mt-14 text-[72px] md:text-[100px] lg:text-[128px] leading-[0.92] font-black text-birch tracking-tight"
      >
        Why the
        <br />
        duck?
      </h2>

      {/* Body far right — dramatic whitespace to the left */}
      <div
        style={reveal(inView, 0.28)}
        className="mt-12 md:mt-16 md:ml-[50%] max-w-[16rem]"
      >
        <p className="text-[15px] text-birch/70 leading-relaxed">
          Calm on the surface. Working hard underneath. That's the job.
        </p>
      </div>
    </section>
  )
}
