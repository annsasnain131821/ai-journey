import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiMail, FiUser, FiUsers, FiCheckCircle } from 'react-icons/fi'
import heroImg from '../../assets/hero.png'
import Button from '../common/Button'
import Container from '../common/Container'
import PersonalInfoGrid from '../common/PersonalInfoGrid'
import Reveal from '../common/Reveal'
import SectionTitle from '../common/SectionTitle'

const aboutItems = [
  { label: 'Name', value: 'Asnain Anns', icon: FiUser },
  { label: 'Role', value: 'Frontend Engineer', icon: FiUsers },
  { label: 'Location', value: 'Remote / Worldwide', icon: FiMapPin },
  { label: 'Experience', value: '5+ years', icon: FiCalendar },
  { label: 'Email', value: 'annsmushtaq2917@gmail.com', icon: FiMail },
  { label: 'Availability', value: 'Freelance & Full-time', icon: FiCheckCircle },
]

const About = () => {
  return (
    <section id="about" className="border-t border-slate-900/80 bg-slate-950/95 py-20">
      <Container>
        <Reveal>
          <SectionTitle
            title="About Me"
            subtitle="Premium frontend craft"
            description="I build polished SaaS interfaces with React, TypeScript, and Tailwind. My work is focused on clarity, performance, and refined product experiences."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <Reveal delay={0.08} className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-4 shadow-[0_30px_120px_-80px_rgba(14,165,233,0.45)]">
            <div className="pointer-events-none absolute -left-8 top-6 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-8 h-28 w-28 rounded-full bg-slate-100/5 blur-3xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-950/95 p-3"
            >
              <img
                src={heroImg}
                alt="Asnain Anns portrait"
                className="h-full w-full rounded-[1.75rem] object-cover object-center"
              />
            </motion.div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.12}>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-[0_30px_120px_-80px_rgba(14,165,233,0.45)]"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Professional introduction</p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  I design premium SaaS experiences using modern frontend tools.
                </h2>
                <p className="text-base leading-8 text-slate-300">
                  With a focus on thoughtful interactions, scalable components, and performance-first code, I partner with teams to build web applications that feel fast, refined, and connected to business outcomes.
                </p>
                <p className="text-base leading-8 text-slate-300">
                  From landing pages to product dashboards, I help teams ship interfaces that communicate quality, usability, and confidence across every screen.
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <Button variant="primary" href="/resume.pdf">
                    Download CV
                  </Button>
                  <Button variant="outline" href="#contact">
                    Contact Me
                  </Button>
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.16}>
              <PersonalInfoGrid items={aboutItems} />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
