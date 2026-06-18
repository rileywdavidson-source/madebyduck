import { useInView } from '../hooks/useInView'
import { reveal } from '../utils/reveal'

export default function Retainers() {
  const [ref, inView] = useInView()

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      className="relative bg-onyx px-8 md:px-16 lg:px-24 pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40 overflow-hidden"
    >
      <div style={reveal(inView, 0)}>
        <span className="text-[11px] font-semibold tracking-[0.3em] text-birch/40 uppercase">
          05 — Pricing
        </span>
      </div>

      <h2
        style={reveal(inView, 0.12)}
        className="mt-10 md:mt-14 text-[72px] md:text-[100px] lg:text-[128px] leading-[0.92] font-black text-birch tracking-tight"
      >
        Retainers.
      </h2>

      <div
        style={reveal(inView, 0.28)}
        className="mt-12 md:mt-16 max-w-sm"
      >
        <p className="text-[15px] text-birch/70 leading-relaxed">
          Simple monthly plans. Details coming soon —{' '}
          <a
            href="#contact"
            onClick={scrollToContact}
            className="text-birch underline underline-offset-4 decoration-birch/30 hover:decoration-birch transition-colors duration-200"
          >
            get in touch
          </a>
          {' '}and I'll walk you through it.
        </p>
      </div>
    </section>
  )
}
