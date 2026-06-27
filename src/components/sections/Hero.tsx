import heroImg from '../../assets/hero.png'

const Hero = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-700/70 bg-slate-900/90 px-4 py-2 text-sm text-cyan-300">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                <span>Crafting polished digital experiences for modern brands</span>
              </div>
              <div className="space-y-6">
                <div className="max-w-2xl space-y-4">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Hi, I’m Asnain Anns</p>
                  <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                    Building modern interfaces with React, TypeScript & Tailwind
                  </h1>
                  <p className="text-lg leading-8 text-slate-300 sm:text-xl">
                    I design and develop responsive web products that feel refined, performant, and intuitive on every device.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:w-auto"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300 sm:w-auto"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="pointer-events-none absolute -inset-x-6 -top-6 -bottom-6 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-3 shadow-[0_30px_120px_-50px_rgba(14,165,233,0.45)]">
                <img
                  src={heroImg}
                  alt="Profile"
                  className="h-full w-full rounded-[1.75rem] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
