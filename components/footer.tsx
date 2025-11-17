"use client"

import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub" },
  ]

  const footerLinks = [
    { title: "Company", items: ["About", "Team", "Careers", "Blog"] },
    { title: "Services", items: ["Development", "Design", "Consulting", "Support"] },
    { title: "Legal", items: ["Privacy", "Terms", "Security", "Cookies"] },
  ]

  return (
    <footer id="contact" className="bg-background border-t border-border py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
          <img src="/SDK.png" alt="SDK Logo" className="w-full h-full object-cover" />
          </div>
              <span className="font-bold text-lg">SDK Solutions</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building the future of software, one line of code at a time.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">© {currentYear} SDK Solutions. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Follow us:</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          {/* <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:border-primary text-sm"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Mail className="w-4 h-4" />
            </button>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
