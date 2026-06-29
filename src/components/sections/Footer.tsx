import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Container from '../common/Container'

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-slate-900/80 bg-slate-950/95 py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.65fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Contact</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to build your next premium product?</h2>
            <p className="max-w-2xl text-base leading-8 text-slate-400">
              I work with startups, founders, and product teams to create modern interfaces with thoughtful interactions and a polished SaaS feel.
            </p>
            <a
              href="mailto:annsmushtaq2917@gmail.com"
              className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/15"
            >
              annsmushtaq2917@gmail.com
            </a>
          </div>

          <div className="grid gap-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-[0_30px_120px_-80px_rgba(14,165,233,0.45)]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Quick links</p>
              <div className="mt-6 grid gap-3 text-sm text-slate-300">
                <a href="#about" className="transition hover:text-white">About</a>
                <a href="#services" className="transition hover:text-white">Services</a>
                <a href="#statistics" className="transition hover:text-white">Statistics</a>
                <a href="#skills" className="transition hover:text-white">Tech Stack</a>
                <a href="#contact" className="transition hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Stay connected</p>
              <div className="mt-5 flex items-center gap-4 text-cyan-300">
                <a href="https://github.com" aria-label="GitHub" className="transition hover:text-white"><FaGithub className="h-5 w-5" /></a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="transition hover:text-white"><FaLinkedin className="h-5 w-5" /></a>
                <a href="https://twitter.com" aria-label="Twitter" className="transition hover:text-white"><FaTwitter className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
