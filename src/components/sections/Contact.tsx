import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'

const Contact = () => {
  return (
    <section id="contact" className="border-t border-slate-900/80 bg-slate-950/95 py-20">
      <Container>
        <SectionTitle
          title="Contact"
          subtitle="Let’s create something memorable"
          description="Available for new collaborations, product work, and design system engagements. Reach out and let’s start the conversation."
        />

        <div className="mt-14 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-10">
            <p className="text-base leading-8 text-slate-300">
              Whether you need a focused landing page, a polished dashboard, or a full product interface, I deliver premium web experiences designed for growth and clarity.
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <p>
                <span className="font-semibold text-slate-100">Email:</span> annsmushtaq2917@gmail.com
              </p>
              <p>
                <span className="font-semibold text-slate-100">Location:</span> Remote / Worldwide
              </p>
            </div>
            <Button variant="primary" href="mailto:annsmushtaq2917@gmail.com">
              Say hello
            </Button>
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-10">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Quick message</p>
              <h3 className="text-2xl font-semibold text-white">Let’s build a next-gen web presence together.</h3>
              <p className="text-slate-300">Fast, refined, and ready to scale. I’m available for freelance and full-time collaborations.</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Branding', 'UI/UX', 'Product strategy', 'Performance'].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-800/80 bg-slate-950/80 px-5 py-4 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
