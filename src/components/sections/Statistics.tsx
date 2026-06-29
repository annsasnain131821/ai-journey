import Container from '../common/Container'
import StatsSection from '../common/StatsSection'
import { stats } from '../../data/stats'

const Statistics = () => {
  return (
    <section id="statistics" className="border-t border-slate-900/80 bg-slate-950/95 py-20">
      <Container>
        <StatsSection
          title="Statistics"
          subtitle="Real results"
          description="Key metrics that reflect execution, expertise, and product maturity across every project."
          items={stats}
        />
      </Container>
    </section>
  )
}

export default Statistics
