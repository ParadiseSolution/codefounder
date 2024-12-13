import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <div className={cn(
      "min-h-[100svh] md:min-h-screen flex flex-col items-center justify-center",
      "text-center px-4 hero-pattern hero-grid relative overflow-hidden"
    )}>
      <div className="max-w-4xl mx-auto py-20 md:py-0 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-green-400">
          CodeFounder
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Building exceptional digital experiences through strategic development and optimization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="w-full sm:w-auto rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
          >
            Our Services
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto rounded-full border-orange-600/20 hover:bg-orange-600/5"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  )
}