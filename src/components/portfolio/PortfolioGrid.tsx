import { ProjectCard } from "./ProjectCard"
import { EmptyState } from "./EmptyState"

const projects = [
  {
    title: 'FlashLearn',
    description: 'Using AI to create flashcards from your documents',
    imageUrl: 'https://flashlearn-nine.vercel.app/default-opengraph.png',
    previewUrl: 'https://flashlearn-nine.vercel.app/',
    sourceCodeUrl: 'https://github.com/xavieroyj/flashlearn',
    technologies: ['Next.JS App Router', 'Artificial Intelligence', 'TailwindCSS', 'Postgresql'],
    category: 'Web Development'
  },
]

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