"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+94 71 866 1068",
      href: "https://wa.me/94718661068?text=Hello%20Kyle%20%26%20Kylie",
      color: "from-green-500 to-emerald-600",
      bgGlow: "bg-green-500/20"
    },
    {
      icon: Mail,
      label: "Email",
      value: "forestersolomusician@gmail.com",
      href: "mailto:forestersolomusician@gmail.com",
      color: "from-emerald-500 to-teal-600",
      bgGlow: "bg-emerald-500/20"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "23 Arthur V. Dias Mawatha, Panadura",
      href: "https://maps.google.com?q=23+Arthur+V.+Dias+Mawatha+Panadura+Sri+Lanka",
      color: "from-blue-500 to-indigo-600",
      bgGlow: "bg-blue-500/20"
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4 mb-4 opacity-70">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-400"></div>
              <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold">Get in Touch</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-400"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="inline-block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Contact Kyle & Kylie
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            We're here to help you with any inquiries about our premium services
          </p>
        </div>

        {/* Creative Contact Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
        >
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target={info.icon === MapPin || info.label === "WhatsApp" ? "_blank" : "_self"}
              rel={info.icon === MapPin || info.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              {/* Creative Contact Item */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-3 border border-gray-200/50 hover:border-gray-300">
                {/* Background Gradient Glow */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                
                {/* Animated Circle Background */}
                <div className="absolute -top-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className={`w-full h-full ${info.bgGlow} rounded-full blur-3xl animate-pulse-slow`}></div>
                </div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-6 flex items-start justify-between">
                    <div 
                      className={`relative p-4 rounded-2xl bg-gradient-to-br ${info.color} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <info.icon className="w-7 h-7 text-white" />
                      
                      {/* Icon Shine Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Animated Indicator */}
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${info.color} animate-pulse`}></div>
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${info.color} animate-pulse animation-delay-500`}></div>
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${info.color} animate-pulse animation-delay-1000`}></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                      {info.label}
                    </h3>
                    
                    <p className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors font-semibold">
                      Click to connect
                    </span>
                    <div className={`w-8 h-0.5 bg-gradient-to-r ${info.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gray-200 rounded-tl-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gray-200 rounded-br-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
