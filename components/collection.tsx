"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect, useRef } from "react"
import { Eye, Heart, Star, Music, Truck, Wrench, Award } from "lucide-react"
import { colors } from "@/lib/utils"

// Add custom vintage animations and styles
const vintageStyles = `
  @keyframes float-vintage {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-8px) rotate(2deg); }
    50% { transform: translateY(-4px) rotate(-1deg); }
    75% { transform: translateY(-12px) rotate(1deg); }
  }
  
  @keyframes float-vintage-delayed {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-6px) rotate(-2deg); }
    50% { transform: translateY(-10px) rotate(1deg); }
    75% { transform: translateY(-3px) rotate(-1deg); }
  }
  
  @keyframes float-vintage-slow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-6px) rotate(3deg); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes float-delayed {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
  }
  
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .animate-float-vintage {
    animation: float-vintage 8s ease-in-out infinite;
  }
  
  .animate-float-vintage-delayed {
    animation: float-vintage-delayed 10s ease-in-out infinite;
    animation-delay: 2s;
  }
  
  .animate-float-vintage-slow {
    animation: float-vintage-slow 12s ease-in-out infinite;
    animation-delay: 4s;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 7s ease-in-out infinite;
    animation-delay: 1s;
  }
  
  .animate-float-slow {
    animation: float-slow 9s ease-in-out infinite;
    animation-delay: 3s;
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }
  
  .vintage-card {
    box-shadow: 
      0 8px 32px rgba(170, 29, 29, 0.12),
      0 2px 8px rgba(170, 29, 29, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  
  .vintage-card:hover {
    box-shadow: 
      0 20px 40px rgba(170, 29, 29, 0.2),
      0 8px 16px rgba(170, 29, 29, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  
  .vintage-section {
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(170, 29, 29, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(106, 106, 106, 0.08) 0%, transparent 50%);
  }
  
  .bg-gradient-radial {
    background: radial-gradient(circle, var(--tw-gradient-stops));
  }
  
  .border-l-3 { border-left-width: 3px; }
  .border-r-3 { border-right-width: 3px; }
  .border-t-3 { border-top-width: 3px; }
  .border-b-3 { border-bottom-width: 3px; }
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.innerText = vintageStyles
  document.head.appendChild(styleSheet)
}

const pianoCategories = [
  {
    title: "Cottage & Studio Pianos",
    description: "Perfect for beginners and small spaces",
    priceRange: "LKR 150,000 - 300,000",
    condition: "Excellent",
    extras: "Free tuning & delivery",
    image: "upright-cottage-piano-in-cozy-room.jpg",
    rating: 4.8,
    available: 12,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Full Upright Pianos",
    description: "Professional quality for serious musicians",
    priceRange: "LKR 300,000 - 600,000",
    condition: "Premium",
    extras: "5-year warranty included",
    image: "elegant-full-upright-piano-in-music-room.jpg",
    rating: 4.9,
    available: 8,
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Grand Pianos",
    description: "Concert-quality instruments for professionals",
    priceRange: "LKR 800,000 - 2,000,000",
    condition: "Exceptional",
    extras: "Professional setup & tuning",
    image: "beautiful-grand-piano-in-concert-hall-setting.jpg",
    rating: 5.0,
    available: 3,
    gradient: "from-amber-500/20 to-orange-500/20",
  },

]

const rentalOptions = [
  {
    title: "Renta a Piano",
    description: "Flexible rental options for all needs",
    priceRange: "LKR 8,000 - 25,000/month",
    originalPrice: "LKR 10,000",
    condition: "Well-maintained",
    extras: "Monthly tuning included",
    image: "piano-in-modern-home-living-room-rental-setup.jpg",
    rating: 4.7,
    available: 12,
    gradient: "from-blue-500/20 to-cyan-500/20",
    features: ["Free delivery & setup", "Monthly tuning", "Practice bench included", "24/7 support"],
    badge: "Most Popular",
    badgeColor: "bg-blue-500"
  }
]

export function Collection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of piano category cards
            pianoCategories.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="collection"
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 70%, rgba(170, 29, 29, 0.03) 0%, transparent 70%),
          radial-gradient(circle at 70% 30%, rgba(106, 106, 106, 0.02) 0%, transparent 70%),
          linear-gradient(135deg, #faf0e3 0%, #faf0e3 25%, #faf0e3 50%, #faf0e3 75%, #faf0e3 100%)
        `,
        backgroundAttachment: 'fixed'
      }}    >
      {/* Vintage paper texture background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InBhcGVyIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzg4OCIgb3BhY2l0eT0iMC4wNSIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iODAiIHI9IjEuNSIgZmlsbD0iIzg4OCIgb3BhY2l0eT0iMC4wMyIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjAuOCIgZmlsbD0iIzg4OCIgb3BhY2l0eT0iMC4wNyIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iNzAiIHI9IjAuNSIgZmlsbD0iIzg4OCIgb3BhY2l0eT0iMC4wNCIvPjxjaXJjbGUgY3g9IjkwIiBjeT0iMzAiIHI9IjEuMiIgZmlsbD0iIzg4OCIgb3BhY2l0eT0iMC4wNiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXBlcikiLz48L3N2Zz4=')] opacity-30"></div>

      {/* Vintage ornamental elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main decorative elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-radial from-[var(--primary)]/10 via-[var(--primary)]/5 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-radial from-[var(--secondary)]/8 via-[var(--primary)]/4 to-transparent rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-radial from-[var(--primary)]/12 via-[var(--background)]/6 to-transparent rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Vintage floating ornaments */}
        <div className="absolute top-32 right-32 text-[var(--primary)]/15 text-4xl font-serif animate-float-vintage">❦</div>
        <div className="absolute bottom-32 left-32 text-[var(--secondary)]/12 text-3xl font-serif animate-float-vintage-delayed">✦</div>
        <div className="absolute top-1/3 right-1/4 text-[var(--primary)]/10 text-2xl font-serif animate-float-vintage-slow">❖</div>

        {/* Additional ambient elements */}
        <div className="absolute top-40 left-1/3 w-24 h-24 bg-[var(--primary)]/8 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-[var(--secondary)]/6 rounded-full blur-lg animate-pulse-slow" style={{ animationDelay: "2.5s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 relative">
          {/* Vintage decorative frame */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-20 sm:w-32 h-1 bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent"></div>

          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-[var(--background)]/80 via-[var(--background)]/70 to-[var(--background)]/80 px-3 sm:px-5 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 border border-[var(--primary)]/50 shadow-lg backdrop-blur-sm">
            <Music className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--primary)]" />
            <span className="text-[var(--foreground)] font-semibold text-sm sm:text-base tracking-wide">Our Collection</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--primary)] rounded-full animate-pulse"></div>
          </div>
          <h2 className="font-bookman text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[var(--foreground)] mb-4 sm:mb-6 text-balance px-2 relative">
            <span className="relative inline-block">
              Discover Your Perfect
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent"></div>
            </span>
            <span className="block text-[var(--primary)] mt-1 sm:mt-2 relative">
              Piano
              <div className="absolute top-0 right-0 text-[var(--primary)]/20 text-lg sm:text-2xl font-serif">♫</div>
            </span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--foreground)]/80 leading-relaxed px-2 sm:px-4 mb-3 sm:mb-4">
              Discover our carefully curated selection of pianos, each chosen for quality, reliability, and musical
              excellence. From intimate cottage pianos to majestic concert grands.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 text-xs sm:text-sm text-[var(--primary)]/60 px-2">
              <span className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--primary)] rounded-full"></div>
                <span>Handpicked Selection</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--primary)] rounded-full"></div>
                <span>Professional Restoration</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--primary)] rounded-full"></div>
                <span>Authentic Vintage Sound</span>
              </span>
            </div>
          </div>

          {/* Bottom decorative element */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-32 sm:w-48 h-1 bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {pianoCategories.map((category, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform ${visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${hoveredCard === index ? "scale-105 -rotate-1" : "hover:scale-105 hover:-rotate-1"} bg-gradient-to-br from-white/95 via-white/90 to-cream/80 backdrop-blur-sm h-[420px] sm:h-[450px] vintage-card`}
              style={{
                background: `
                  linear-gradient(135deg, #FFFFFF 0%, #FFF9E5 50%, #FFFFFF 100%),
                  radial-gradient(circle at top right, rgba(170,29,29,0.05) 0%, transparent 60%)
                `,
                border: '2px solid rgba(170,29,29,0.1)',
                boxShadow: `
                  0 15px 35px rgba(170,29,29,0.15),
                  0 5px 15px rgba(0,0,0,0.1),
                  inset 0 1px 0 rgba(255,255,255,0.8)
                `
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Vintage paper texture overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMC41IiBmaWxsPSIjODg4IiBvcGFjaXR5PSIwLjA4Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMC43IiBmaWxsPSIjODg4IiBvcGFjaXR5PSIwLjA2Ii8+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMC4zIiBmaWxsPSIjODg4IiBvcGFjaXR5PSIwLjA5Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWluKSIvPjwvc3ZnPg==')] opacity-15"></div>

              {/* Elegant vintage border decorations */}
              <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-[#AA1D1D]/40 rounded-tl-xl"></div>
              <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-[#AA1D1D]/40 rounded-tr-xl"></div>
              <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-[#AA1D1D]/40 rounded-bl-xl"></div>
              <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-[#AA1D1D]/40 rounded-br-xl"></div>

              {/* Floating vintage particles */}
              <div className="absolute top-6 left-8 w-1 h-1 bg-[#AA1D1D]/30 rounded-full animate-float"></div>
              <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-[#AA1D1D]/20 rounded-full animate-float-delayed"></div>
              <div className="absolute bottom-16 left-16 w-0.5 h-0.5 bg-[#AA1D1D]/35 rounded-full animate-float-slow"></div>

              {/* Enhanced vintage gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-30 transition-all duration-500 mix-blend-soft-light`}></div>

              <div className="flex flex-col h-full">
                {/* Image section - Top */}
                <div className="relative h-48 overflow-hidden rounded-t-lg p-4">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-lg"
                    style={{
                      filter: 'sepia(0.2) contrast(1.05) brightness(0.95) saturate(1.1)'
                    }}
                  />

                  {/* Vintage photo frame effect */}
                  <div className="absolute inset-4 bg-gradient-to-br from-amber-100/15 via-transparent to-sepia-900/8 pointer-events-none rounded-lg"></div>
                  <div className="absolute inset-4 shadow-inner border border-amber-200/20 pointer-events-none rounded-lg"></div>

                  {/* Vintage vignette */}
                  <div className="absolute inset-4 bg-gradient-radial from-transparent via-transparent to-black/10 pointer-events-none rounded-lg"></div>
                  {/* 
                  <Badge 
                    className="absolute top-3 right-3 text-xs font-semibold backdrop-blur-sm px-3 py-1.5 rounded-full"
                    style={{
                      background: '#AA1D1D',
                      color: 'white',
                      border: '1px solid rgba(170,29,29,0.3)',
                      boxShadow: '0 4px 12px rgba(170,29,29,0.3)'
                    }}
                  >
                    {category.condition}
                  </Badge> */}

                  {/* Rating stars */}
                  {/* <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${i < Math.floor(category.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-xs font-medium text-gray-700 ml-1">{category.rating}</span>
                  </div> */}
                </div>

                {/* Content section - Bottom */}
                <div className="flex-1 flex flex-col justify-between p-6 relative">
                  <div>
                    <CardTitle
                      className="font-bookman text-xl font-bold mb-3 leading-tight group-hover:scale-105 transition-transform duration-300"
                      style={{ color: '#0D0D0D' }}
                    >
                      {category.title}
                    </CardTitle>
                    <CardDescription
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: '#6A6A6A' }}
                    >
                      {category.description}
                    </CardDescription>
                  </div>

                  <div className="space-y-4">
                    <div
                      className="rounded-xl p-4 border backdrop-blur-sm"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,249,229,0.8) 0%, rgba(255,255,255,0.6) 100%)',
                        border: '1px solid rgba(170,29,29,0.2)',
                        boxShadow: '0 4px 12px rgba(170,29,29,0.08)'
                      }}
                    >
                      <p
                        className="font-bold text-lg mb-2 group-hover:scale-105 transition-transform duration-300"
                        style={{ color: '#AA1D1D' }}
                      >
                        {category.priceRange}
                      </p>
                      <p className="text-sm flex items-center" style={{ color: '#6A6A6A' }}>
                        <Music className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: '#AA1D1D' }} />
                        <span className="leading-tight">{category.extras}</span>
                      </p>
                    </div>

                    {/* <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="px-3 py-1.5 rounded-full text-xs font-medium"
                          style={{
                            background: 'rgba(170,29,29,0.1)',
                            color: '#AA1D1D'
                          }}
                        >
                          {category.available} Available
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="rounded-full font-semibold px-6 hover:scale-105 transition-all duration-300"
                        style={{
                          background: '#AA1D1D',
                          color: 'white',
                          border: 'none'
                        }}
                        onClick={() => {
                          const contactSection = document.getElementById('contact')
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' })
                          }
                        }}
                      >
                        View Details
                      </Button>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Vintage border glow effect */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-[#AA1D1D]/30 transition-all duration-500" style={{
                boxShadow: '0 0 0 1px transparent'
              }}></div>

              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 rounded-lg"></div>
            </Card>
          ))}
        </div>

        {/* Rental Section - Enhanced Design */}
        <div className="mt-24 sm:mt-28 mb-20 sm:mb-24">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 relative">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--primary)]/10 via-[var(--primary)]/5 to-[var(--primary)]/10 px-6 py-3 rounded-full mb-6 border border-[var(--primary)]/30 shadow-lg backdrop-blur-sm">
              <Music className="h-5 w-5 text-[var(--primary)]" />
              <span className="text-[var(--foreground)] font-semibold text-base tracking-wide">Piano Rental Services</span>
              <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></div>
            </div>

            <h3 className="font-bookman text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6 text-balance relative">
              <span className="relative inline-block">
                Flexible Rental
                <span className="text-[var(--primary)]"> Plans</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent"></div>
              </span>
            </h3>

            <p className="text-lg text-[var(--foreground)]/70 leading-relaxed max-w-3xl mx-auto mb-8">
              Choose from our carefully curated rental packages designed for every musical journey.
              From student-friendly options to concert-grade instruments.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--primary)]/60 mb-8">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No Hidden Fees</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free Delivery</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Expert Support</span>
              </span>
            </div>
          </div>

          {/* Rental Details Row */}
          <div className="max-w-6xl mx-auto">
            {rentalOptions.map((rental, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/95 backdrop-blur-sm"
                style={{
                  // background: `
                  //   linear-gradient(135deg, #FFFFFF 0%, #FEFEFE 50%, #FDFDFD 100%),
                  //   radial-gradient(circle at top right, rgba(170,29,29,0.03) 0%, transparent 70%)
                  // `,
                  background: `
                  linear-gradient(135deg, #FFFFFF 0%, #FFF9E5 50%, #FFFFFF 100%),
                  radial-gradient(circle at top right, rgba(170,29,29,0.05) 0%, transparent 60%)
                `,
                  border: '1px solid rgba(170,29,29,0.08)',
                  boxShadow: `
                    0 10px 25px rgba(170,29,29,0.08),
                    0 4px 12px rgba(0,0,0,0.05),
                    inset 0 1px 0 rgba(255,255,255,0.9)
                  `
                }}
              >

                {/* Row Layout */}
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section - Left */}
                  <div className="relative lg:w-2/5 h-64 lg:h-80 overflow-hidden">
                    <img
                      src={rental.image || "/placeholder.svg"}
                      alt={rental.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{
                        filter: 'brightness(0.98) contrast(1.02) saturate(1.05)'
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>


                  </div>

                  {/* Content Section - Right */}
                  <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="text-center lg:text-left">
                        <h4 className="font-bookman text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-3">
                          {rental.title}
                        </h4>
                        <p className="text-[var(--foreground)]/70 text-lg leading-relaxed max-w-2xl">
                          {rental.description}
                        </p>
                      </div>

                      {/* Pricing */}
                      <div className="text-center lg:text-left">
                        <div className="flex flex-col sm:flex-row items-center lg:items-start sm:items-baseline space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
                          <span className="text-2xl lg:text-2xl font-bold text-[var(--primary)]">
                            {rental.priceRange}
                          </span>

                        </div>
                        <div className="flex items-center justify-center lg:justify-start text-[var(--foreground)]/60">
                          <Music className="h-4 w-4 mr-2 text-[var(--primary)]" />
                          <span className="text-base">{rental.extras}</span>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                        {rental.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-[var(--foreground)]/70">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>


                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[var(--primary)]/20 rounded-lg transition-all duration-300"></div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 sm:mt-20">
          <div className="relative bg-gradient-to-br from-[var(--background)]/90 via-[var(--background)]/80 to-[var(--background)]/90 rounded-2xl sm:rounded-3xl p-8 sm:p-12 backdrop-blur-sm mx-2 sm:mx-0 border border-[var(--primary)]/50 shadow-2xl overflow-hidden">
            {/* Vintage decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-3 border-t-3 border-[var(--primary)]/40 rounded-tl-xl"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-3 border-t-3 border-[var(--primary)]/40 rounded-tr-xl"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-3 border-b-3 border-[var(--primary)]/40 rounded-bl-xl"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-3 border-b-3 border-[var(--primary)]/40 rounded-br-xl"></div>

            {/* Vintage paper texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0idGV4dHVyZSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIwLjgiIGZpbGw9IiM4ODgiIG9wYWNpdHk9IjAuMDgiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjODg4IiBvcGFjaXR5PSIwLjA2Ii8+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMC42IiBmaWxsPSIjODg4IiBvcGFjaXR5PSIwLjA5Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3RleHR1cmUpIi8+PC9zdmc+')] opacity-20"></div>

            {/* Floating ornaments */}
            <div className="absolute top-6 left-12 text-[var(--primary)]/20 text-2xl font-serif animate-float-vintage">❦</div>
            <div className="absolute top-8 right-12 text-[var(--secondary)]/15 text-xl font-serif animate-float-vintage-delayed">✦</div>

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="bg-[var(--primary)]/10 rounded-full p-3 border border-[var(--primary)]/20">
                  <Music className="h-8 w-8 text-[var(--primary)]" />
                </div>
              </div>

              <h3 className="font-bookman text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4 relative">
                Can't find your dream piano?
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent"></div>
              </h3>

              <p className="text-base sm:text-lg text-[var(--foreground)]/80 mb-6 px-2 leading-relaxed max-w-2xl mx-auto">
                Our master craftsmen have access to a vast network of piano collectors and can help you find
                or restore the perfect instrument for your musical journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary)] hover:from-[var(--primary)] hover:to-[var(--primary)] text-[var(--background)] px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base font-semibold border border-[var(--primary)]/30 w-full sm:w-auto group"
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  <Music className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Contact Our Master Craftsmen
                </Button>
              </div>

              <div className="flex justify-center space-x-8 text-sm text-[var(--primary)]/70">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></div>
                  <span>Expert Restoration</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  <span>Lifetime Support</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                  <span>Authenticity Guaranteed</span>
                </span>
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-transparent bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--secondary)]/10 opacity-50"></div>
          </div>
        </div>
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 mt-8 sm:mt-12 md:mt-16 transition-all duration-1500 delay-1200   "opacity-100 translate-y-0" `}
        >
          {[
            { icon: Truck, title: "Free Delivery", color: colors.primary },
            { icon: Wrench, title: "Free Tuning", color: colors['chart-2'] },
            { icon: Award, title: "5-Year Warranty", color: colors.primary },
            { icon: Music, title: "Flexible Rentals", color: colors['chart-2'] }
          ].map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center space-y-2 sm:space-y-3 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{
                background: `
                  linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,242,207,0.7) 100%),
                  radial-gradient(circle at top right, rgba(170,29,29,0.05) 0%, transparent 60%)
                `,
                border: `2px solid ${colors.primary}20`,
                boxShadow: `
                  0 4px 15px rgba(0,0,0,0.1),
                  inset 0 1px 0 rgba(255,255,255,0.4),
                  0 0 20px rgba(170,29,29,0.05)
                `
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `
                  linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,242,207,0.85) 100%),
                  radial-gradient(circle at top right, rgba(170,29,29,0.1) 0%, transparent 60%)
                `;
                e.currentTarget.style.boxShadow = `
                  0 8px 25px rgba(0,0,0,0.15),
                  inset 0 1px 0 rgba(255,255,255,0.5),
                  0 0 30px rgba(170,29,29,0.1)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `
                  linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,242,207,0.7) 100%),
                  radial-gradient(circle at top right, rgba(170,29,29,0.05) 0%, transparent 60%)
                `;
                e.currentTarget.style.boxShadow = `
                  0 4px 15px rgba(0,0,0,0.1),
                  inset 0 1px 0 rgba(255,255,255,0.4),
                  0 0 20px rgba(170,29,29,0.05)
                `;
              }}
            >
              <div
                className="p-2 sm:p-3 rounded-full group-hover:scale-110 transition-all duration-500 shadow-lg"
                style={{
                  background: `
                    linear-gradient(135deg, ${item.color} 0%, rgba(170,29,29,0.8) 100%),
                    radial-gradient(circle at top left, rgba(212,175,55,0.3) 0%, transparent 60%)
                  `,
                  boxShadow: `
                    0 4px 15px rgba(170,29,29,0.3),
                    0 0 20px rgba(170,29,29,0.2),
                    inset 0 1px 0 rgba(255,255,255,0.3)
                  `
                }}
              >
                <item.icon
                  className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 group-hover:scale-110 transition-transform duration-500"
                  style={{ color: colors['primary-foreground'] }}
                />
              </div>
              <span
                className="text-xs sm:text-sm font-semibold group-hover:scale-105 transition-all duration-500 text-center leading-tight"
                style={{
                  color: colors.foreground
                }}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
