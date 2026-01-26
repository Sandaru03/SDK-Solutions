"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // ✅ Frontend submit function to call API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", company: "", message: "" })
      } else {
        alert(data.error || "Something went wrong")
      }
    } catch (err) {
      console.error(err)
      alert("Failed to send message")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      detail: "sandarudilshan24@gmail.com",
      subdetal: "We'll respond within 1 hours",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      detail: "+94 702216447",
      subdetal: "Always Open for a chat or call",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      detail: "Sri Mahinda Darma Mawatha, Colombo 09",
      // subdetal: "San Francisco, CA 94102",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10"
    }
  ]

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Background, header, and animated orbs remain the same */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-sm font-medium">
            <MessageSquare className="w-4 h-4 text-blue-500" />
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Let's Start a{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">
              Conversation
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-fade-in-up animation-delay-200">
            <form
              onSubmit={handleSubmit} // ✅ Submit event handled here
              className="relative p-8 rounded-2xl bg-card border-2 border-border shadow-lg overflow-hidden"
            >
              <div className="space-y-6 relative z-10">
                {submitted && (
                  <div className="mb-6 p-4 rounded-lg bg-green-500/10 border-2 border-green-500/20 animate-fade-in">
                    <p className="text-green-600 dark:text-green-400 font-medium flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-blue-500 focus:outline-none transition-colors" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-blue-500 focus:outline-none transition-colors" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                  <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-blue-500 focus:outline-none transition-colors" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-blue-500 focus:outline-none transition-colors resize-none" />
                </div>

                <button type="submit" disabled={isSubmitting} className="cursor-pointer w-full group px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 inline-flex items-center justify-center gap-2">
                  {isSubmitting ? "Sending..." : <>
                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                  </>}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up animation-delay-400">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-card border-2 border-border shadow-sm">
                <div className={`absolute inset-0 bg-linear-to-br ${info.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10 flex items-start gap-4">
                  <div className={`shrink-0 p-3 rounded-xl bg-linear-to-br ${info.bgGradient} border-2 border-border shadow-sm`}>
                    <div className={`bg-linear-to-r ${info.gradient} p-1 rounded-lg text-white`}>{info.icon}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                    <p className="text-foreground font-medium mb-1">{info.detail}</p>
                    <p className="text-sm text-muted-foreground">{info.subdetal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
