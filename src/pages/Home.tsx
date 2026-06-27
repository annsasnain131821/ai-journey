import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Hero from '../components/sections/Hero'
import Navbar from '../components/layout/Navbar'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
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
