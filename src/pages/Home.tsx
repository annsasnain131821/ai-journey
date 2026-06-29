import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Hero from '../components/sections/Hero'
import Navbar from '../components/layout/Navbar'
import Projects from '../components/sections/Projects'
import Services from '../components/sections/Services'
import Skills from '../components/sections/Skills'
import Statistics from '../components/sections/Statistics'
import Footer from '../components/sections/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Services />
        <Statistics />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
