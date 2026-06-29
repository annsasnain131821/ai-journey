import Container from '../common/Container'
import TechStackSection from '../common/TechStackSection'
import { skills } from '../../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="border-t border-slate-900/80 bg-slate-950/95 py-20">
      <Container>
        <TechStackSection
          items={skills}
          title="Skills"
          subtitle="Modern toolkit"
          description="A curated set of skills for building premium frontend experiences with quality, consistency, and speed."
        />
      </Container>
    </section>
  )
}

export default Skills
