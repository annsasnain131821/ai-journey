import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import { projects } from '../../data/projects'
import Button from '../common/Button'

const Projects = () => {
  return (
    <section id="projects" className="border-t border-slate-900/80 bg-slate-950/95 py-20">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="Premium digital work"
          description="Highlighted case studies and crafted interfaces that combine deliberate structure with immersive clarity."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 transition hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900/90">
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-slate-800/80 px-4 py-2 text-xs uppercase tracking-[0.26em] text-cyan-300">
                  Featured
                </span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-800/90 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

              <Button className="mt-8" variant="outline" href={project.href}>
                View details
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects
