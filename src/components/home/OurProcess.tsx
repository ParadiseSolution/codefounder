import { Code2, Lightbulb, Palette, Rocket, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery",
    description: "Understanding your goals, target audience, and project requirements through in-depth consultation."
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating wireframes and visual designs that align with your brand and user experience objectives."
  },
  {
    icon: Code2,
    title: "Development",
    description: "Building your website with clean, efficient code and modern technologies for optimal performance."
  },
  {
    icon: Settings,
    title: "Testing",
    description: "Rigorous quality assurance across devices and browsers to ensure flawless functionality."
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploying your website with careful attention to security and performance optimization."
  },
  {
    icon: Users,
    title: "Support",
    description: "Providing ongoing maintenance and updates to keep your website running smoothly."
  }
]

export function OurProcess() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
            Our Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            A systematic approach to bringing your digital vision to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className={cn(
                "relative p-6 rounded-lg border-2 bg-white/50 backdrop-blur-sm",
                "transition-all duration-300 hover:shadow-lg hover:border-orange-300",
                "flex flex-col items-center text-center"
              )}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white text-sm font-bold">
                  {index + 1}
                </span>
              </div>
              <step.icon className="h-10 w-10 mb-4 text-orange-600" />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}