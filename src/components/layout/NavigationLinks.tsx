import { Button } from "@/components/ui/button"
import { useActivePath } from "@/hooks/useActivePath"
import { cn, getBaseUrl } from "@/lib/utils"

const links = [
  { href: getBaseUrl("/"), label: "Home" },
  { href: getBaseUrl("services"), label: "Services" },
  { href: getBaseUrl("portfolio"), label: "Portfolio" },
  { href: getBaseUrl("contact"), label: "Contact" },
]

export function NavigationLinks() {
  const currentPath = useActivePath()

  return (
    <div className="hidden md:flex items-center space-x-1">
      {links.map((link) => {
        const isActive = currentPath === link.href
        return (
          <Button
            key={link.href}
            variant="ghost"
            className={cn(
              "text-sm font-medium rounded-full px-4 relative group",
              "transition-colors duration-300 ease-in-out",
              isActive ? "text-orange-600" : "hover:text-orange-600"
            )}
            asChild
          >
            <a href={link.href}>
              {link.label}
              <span className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-orange-600",
                "transition-all duration-300 ease-in-out",
                isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
              )} />
            </a>
          </Button>
        )
      })}
    </div>
  )
}