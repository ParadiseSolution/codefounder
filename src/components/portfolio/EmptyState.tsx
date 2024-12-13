import { Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function EmptyState() {
    return (
        <div className="min-h-[400px] flex items-center justify-center">
            <div className={cn(
                "max-w-md mx-auto text-center p-8 rounded-xl",
                "border-2 border-dashed border-orange-200",
                "bg-white/50 backdrop-blur-sm"
            )}>
                <Rocket className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-semibold mb-2">
                    Be Our First Success Story
                </h3>
                <p className="text-muted-foreground mb-6">
                    We're a new software company ready to bring your digital vision to life.
                    Your project could be the first showcase in our growing portfolio.
                </p>
                <Button
                    className="rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                    onClick={() => window.location.href = '/contact'}
                >
                    Start Your Project
                </Button>
            </div>
        </div>
    )
} 