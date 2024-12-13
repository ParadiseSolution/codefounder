import { Code } from "lucide-react"
import { cn } from "@/lib/utils"

const footerLinks = {
  services: [
    { label: "Web Development", href: "/services#web-development" },
    { label: "Digital Strategy", href: "/services#digital-strategy" },
    { label: "Performance", href: "/services#performance" },
    { label: "Maintenance", href: "/services#maintenance" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  social: [
    { label: "Twitter", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ]
}

export function Footer() {
  return (
    <footer className="bg-orange-50/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Code className="h-6 w-6 text-orange-600" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
                  CodeFounder
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building exceptional digital experiences through strategic development and optimization.
              </p>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className={cn(
                        "text-sm text-muted-foreground hover:text-orange-600",
                        "transition-colors duration-200"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className={cn(
                        "text-sm text-muted-foreground hover:text-orange-600",
                        "transition-colors duration-200"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "text-sm text-muted-foreground hover:text-orange-600",
                        "transition-colors duration-200"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeFounder. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-orange-600 transition-colors duration-200"
            >
              Privacy
            </a>
            <a 
              href="/terms"
              className="text-sm text-muted-foreground hover:text-orange-600 transition-colors duration-200"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 