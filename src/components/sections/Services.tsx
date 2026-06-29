import Container from '../common/Container'
import Reveal from '../common/Reveal'
import SectionTitle from '../common/SectionTitle'
import ServiceCard from '../common/ServiceCard'
import { services } from '../../data/services'

const Services = () => {
  return (
    <section id="services" className="border-t border-slate-900/80 bg-slate-950/95 py-20">
      <Container>
        <Reveal>
          <SectionTitle
            title="Services"
            subtitle="Premium SaaS solutions"
            description="Four focused offerings designed to help teams ship polished product experiences with confidence."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={0.08 + index * 0.06}>
              <ServiceCard
                title={service.title}
                description={service.description}
                Icon={service.icon}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services
