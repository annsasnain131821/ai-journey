import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import { skills } from '../../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="border-t border-slate-900/80 bg-slate-950/95 py-20">
      <Container>
        <SectionTitle
          title="Skills"
          subtitle="Modern toolkit"
          description="A curated set of skills for building premium frontend experiences with quality, consistency, and speed."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill} className="rounded-[1.8rem] border border-slate-800/80 bg-slate-900/80 px-5 py-6 text-center text-slate-200 transition hover:border-cyan-500/40 hover:text-white">
              <p className="text-base font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
