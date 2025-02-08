import { NavigationLinks } from "./NavigationLinks"
import { MobileMenu } from "./MobileMenu"
import { getBaseUrl } from "@/lib/utils"

export default function NavigationHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="max-w-7xl mx-auto bg-white/70 backdrop-blur-sm shadow-lg rounded-2xl bg-opacity-80 border border-black">
        <div className="px-6 py-3">
          <div className="flex justify-between items-center">
            <a href={getBaseUrl("/")}>
              <div className="flex items-center space-x-2">
                <img src={getBaseUrl("/codefounder.png")} alt="CodeFounder" className="h-6 w-6" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
                  CodeFounder
                </span>
              </div>
            </a>
            <NavigationLinks />
            
            <MobileMenu />
          </div>
        </div>
      </nav>
    </div>
  )
}