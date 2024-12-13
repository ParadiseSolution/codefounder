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
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-orange-50 text-sm md:text-base mb-6">
                Let's collaborate to create something extraordinary. Our expert team is ready to bring your vision to life.
              </p>
              
              {/* Availability Indicator */}
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-orange-50 w-fit mb-8">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">3 Project Slots Available</span>
              </div>
              
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 rounded-full w-full sm:w-auto"
              >
                Schedule Consultation
              </Button>
            </div>
            
            {/* Stats/Trust Indicators */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support Available" },
                { value: "5★", label: "Average Rating" }
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