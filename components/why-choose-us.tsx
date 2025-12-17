"use client"

import { Shield, Award, HeartHandshake, MapPin, Music, Star, Crown, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { colors } from "@/lib/utils"

// Add custom vintage animations and styles
const vintageStyles = `
  @keyframes vintage-float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-12px) rotate(2deg); }
    50% { transform: translateY(-6px) rotate(-1deg); }
    75% { transform: translateY(-15px) rotate(1deg); }
  }
  
  @keyframes vintage-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(170, 29, 29, 0.3); }
    50% { box-shadow: 0 0 30px rgba(170, 29, 29, 0.5), 0 0 40px rgba(170, 29, 29, 0.2); }
  }
  
  @keyframes vintage-shimmer {
    0% { transform: translateX(-100%) skewX(-15deg); }
    100% { transform: translateX(200%) skewX(-15deg); }
  }
  
  @keyframes vintage-pulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }
  
  @keyframes ornament-float {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
    33% { transform: translateY(-8px) rotate(120deg); opacity: 0.6; }
    66% { transform: translateY(-4px) rotate(240deg); opacity: 0.4; }
  }
  
  .vintage-card {
    background: linear-gradient(135deg, 
      rgba(255, 248, 220, 0.95) 0%, 
      rgba(250, 240, 190, 0.9) 50%, 
      rgba(245, 230, 160, 0.95) 100%);
    box-shadow: 
      0 10px 40px rgba(170, 29, 29, 0.15),
      0 4px 12px rgba(106, 106, 106, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 -1px 0 rgba(170, 29, 29, 0.1);
    border: 1px solid rgba(170, 29, 29, 0.2);
  }
  
  .vintage-card:hover {
    box-shadow: 
      0 20px 60px rgba(170, 29, 29, 0.25),
      0 8px 20px rgba(106, 106, 106, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(170, 29, 29, 0.15);
    animation: vintage-glow 2s ease-in-out infinite;
  }
  
  .vintage-icon-bg {
    background: linear-gradient(135deg, #aa1d1d 0%, #8b1818 50%, #6b1212 100%);
    box-shadow: 
      0 8px 25px rgba(170, 29, 29, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  }
  
  .vintage-section-bg {
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 251, 235, 0.9) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(254, 249, 195, 0.8) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(255, 248, 220, 0.6) 0%, transparent 60%),
      linear-gradient(135deg, rgba(255, 253, 245, 0.95) 0%, rgba(254, 251, 232, 0.9) 100%);
  }
  
  .paper-texture {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InBhcGVyIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMS4yIiBmaWxsPSIjODg4IiBvcGFjaXR5PSIwLjA0Ii8+PGNpcmNsZSBjeD0iODAiIGN5PSI4MCIgcj0iMS44IiBmaWxsPSIjODg4IiBvcGFjaXR5PSIwLjAyNSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiIGZpbGw9IiM4ODgiIG9wYWNpdHk9IjAuMDM1Ii8+PGNpcmNsZSBjeD0iMTUiIGN5PSI3NSIgcj0iMC44IiBmaWxsPSIjODg4IiBvcGFjaXR5PSIwLjAzIi8+PGNpcmNsZSBjeD0iODUiIGN5PSIyNSIgcj0iMS41IiBmaWxsPSIjODg4IiBvcGFjaXR5PSIwLjA0NSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXBlcikiLz48L3N2Zz4=');
  }
  
  .animate-vintage-float {
    animation: vintage-float 8s ease-in-out infinite;
  }
  
  .animate-vintage-pulse {
    animation: vintage-pulse 3s ease-in-out infinite;
  }
  
  .animate-ornament-float {
    animation: ornament-float 12s ease-in-out infinite;
  }
  
  .vintage-border-decoration {
    position: relative;
  }
  
  .vintage-border-decoration::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #aa1d1d, #8b1818, #6b1212, #aa1d1d);
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .vintage-border-decoration:hover::before {
    opacity: 0.3;
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.innerText = vintageStyles
  document.head.appendChild(styleSheet)
}

const features = [
  {
    icon: Crown,
    title: "Trusted Expertise",
    description:
      "Over 8 years of expert craftsmanship with expert restoration and meticulous attention to every vintage detail.",
    color: "#aa1d1d",
    accent: "from-[var(--primary)] to-[var(--primary)]",
    ornament: "♔"
  },
  {
    icon: Award,
    title: "Quality Assured",
    description:
      "Every piano is quality assured, restored to original glory, and comes with our certificate of musical excellence.",
    color: "#8b1818",
    accent: "from-[var(--primary)] to-[var(--primary)]",
    ornament: "❋"
  },
  {
    icon: HeartHandshake,
    title: "Lifetime Support",
    description: "Comprehensive lifetime care including period-appropriate tuning, restoration advice, and generational support.",
    color: "#6b1212",
    accent: "from-[var(--primary)] to-[var(--primary)]",
    ornament: "❦"
  },
  {
    icon: Sparkles,
    title: "Islandwide Support",
    description: "White-glove delivery across Sri Lanka, complete with expert setup, precision tuning, and ceremonial  presentation.",
    color: "#aa1d1d",
    accent: "from-[var(--primary)] to-[var(--primary)]",
    ornament: "✦"
  },
]

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 70%, rgba(170, 29, 29, 0.03) 0%, transparent 70%),
          radial-gradient(circle at 70% 30%, rgba(106, 106, 106, 0.02) 0%, transparent 70%),
          linear-gradient(135deg, #fff2cf 0%, #fff2cf 25%, #fff2cf 50%, #fff2cf 75%, #fff2cf 100%)
        `,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Vintage ornamental background - responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative elements - lighter and responsive */}
        <div className="absolute top-10 sm:top-16 md:top-20 left-10 sm:left-16 md:left-20 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-gradient-radial from-[var(--primary)]/6 via-[var(--primary)]/3 to-transparent rounded-full blur-3xl animate-vintage-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 right-10 sm:right-16 md:right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-radial from-[var(--secondary)]/4 via-[var(--primary)]/2 to-transparent rounded-full blur-4xl animate-vintage-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-radial from-[var(--primary)]/6 via-[var(--primary)]/3 to-transparent rounded-full blur-2xl animate-vintage-pulse" style={{ animationDelay: "1s" }}></div>

        {/* Floating vintage musical notes with lighter styling - responsive */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[var(--primary)]/10 animate-vintage-float font-serif text-xs sm:text-sm md:text-base lg:text-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
            }}
          >
            {i % 4 === 0 ? "♫" : i % 4 === 1 ? "♪" : i % 4 === 2 ? "♬" : "♭"}
          </div>
        ))}

        {/* Vintage ornamental symbols - lighter and responsive */}
        <div className="absolute top-16 sm:top-24 md:top-32 right-20 sm:right-32 md:right-40 text-[var(--primary)]/8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif animate-ornament-float">❦</div>
        <div className="absolute bottom-20 sm:bottom-32 md:bottom-40 left-16 sm:left-24 md:left-32 text-[var(--primary)]/6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif animate-ornament-float" style={{ animationDelay: "4s" }}>✦</div>
        <div className="absolute top-2/3 right-1/4 text-[var(--primary)]/5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif animate-ornament-float" style={{ animationDelay: "8s" }}>❋</div>

        {/* Additional ambient vintage elements - lighter and responsive */}
        <div className="absolute top-1/4 left-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[var(--primary)]/4 rounded-full blur-xl animate-vintage-pulse" style={{ animationDelay: "3s" }}></div>
        <div className="absolute bottom-1/3 right-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[var(--primary)]/3 rounded-full blur-lg animate-vintage-pulse" style={{ animationDelay: "5s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          {/* Vintage decorative header frame - responsive */}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
            {/* Top decorative line - responsive */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 sm:-translate-y-6 w-24 sm:w-32 md:w-40 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent"></div>

            {/* Vintage badge - responsive */}
            <div className="inline-flex items-center space-x-2 sm:space-x-3 md:space-x-4 bg-gradient-to-r from-[var(--background)]/90 via-[var(--background)]/80 to-[var(--background)]/90 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full mb-6 sm:mb-8 border border-[var(--primary)]/60 shadow-xl backdrop-blur-sm vintage-border-decoration">
              <Music className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--primary)]" />
              <span className="text-[var(--foreground)] font-bold text-base sm:text-lg tracking-wide">Our Commitment</span>
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--primary)] animate-vintage-pulse" />
            </div>

            {/* Main heading with vintage styling - responsive */}
            <h2 className="font-bookman text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[var(--foreground)] mb-6 sm:mb-8 text-balance relative">
              <span className="relative inline-block">
                Timeless Craftsmanship
                <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent"></div>
              </span>
              <span className="block text-[var(--primary)] mt-2 sm:mt-3 relative">
                & Musical Excellence
                <div className="absolute top-0 right-0 text-[var(--primary)]/25 text-xl sm:text-2xl md:text-3xl font-serif">♫</div>
              </span>
            </h2>

            {/* Enhanced description - responsive */}
            <div className="relative max-w-4xl mx-auto">
              <p className="text-base sm:text-lg lg:text-xl text-[var(--foreground)]/80 leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0">
                Discover why discerning musicians trust our expert craftsmanship,
                with each piano telling a story of musical excellence and artisan care. 
              </p>

              {/* Heritage highlights - responsive */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-[var(--primary)]/70 px-4 sm:px-0">
                <span className="flex items-center justify-center sm:justify-start space-x-2 bg-[var(--background)]/50 px-3 sm:px-4 py-2 rounded-full border border-[var(--primary)]/40">
                  <Crown className="h-3 w-3 sm:h-4 sm:w-4 text-[var(--primary)]" />
                  <span>Master Craftsmen Since 2016</span>
                </span>
                <span className="flex items-center justify-center sm:justify-start space-x-2 bg-[var(--background)]/50 px-3 sm:px-4 py-2 rounded-full border border-[var(--primary)]/40">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4 text-[var(--primary)]" />
                  <span>400+ Satisfied Musicians</span>
                </span>
                <span className="flex items-center justify-center sm:justify-start space-x-2 bg-[var(--background)]/50 px-3 sm:px-4 py-2 rounded-full border border-[var(--primary)]/40">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[var(--primary)]" />
                  <span>Lifetime Guarantee</span>
                </span>
              </div>
            </div>

            {/* Bottom  decorative line - responsive */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 sm:translate-y-6 w-32 sm:w-44 md:w-56 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              <div className="vintage-card p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-700 group-hover:-translate-y-3 border border-[var(--primary)]/30 hover:border-[var(--primary)]/50 relative overflow-hidden vintage-border-decoration">
                {/* Vintage paper texture overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMC42IiBmaWxsPSIjODg4IiBvcGFjaXR5PSIwLjA4Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMC44IiBmaWxsPSIjODg4IiBvcGFjaXR5PSIwLjA2Ii8+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMC40IiBmaWxsPSIjODg4IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhaW4pIi8+PC9zdmc+')] opacity-15"></div>

                {/* Vintage corner decorations - responsive */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-l-2 border-t-2 border-[var(--primary)]/25 rounded-tl-lg"></div>
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-r-2 border-t-2 border-[var(--primary)]/25 rounded-tr-lg"></div>
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-l-2 border-b-2 border-[var(--primary)]/25 rounded-bl-lg"></div>
                <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-r-2 border-b-2 border-[var(--primary)]/25 rounded-br-lg"></div>

                {/* Enhanced vintage gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-20 transition-all duration-500 mix-blend-soft-light rounded-3xl`}></div>

                {/* Floating ornament - responsive */}
                <div className="absolute top-3 sm:top-4 right-4 sm:right-5 md:right-6 text-[var(--primary)]/20 text-lg sm:text-xl md:text-2xl font-serif animate-ornament-float" style={{ animationDelay: `${index * 2}s` }}>
                  {feature.ornament}
                </div>

                <div className="relative z-10">
                  {/* Enhanced vintage icon - responsive */}
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl group-hover:shadow-3xl vintage-icon-bg border border-[var(--primary)]/30">
                    <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 text-[var(--background)]" />

                    {/* Icon shimmer effect - responsive */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 rounded-xl sm:rounded-2xl"></div>
                  </div>

                  {/* Enhanced title with vintage styling - responsive */}
                  <h3 className="font-bookman text-lg sm:text-xl lg:text-2xl font-bold text-[var(--foreground)] mb-3 sm:mb-4 md:mb-6 group-hover:text-[var(--primary)] transition-colors duration-300 relative">
                    {feature.title}
                    <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 md:w-12 h-0.5 bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent group-hover:w-12 sm:group-hover:w-14 md:group-hover:w-16 transition-all duration-300"></div>
                  </h3>

                  {/* Enhanced description - responsive */}
                  <p className="text-[var(--foreground)]/80 leading-relaxed group-hover:text-[var(--primary)] transition-colors duration-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                    {feature.description}
                  </p>

                  {/* Vintage badge at bottom - responsive */}
                  {/* <div className="mt-4 sm:mt-6 inline-flex items-center space-x-1 sm:space-x-2 bg-[var(--background)]/60 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[var(--primary)]/40 group-hover:bg-[var(--background)]/60 transition-all duration-300">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-[var(--primary)]" />
                    <span className="text-xs sm:text-sm font-medium text-[var(--foreground)]">Heritage Quality</span>
                  </div> */}
                </div>

                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 translate-x-[-300%] group-hover:translate-x-[300%] transition-transform duration-1200 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 sm:mt-16 md:mt-20 transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <div className="relative bg-gradient-to-br from-[var(--primary)] via-[var(--primary)] to-[var(--primary)] p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-3xl text-[var(--background)] max-w-5xl mx-auto overflow-hidden vintage-border-decoration">
            {/* Vintage paper texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY3RhIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iODAiIGhlaWdodD0iODAiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMDgiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjYwIiByPSIxLjIiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMDYiLz48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIwLjgiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNjdGEpIi8+PC9zdmc+')] opacity-20"></div>

            {/* Vintage decorative corners - responsive */}
            <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-l-3 border-t-3 border-[var(--background)]/40 rounded-tl-xl"></div>
            <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-r-3 border-t-3 border-[var(--background)]/40 rounded-tr-xl"></div>
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-l-3 border-b-3 border-[var(--background)]/40 rounded-bl-xl"></div>
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-r-3 border-b-3 border-[var(--background)]/40 rounded-br-xl"></div>

            {/* Floating ornaments - responsive */}
            <div className="absolute top-4 sm:top-5 md:top-6 left-8 sm:left-12 md:left-16 text-[var(--background)]/30 text-xl sm:text-2xl md:text-3xl font-serif animate-ornament-float">❦</div>
            <div className="absolute top-5 sm:top-6 md:top-8 right-8 sm:right-12 md:right-16 text-[var(--background)]/25 text-lg sm:text-xl md:text-2xl font-serif animate-ornament-float" style={{ animationDelay: "2s" }}>✦</div>
            <div className="absolute bottom-5 sm:bottom-6 md:bottom-8 left-10 sm:left-16 md:left-20 text-[var(--background)]/20 text-base sm:text-lg md:text-xl font-serif animate-ornament-float" style={{ animationDelay: "4s" }}>❋</div>

            <div className="relative z-10">
              {/* Enhanced vintage icon - responsive */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-[var(--background)]/20 to-[var(--background)]/30 rounded-full p-3 sm:p-4 border border-[var(--background)]/30 shadow-xl">
                  <Crown className="h-8 w-8 sm:h-10 sm:w-10 text-[var(--background)]" />
                </div>
              </div>

              {/* Enhanced heading - responsive */}
              <h3 className="font-bookman text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 relative">
                Ready to Discover Your Musical Heritage?
                <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-[var(--background)]/60 to-transparent"></div>
              </h3>

              {/* Enhanced description - responsive */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
                Join an exclusive community of over <span className="font-bold text-[var(--background)]">400 distinguished musicians</span> who discovered
                their perfect vintage piano companion through our heritage craftsmanship.
              </p>

              {/* Enhanced buttons - responsive */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8">
                <button className="group bg-gradient-to-r from-[var(--background)] to-[var(--background)] text-[var(--primary)] px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold hover:from-[var(--background)] hover:to-[var(--background)] hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-[var(--primary)]/50 w-full sm:w-auto">
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                    <Music className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-pulse" />
                    <span className="text-base sm:text-lg">Explore Heritage Collection</span>
                  </div>
                </button>
                {/*                 
                <button className="group border-2 border-[var(--background)]/50 text-[var(--background)] hover:bg-[var(--background)]/10 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                    <Crown className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
                    <span className="text-base sm:text-lg">Schedule Private Viewing</span>
                  </div>
                </button> */}
              </div>

              {/* Heritage guarantees - responsive */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm opacity-80">
                <span className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 bg-[var(--background)] rounded-full animate-vintage-pulse"></div>
                  <span>Authenticity</span>
                </span>
                <span className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 bg-[var(--background)] rounded-full animate-vintage-pulse" style={{ animationDelay: "1s" }}></div>
                  <span>Master Restoration</span>
                </span>
                <span className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 bg-[var(--background)] rounded-full animate-vintage-pulse" style={{ animationDelay: "2s" }}></div>
                  <span>Lifetime Legacy Support</span>
                </span>
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br from-[var(--background)]/10 via-transparent to-[var(--background)]/10 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
