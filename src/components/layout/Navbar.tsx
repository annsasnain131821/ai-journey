import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiBars3 } from 'react-icons/hi2'
import MobileMenu from './MobileMenu'
import { NAV_ITEMS } from '../../constants/nav'
import Button from '../common/Button'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const active = NAV_ITEMS.find((item) => item.href === `#${id}`)
            if (active) {
              setActiveLink(active.label)
            }
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.2 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-3xl transition-all duration-500 ${
        scrolled ? 'shadow-[0_24px_120px_-48px_rgba(15,23,42,0.7)]' : 'shadow-none'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="text-lg font-semibold uppercase tracking-[0.32em] text-white transition hover:text-cyan-300 sm:text-xl">
          Asnain Anns
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setActiveLink(item.label)}
              whileHover={{ y: -2, scale: 1.02 }}
              className="relative text-sm font-medium text-slate-400 transition hover:text-white"
            >
              <span className={activeLink === item.label ? 'text-white' : ''}>{item.label}</span>
              <span
                className={`absolute inset-x-0 -bottom-3 h-[2px] rounded-full bg-cyan-400 transition-all ${
                  activeLink === item.label ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}
              />
            </motion.a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="outline" size="sm" href="#contact">
            Hire Me
          </Button>
        </div>

        <button
          type="button"
          aria-label="Open Menu"
          onClick={() => setMenuOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/90 text-slate-200 shadow-sm transition hover:border-cyan-400 hover:text-white md:hidden"
        >
          <HiBars3 className="h-5 w-5" />
        </button>
      </div>

      <MobileMenu
        open={menuOpen}
        activeLink={activeLink}
        items={NAV_ITEMS}
        onClose={() => setMenuOpen(false)}
        onSelect={(label) => setActiveLink(label)}
      />
    </motion.header>
  )
}

export default Navbar
