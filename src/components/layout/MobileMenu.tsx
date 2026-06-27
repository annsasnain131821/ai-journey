import { AnimatePresence, motion } from 'framer-motion'
import { BsX } from 'react-icons/bs'

interface MenuItem {
  label: string
  href: string
}

interface MobileMenuProps {
  open: boolean
  items: MenuItem[]
  activeLink: string
  onClose: () => void
  onSelect: (label: string) => void
}

const MobileMenu = ({ open, items, activeLink, onClose, onSelect }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="absolute right-0 top-0 h-full w-full max-w-[420px] border-l border-white/10 bg-slate-950/95 px-6 py-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="text-lg font-semibold uppercase tracking-[0.28em] text-white">Menu</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-slate-200 transition hover:border-cyan-400 hover:text-white"
              >
                <BsX className="h-5 w-5" />
              </button>
            </div>

            <nav className="space-y-4">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    onSelect(item.label)
                    onClose()
                  }}
                  className={`block rounded-[1.75rem] border px-5 py-4 text-base transition ${
                    activeLink === item.label
                      ? 'border-cyan-500/30 bg-cyan-500/10 text-white'
                      : 'border-slate-800/90 text-slate-300 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-10 rounded-[1.75rem] border border-slate-800/80 bg-slate-900/90 p-5 text-slate-300">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Premium portfolio</p>
              <p className="mt-3 text-base leading-7">
                Smooth mobile navigation with polished spacing and a premium glass aesthetic.
              </p>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default MobileMenu
