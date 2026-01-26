"use client"

import { Code, Lightbulb, Target, Award, Users, Zap } from "lucide-react"
import { useState } from "react"

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "We write scalable, maintainable code that stands the test of time.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Always exploring new technologies to deliver cutting-edge solutions.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "User-Focused",
      description: "Every solution is designed with the end-user experience in mind.",
      gradient: "from-pink-500 to-rose-500",
    },
  ]

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: "3+", label: "Years Experience" },
    { icon: <Users className="w-6 h-6" />, value: "10+", label: "Team Members" },
    { icon: <Zap className="w-6 h-6" />, value: "100%", label: "Client Satisfaction" },
  ]

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">About Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">
              About SDK Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming Ideas into Digital Reality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since <span className="font-semibold text-foreground">2025</span>, SDK Solutions has been at the forefront of digital innovation. We specialize in creating custom
                software solutions that help businesses scale, innovate, and succeed in the digital age.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced developers, designers, and strategists work together to deliver solutions that are
                not just functional, but truly <span className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">transformative</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-primary mb-2 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <a href="#features">
  <button className="cursor-pointer group px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
    Explore Our Story
    <svg
      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
</a>
          </div>

          {/* Right Image Grid */}
          <div className="relative animate-fade-in-right">
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>

              {/* Small Images */}
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop&q=80"
                  alt="Office workspace"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20 group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>

              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop&q=80"
                  alt="Modern office"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-pink-600/20 group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 px-6 py-3 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-border animate-float">
              <p className="text-sm text-muted-foreground">Trusted by</p>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                30+ Clients
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-muted/30 border border-border hover:border-transparent transition-all duration-500 group overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Animated Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-linear-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{ padding: "2px" }}
              >
                <div className="w-full h-full bg-background rounded-2xl"></div>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-linear-to-br ${value.gradient} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <div className="text-white">{value.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>

                {/* Hover Arrow */}
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
}