import { Code2, Rocket, LineChart, Wrench } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web solutions built with modern technologies and best practices."
  },
  {
    icon: LineChart,
    title: "Digital Strategy",
    description: "Comprehensive SEO and marketing strategies to boost your online presence."
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimization for speed, accessibility, and user experience."
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Ongoing support and updates to keep your digital assets running smoothly."
  }
]

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive digital solutions to help your business thrive online.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="border-2 hover:border-orange-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <CardHeader>
                <service.icon className="h-8 w-8 md:h-10 md:w-10 mb-4 text-orange-600" />
                <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm md:text-base">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}