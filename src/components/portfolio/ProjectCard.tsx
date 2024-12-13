import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  previewUrl: string
  sourceCodeUrl?: string
  technologies: string[]
  category: string
}

export function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  previewUrl,
  sourceCodeUrl, 
  technologies,
  category 
}: ProjectCardProps) {
  return (
    <div className={cn(
      "group rounded-xl border-2 bg-white/50 backdrop-blur-sm overflow-hidden",
      "transition-all duration-300 hover:shadow-lg hover:border-orange-300"
    )}>
      {/* Preview Image */}
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={imageUrl} 
            alt={title}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        
        {/* Overlay with actions */}
        <div className={cn(
          "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100",
          "transition-opacity duration-300 flex items-center justify-center gap-4"
        )}>
          <Button 
            size="sm" 
            variant="secondary" 
            className="rounded-full"
            onClick={() => window.open(previewUrl, '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Visit Site
          </Button>
          {sourceCodeUrl && (
            <Button 
              size="sm" 
              variant="secondary" 
              className="rounded-full"
              onClick={() => window.open(sourceCodeUrl, '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              Source Code
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline"
              className="bg-orange-50"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
} 