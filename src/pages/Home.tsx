import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Hero from '../components/sections/Hero'
import Navbar from '../components/layout/Navbar'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import StatsSection from '../components/common/StatsSection'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <section className="border-t border-slate-900/80 bg-slate-950/95 py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <StatsSection
              title="Impact"
              subtitle="By the numbers"
              description="A snapshot of the work, growth, and quality I bring to every build."
              items={[
                { value: 24, label: 'Projects' },
                { value: 12, label: 'Technologies' },
                { value: 1800, suffix: '+', label: 'Learning Hours' },
                { value: 98, suffix: '%', label: 'Client Satisfaction' },
              ]}
            />
          </div>
        </section>
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer id="footer" className="border-t border-slate-900/80 bg-slate-950/95 px-6 py-16 text-center text-slate-400 sm:px-8 lg:px-10">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Footer</p>
        <p className="mt-4 max-w-2xl mx-auto text-base leading-7">
          This is a placeholder footer for the premium portfolio layout. Add brand details, social links, or copyright information here.
        </p>
      </footer>
    </>
  )
}

export default Home
