export default function Retainers() {
  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-birch px-8 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40">
      <div className="max-w-2xl">
        <h2 className="text-[56px] lg:text-[64px] leading-[1.05] font-black text-mallard tracking-tight mb-10">
          Retainers.
        </h2>
        <p className="text-[15px] text-mallard leading-relaxed">
          Simple monthly plans. Details coming soon —{' '}
          <a
            href="#contact"
            onClick={scrollToContact}
            className="underline underline-offset-2 decoration-mallard/50 hover:decoration-mallard transition-colors"
          >
            get in touch
          </a>{' '}
          and I'll walk you through it.
        </p>
      </div>
    </section>
  )
}
