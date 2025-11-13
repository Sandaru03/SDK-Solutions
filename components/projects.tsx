"use client"

import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { useState } from "react"

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Micro CCTV Sequrity Solution",
      description: "Micro CCTV is a professional CCTV service platform developed using the MERN (MongoDB, Express, React, Node.js) stack. It offers live camera feeds, package booking, and a customer-friendly dashboard.",
      tags: ["Reactjs", "TailwindCSS", "Expressjs", "Nodejs", "MongoDB"],
      image: "/images/MCCTV.png",
      gradient: "from-blue-500/20 to-purple-500/20",
      category: "E-commerce",
      link: "https://www.microcctvsecuritysolutions.store/"
    },
    {
      title: "HypeWalk Shoe Store",
      description: "HypeWalk is a modern e-commerce platform for sneaker enthusiasts, built with the MERN stack (MongoDB, Express, React, Node.js). It features product browsing, secure checkout, order tracking, and an interactive user dashboard.",
      tags: ["Reactjs", "TailwindCSS", "Expressjs", "Nodejs", "MongoDB"],
      image: "/images/shoe.jpg  ",
      gradient: "from-purple-500/20 to-pink-500/20",
      category: "E-commerce",
      link: "https://hype-walk-front-end.vercel.app/"
    },
    {
      title: "KR Motors",
      description: "KR Motors is a full-featured vehicle management and sales platform developed with the MERN stack (MongoDB, Express, React, Node.js). It includes vehicle listings, customer inquiries, service booking, and an admin dashboard for inventory and sales tracking.",
      tags: ["Reactjs", "TailwindCSS", "Expressjs", "Nodejs", "MongoDB"],
      image: "/images/KR.jpg",
      gradient: "from-pink-500/20 to-rose-500/20",
      category: "E-commerce",
      link: "https://kr-motors-fe.vercel.app/"
    },
    {
      title: "To-Do List Web Application",
      description: "A smart productivity app that combines task management with machine learning insights. Users can create, organize, and track tasks efficiently, while AI-driven analytics provide personalized productivity trends and visual reports using interactive D3.js charts.",
      tags: ["Reactjs", "TailwindCSS","Boostrap","Nodejs","MongoDB"],
      image: "/images/todo.png",
      gradient: "from-cyan-500/20 to-blue-500/20",
      category: "To-Do Application",
      link: "https://to-do-list-frontend-weld-nine.vercel.app/"
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our latest innovations and success stories that showcase our expertise in building cutting-edge digital solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Overlay Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Project Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                  {project.category}
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>

              {/* Project Content */}
              <div className="relative p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <button className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors duration-200">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                    </button> */}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 rounded-lg bg-muted text-xs font-medium border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
                      style={{ transitionDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.link}
                  target="_blank"               
                  rel="noopener noreferrer"     
                  className="group/btn relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 mt-4">
         <span className="relative z-10">View Project</span>
        <ArrowUpRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
         </a>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
          <button className="group px-8 py-4 rounded-lg border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 font-semibold">
            <span className="flex items-center gap-2">
              View All Projects
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </button>
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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  )
}