import { ProjectCard } from "./ProjectCard"
import { EmptyState } from "./EmptyState"

const projects = [
] // Your projects array will go here when you have projects

export function PortfolioGrid() {
  const hasProjects = projects.length > 0

  if (!hasProjects) {
    return <EmptyState />
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project) => (
        <ProjectCard 
          key={project.title}
          {...project}
        />
      ))}
    </div>
  )
}