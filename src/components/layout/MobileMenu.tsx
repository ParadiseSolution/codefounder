import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useActivePath } from "@/hooks/useActivePath"
import { cn, getBaseUrl } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const links = [
  { href: getBaseUrl(""), label: "Home" },
  { href: getBaseUrl("services"), label: "Services" },
  { href: getBaseUrl("portfolio"), label: "Portfolio" },
  { href: getBaseUrl("contact"), label: "Contact" },
]

export function MobileMenu() {
  const currentPath = useActivePath()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden rounded-full hover:text-orange-600"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <SheetHeader>
          <SheetTitle className="text-left">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8">
          {links.map((link) => {
            const isActive = currentPath === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium px-4 py-2 rounded-lg",
                  "transition-all duration-300 ease-in-out relative group",
                  isActive 
                    ? "text-orange-600 bg-orange-50" 
                    : "hover:text-orange-600 hover:bg-orange-50"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full bg-orange-600",
                  "transition-all duration-300 ease-in-out",
                  isActive ? "h-4/5" : "h-0 group-hover:h-1/2"
                )} />
              </a>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}