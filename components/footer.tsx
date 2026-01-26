"use client"

import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = ["Home", "About", "Features", "Projects", "Contact"]

  return (
    <footer id="contact" className="bg-background border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
              <img src="/SDK.png" alt="SDK Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-lg">SDK Solutions</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Building the future of software, one line of code at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/share/1M5nmWsDmR/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

      </div>
      
      {/* Simple Copyright */}
      <div className="mt-12 text-center text-sm text-muted-foreground border-t border-border pt-8">
        <p>© {currentYear} SDK Solutions. All rights reserved.</p>
      </div>
    </footer>
  )
}
