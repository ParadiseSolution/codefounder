import { Code2, Lightbulb, Palette, Rocket, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    icon: Lightbulb,
    title: "Week 1: Strategy & Design",
    description: "Deep-dive workshops to define your MVP scope and create user-focused designs that investors will love."
  },
  {
    icon: Palette,
    title: "Week 2: Prototype & Validate",
    description: "Transform designs into interactive prototypes. Get early feedback to validate your concept."
  },
  {
    icon: Code2,
    title: "Week 3: MVP Development",
    description: "Rapid development using proven tech stack. Build core features that demonstrate your value proposition."
  },
  {
    icon: Settings,
    title: "Week 4: Test & Optimize",
    description: "Thorough testing across all features. Optimize for performance and user experience."
  },
  {
    icon: Rocket,
    title: "Week 4: Market Launch",
    description: "Deploy your MVP with analytics. Start gathering real user insights for your investor pitch."
  },
  {
    icon: Users,
    title: "Post-Launch Support",
    description: "Ongoing refinements based on user feedback. Regular updates to enhance product-market fit."
  }
]

export function OurProcess() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
            30-Day MVP Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            From concept to launch-ready MVP in just one month
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
