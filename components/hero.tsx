"use client"

import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

interface HeroProps {
  isDark: boolean
}

export default function Hero({ isDark }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Build Tomorrow's Digital Solutions",
      subtitle: "Innovative Web Development & Enterprise Software",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Transform Your Business with AI",
      subtitle: "Cutting-Edge Machine Learning Solutions",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Web Development",
      subtitle: "Building Responsive and Modern Websites",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop&q=80"
    },
    {
      id: 4,
      title: "UI/UX Design",
      subtitle: "Crafting Intuitive and Beautiful User Experiences",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop&q=80"
    }
  ]

  const stats = [
    { label: "Projects Delivered", value: 15 },
    { label: "Happy Clients", value: 15 },
    { label: "Team Members", value: 10 },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const stepTime = 20
      const increment = Math.ceil(stat.value / (2000 / stepTime))

      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev]
          if (newCounts[index] < stat.value) {
            newCounts[index] += increment
            if (newCounts[index] > stat.value) newCounts[index] = stat.value
          }
          return newCounts
        })
      }, stepTime)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Full Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40"></div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-white">Welcome to SDK Solutions</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 font-light">{slides[currentSlide].subtitle}</p>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            We create innovative software that transforms businesses. From web applications to enterprise solutions, we deliver excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-0.1 animate-fade-in-up animation-delay-400">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 text-white">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-0.1 animate-fade-in-up animation-delay-100000">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {counts[index]}+
                </p>
                <p className="text-sm sm:text-base text-gray-200 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows (hidden on mobile) */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group z-20"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group z-20"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator */}
<div className="hidden sm:flex absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-3 z-20">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentSlide(index)}
      className={`h-2 rounded-full transition-all duration-300 ${
        index === currentSlide
          ? 'w-8 bg-white'
          : 'w-2 bg-white/50 hover:bg-white/75'
      }`}
    />
  ))}
</div>


      <style jsx>{`
        @keyframes blob { 0%,100%{transform:translate(0,0) scale(1);}25%{transform:translate(20px,-20px) scale(1.1);}50%{transform:translate(-20px,20px) scale(0.9);}75%{transform:translate(20px,20px) scale(1.05);} }
        @keyframes fade-in { from {opacity:0; transform:translateY(-10px);} to {opacity:1; transform:translateY(0);} }
        @keyframes fade-in-up { from {opacity:0; transform:translateY(30px);} to {opacity:1; transform:translateY(0);} }
        .animate-blob { animation: blob 7s infinite; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animation-delay-200 { animation-delay:0.2s; opacity:0; }
        .animation-delay-400 { animation-delay:0.4s; opacity:0; }
        .animation-delay-600 { animation-delay:0.6s; opacity:0; }
        .animation-delay-2000 { animation-delay:2s; }
        .animation-delay-4000 { animation-delay:4s; }
      `}</style>
    </section>
  )
}
