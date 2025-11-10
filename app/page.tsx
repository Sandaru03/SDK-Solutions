"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Features from "@/components/features"
import Projects from "@/components/projects"
import Footer from "@/components/footer"
import Contact from "@/components/contact"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(prefersDark)
    updateTheme(prefersDark)
  }, [])

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
    updateTheme(!isDark)
  }

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <About />
      <Features />
      <Projects />
      <Contact/>
      <Footer />
    </main>
  )
}
