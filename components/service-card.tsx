"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  href: string
  color: "red" | "green" | "blue"
}

export function ServiceCard({ title, description, href, color }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const colorConfig = {
    red: {
      image: "/images/Grand piano.png",
      gradient: "from-[#AA1D1D]/10 to-[#AA1D1D]/20",
      accent: "text-[#AA1D1D]",
      border: "border-[#AA1D1D]/20",
    },
    green: {
      image: "/images/holiday8.png",
      gradient: "from-[#045C5A]/10 to-[#045C5A]/20",
      accent: "text-[#045C5A]",
      border: "border-[#045C5A]/20",
    },
    blue: {
      image: "/images/liveperfome1.png",
      gradient: "from-[#C96304]/10 to-[#C96304]/20",
      accent: "text-[#C96304]",
      border: "border-[#C96304]/20",
    }
  }

  const config = colorConfig[color]
  const previewLength = 150

  return (
    <Link href={href} className="block group h-full">
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full flex flex-col"
      >
        {/* Hero Image with Overlay */}
        <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
          <Image
            src={config.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          
          {/* Dynamic Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
          
          {/* Title Overlay on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              {title}
            </h3>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex-grow flex flex-col bg-gradient-to-br from-gray-50 to-white">
          {/* Description with Expandable Feature */}
          <div className="relative flex-grow">
            <p className={`text-gray-700 text-sm leading-relaxed transition-all duration-300 ${!isExpanded && description.length > previewLength ? 'line-clamp-3' : ''}`}>
              {description}
            </p>
            
            {description.length > previewLength && (
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setIsExpanded(!isExpanded)
                }}
                className={`text-xs font-semibold mt-2 ${config.accent} hover:underline inline-flex items-center gap-1`}
              >
                {isExpanded ? 'Show less' : 'Read more'}
                <ArrowRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
              </button>
            )}
          </div>
          
          {/* CTA Section */}
          <div className={`flex items-center justify-between mt-6 pt-4 border-t ${config.border} transition-colors`}>
            <span className={`text-sm font-bold ${config.accent} transition-colors`}>
              Visit Us
            </span>
            <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${config.gradient} border-2 ${config.border} flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-2 group-hover:scale-110 shadow-md`}>
              <ArrowRight className={`w-5 h-5 ${config.accent} transition-transform duration-300 group-hover:translate-x-0.5`} />
            </div>
          </div>
        </div>

        {/* Decorative Corner Accent */}
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${config.gradient} opacity-50 blur-2xl -z-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
      </motion.div>
    </Link>
  )
}
