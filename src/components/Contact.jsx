import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { reveal } from '../utils/reveal'

export default function Contact() {
  const [ref, inView] = useInView()
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) =>
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        ...fields,
      }).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setError(true))
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-mallard px-8 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-lg">
        {submitted ? (
          <div style={reveal(inView, 0)}>
            <p className="text-[15px] text-birch font-semibold mb-2">
              Message received.
            </p>
            <p className="text-[15px] text-birch opacity-70">
              We'll be in touch shortly.
            </p>
          </div>
        ) : (
          <>
            <h2 style={reveal(inView, 0)} className="text-[72px] md:text-[100px] lg:text-[128px] leading-[0.92] font-black text-birch mb-6 tracking-tight">
              Let's talk.
            </h2>
            <p style={reveal(inView, 0.14)} className="text-[15px] text-birch mb-10 opacity-70">
              Tell us about your brief and we'll take it from there.
            </p>

            <form
              style={reveal(inView, 0.28)}
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              {/* Required hidden field for Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-[11px] font-semibold text-birch tracking-widest uppercase"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={fields.name}
                  onChange={handleChange}
                  className="bg-transparent border border-birch/30 rounded-lg px-4 py-3 text-[15px] text-birch placeholder:text-birch/40 focus:outline-none focus:border-birch transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[11px] font-semibold text-birch tracking-widest uppercase"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={fields.email}
                  onChange={handleChange}
                  className="bg-transparent border border-birch/30 rounded-lg px-4 py-3 text-[15px] text-birch placeholder:text-birch/40 focus:outline-none focus:border-birch transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-[11px] font-semibold text-birch tracking-widest uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={fields.message}
                  onChange={handleChange}
                  className="bg-transparent border border-birch/30 rounded-lg px-4 py-3 text-[15px] text-birch placeholder:text-birch/40 focus:outline-none focus:border-birch transition-colors resize-none"
                  placeholder="Tell us about your project…"
                />
              </div>

              {error && (
                <p className="text-[13px] text-beak">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                className="self-start bg-beak text-birch font-semibold text-[15px] rounded-full px-8 py-3.5 transition-colors hover:bg-beak-hover active:scale-[0.98] cursor-pointer"
              >
                Send
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}
