import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'

const About = () => {
  return (
    <section id="about" className="border-t border-slate-900/80 bg-slate-950/95 py-20">
      <Container>
        <SectionTitle
          title="About"
          subtitle="Purpose-driven product craft"
          description="I create elevated web products with clean visuals, clear hierarchy, and an intentional focus on user experience. My goal is to blend polished design language with modern frontend performance."
        />

        <div className="mt-14 grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-[0_30px_120px_-80px_rgba(14,165,233,0.45)]">
            <p className="text-base leading-8 text-slate-300">
              I partner with visionary teams and founders to bring digital products to life. Every project is crafted with an attention to detail that supports a premium brand experience, whether it’s a launch landing page, dashboard, or application interface.
            </p>
            <p className="text-base leading-8 text-slate-300">
              My process is grounded in deliberate structure, thoughtful typography, and seamless responsiveness across desktop, tablet, and mobile.
            </p>
            <Button variant="secondary" href="#projects">
              Explore Projects
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { label: 'Years of experience', value: '5+' },
              { label: 'Projects shipped', value: '18' },
              { label: 'Design systems', value: '6' },
              { label: 'Trusted brands', value: '8' },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-slate-800/80 bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{item.label}</p>
                <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
