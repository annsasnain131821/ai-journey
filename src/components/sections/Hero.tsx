import { motion } from 'framer-motion'
import heroImg from '../../assets/hero.png'

const Hero = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-3 rounded-full border border-slate-700/70 bg-slate-900/90 px-4 py-2 text-sm text-cyan-300"
              >
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                <span>Crafting polished digital experiences for modern brands</span>
              </motion.div>

              <div className="space-y-6">
                <motion.div
                  className="max-w-2xl space-y-4"
                  initial="hidden"
                  animate="visible"
                  variants={{ hidden: { opacity: 0 }, visible: { transition: { staggerChildren: 0.12 } } }}
                >
                  <motion.p variants={itemVariants} className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                    Hi, I’m Asnain Anns
                  </motion.p>
                  <motion.h1
                    variants={itemVariants}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl font-semibold tracking-tight text-white sm:text-6xl"
                  >
                    Building modern interfaces with React, TypeScript & Tailwind
                  </motion.h1>
                  <motion.p variants={itemVariants} className="text-lg leading-8 text-slate-300 sm:text-xl">
                    I design and develop responsive web products that feel refined, performant, and intuitive on every device.
                  </motion.p>
                </motion.div>

                <motion.div
                  className="flex flex-col gap-4 sm:flex-row"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.a
                    href="#projects"
                    whileHover={{ y: -6, scale: 1.02, boxShadow: '0 20px 45px -18px rgba(34,211,238,0.45)' }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:w-auto"
                  >
                    View Projects
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={{ y: -6, scale: 1.02, borderColor: 'rgba(34,211,238,0.45)' }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300 sm:w-auto"
                  >
                    Contact Me
                  </motion.a>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="relative mx-auto w-full max-w-xl"
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{ duration: 6, delay: 0.2, ease: [0.22, 1, 0.36, 1], repeat: Infinity, repeatType: 'mirror' }}
            >
              <motion.div
                className="pointer-events-none absolute -inset-x-6 -top-6 -bottom-6 rounded-[2rem] bg-cyan-500/10 blur-3xl"
                animate={{ y: [0, -12, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-3 shadow-[0_30px_120px_-50px_rgba(14,165,233,0.45)]">
                <img
                  src={heroImg}
                  alt="Profile"
                  className="h-full w-full rounded-[1.75rem] object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
