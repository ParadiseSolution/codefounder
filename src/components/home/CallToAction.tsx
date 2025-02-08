import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CallToAction() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-orange-50/50" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f97316_0.1%,#ffffff33_0.2%,#ffffff33_50%,#f97316_50.1%,#ffffff33_50.2%,#ffffff33_100%)] bg-[length:60px_60px] opacity-10" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={cn(
          "rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 p-8 md:p-12",
          "shadow-lg border border-white/20 backdrop-blur-sm"
        )}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Launch Your Startup in 30 Days
              </h2>
              <p className="text-orange-50 text-sm md:text-base mb-6">
                Partner with experienced developers who are committed to bringing your vision to life. We focus on one project at a time to ensure quality delivery.
              </p>
              
              {/* Availability Indicator */}
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-orange-50 w-fit mb-4">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Only 1 Project Slot Available</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-orange-50 w-fit mb-8">
                <span className="text-sm font-semibold">🔥 Next Project Starts July 1st</span>
              </div>
              
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 rounded-full w-full sm:w-auto font-semibold"
              >
                Schedule Your Free Consultation →
              </Button>
            </div>
            
            {/* Value Propositions */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "30 Days", label: "MVP Development Time" },
                { value: "100%", label: "Dedicated Focus" },
                { value: "24/7", label: "Developer Access" },
                { value: "Free", label: "Initial Consultation" }
              ].map((stat) => (
                <div 
                  key={stat.label} 
                  className="bg-white/10 rounded-lg p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-orange-50 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
