import { Code } from "lucide-react"
import { NavigationLinks } from "./NavigationLinks"
import { MobileMenu } from "./MobileMenu"

export function Navigation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="max-w-7xl mx-auto bg-white/70 backdrop-blur-lg shadow-lg rounded-full border border-white/20">
        <div className="px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Code className="h-6 w-6 text-orange-600" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
                CodeFounder
              </span>
            </div>
            <NavigationLinks />
            <MobileMenu />
          </div>
        </div>
      </nav>
    </div>
  )
}