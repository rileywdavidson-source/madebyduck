import Logo from './components/Logo'
import Grain from './components/Grain'
import Marquee from './components/Marquee'
import Problem from './components/Problem'
import BriefSystem from './components/BriefSystem'
import GoodAds from './components/GoodAds'
import WhyDuck from './components/WhyDuck'
import Retainers from './components/Retainers'
import Contact from './components/Contact'

function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen bg-birch flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Top bar — logo only */}
      <div className="absolute top-8 left-8 md:top-10 md:left-16 lg:left-24">
        <Logo size={44} />
      </div>

      {/* Hero content — left-aligned, vertically centred */}
      <div className="max-w-5xl">
        <h1 className="text-[80px] md:text-[110px] lg:text-[150px] leading-[0.9] font-black text-mallard tracking-tight">
          Ad creative built on advertising principles.
        </h1>

        <p className="text-[15px] text-mallard mt-8 mb-12 opacity-70 max-w-xs">
          Better briefs. Better ads.
        </p>

        <a
          href="#contact"
          onClick={scrollToContact}
          className="inline-block bg-beak text-birch font-semibold text-[15px] rounded-full px-8 py-3.5 transition-colors hover:bg-beak-hover active:scale-[0.98]"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-onyx px-8 md:px-16 lg:px-24 py-8 flex items-center gap-4">
      <Logo size={24} />
      <span className="text-[11px] text-birch tracking-wide opacity-40">
        madebyduck.com
      </span>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Grain />
      <Hero />
      <Problem />
      <Marquee />
      <BriefSystem />
      <GoodAds />
      <WhyDuck />
      <Retainers />
      <Contact />
      <Footer />
    </>
  )
}
