"use client"

import { Button } from "@/components/ui/button"
import { Music, Award, Truck, Wrench, Play, Star, Contact, Phone } from "lucide-react"
import { useEffect, useState } from "react"
import { colors } from "@/lib/utils"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-8 sm:pb-12 lg:pb-16 -mt-20 pt-20"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, #AA1D1D 0%, #8B1515 40%, #AA1D1D 80%),
          radial-gradient(circle at 80% 20%, #6A6A6A 0%, transparent 30%),
          linear-gradient(135deg, #AA1D1D 0%, #8B1515 25%, #AA1D1D 50%, #7A1212 75%, #AA1D1D 100%)
        `,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 z-0">
        {/* Vintage paper texture overlay with musical texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 3px,
                rgba(255,249,229,0.08) 3px,
                rgba(255,249,229,0.08) 6px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 3px,
                rgba(255,255,255,0.05) 3px,
                rgba(255,255,255,0.05) 6px
              ),
              radial-gradient(circle at 50% 50%, rgba(255,249,229,0.05) 0%, transparent 70%)
            `
          }}
        ></div>

        {/* Vintage decorative overlay with warm tones */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at top, rgba(255,249,229,0.12) 0%, transparent 60%),
              radial-gradient(ellipse at bottom, rgba(255,255,255,0.08) 0%, transparent 60%),
              linear-gradient(45deg, rgba(255,249,229,0.15) 0%, transparent 30%, rgba(255,255,255,0.1) 70%, transparent 100%)
            `
          }}
        ></div>

        {/* Piano image with elegant vintage effect */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/elegant-grand-piano-in-luxury-room.jpg')",
            filter: 'sepia(0.6) contrast(1.2) brightness(0.4) saturate(1.1) hue-rotate(10deg)',
            opacity: 0.15,
            mixBlendMode: 'multiply'
          }}
        ></div>

        {/* Elegant vintage vignette effect */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(170,29,29,0.3) 70%, rgba(13,13,13,0.4) 90%, #0D0D0D 100%),
              linear-gradient(135deg, rgba(170,29,29,0.2) 0%, transparent 20%, transparent 80%, rgba(106,106,106,0.1) 100%)
            `
          }}
        ></div>

        {/* Elegant vintage decorative elements - Hidden on mobile */}
        <div
          className="hidden sm:block absolute top-10 left-10 w-40 h-40 rounded-full animate-pulse"
          style={{
            background: `
              conic-gradient(from 0deg, rgba(255,249,229,0.3), transparent, rgba(255,255,255,0.2), transparent, rgba(255,249,229,0.3))
            `,
            border: `3px solid rgba(255,249,229,0.4)`,
            boxShadow: `
              0 0 30px rgba(255,249,229,0.3),
              inset 0 0 20px rgba(255,255,255,0.1),
              0 0 60px rgba(170,29,29,0.2)
            `,
            filter: 'blur(1px)'
          }}
        ></div>

        <div
          className="hidden sm:block absolute bottom-20 right-20 w-32 h-32 rounded-full animate-pulse"
          style={{
            background: `
              conic-gradient(from 45deg, rgba(106,106,106,0.3), transparent, rgba(255,249,229,0.2), transparent, rgba(106,106,106,0.3))
            `,
            border: `2px solid rgba(106,106,106,0.5)`,
            boxShadow: `
              0 0 25px rgba(106,106,106,0.3),
              inset 0 0 15px rgba(255,249,229,0.1),
              0 0 50px rgba(255,255,255,0.1)
            `,
            animationDelay: "2s",
            filter: 'blur(0.5px)'
          }}
        ></div>

        <div
          className="hidden sm:block absolute top-1/2 left-20 w-24 h-24 rounded-full animate-pulse"
          style={{
            background: `
              radial-gradient(circle, rgba(255,249,229,0.25) 0%, rgba(255,255,255,0.15) 50%, transparent 100%)
            `,
            boxShadow: `
              0 0 20px rgba(255,249,229,0.3),
              0 0 40px rgba(255,255,255,0.1)
            `,
            animationDelay: "1s",
            filter: 'blur(0.5px)'
          }}
        ></div>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Elegant floating musical elements with vintage glow - Hidden on mobile */}
        <div
          className="hidden sm:block absolute top-20 left-10 animate-bounce"
          style={{
            color: '#FFF9E5',
            filter: 'drop-shadow(0 0 15px rgba(255,249,229,0.8)) drop-shadow(0 0 30px rgba(255,255,255,0.4)) drop-shadow(0 0 45px rgba(170,29,29,0.3))',
            opacity: 0.9,
            animationDuration: '3s'
          }}
        >
          <Music className="h-16 w-16" />
        </div>

        <div
          className="hidden sm:block absolute top-40 right-20 animate-pulse"
          style={{
            animationDelay: "1s",
            color: '#FFFFFF',
            filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.7)) drop-shadow(0 0 25px rgba(106,106,106,0.3))',
            opacity: 0.8
          }}
        >
          <Star className="h-12 w-12" />
        </div>

        <div
          className="hidden sm:block absolute bottom-32 left-1/4 animate-bounce"
          style={{
            animationDelay: "2s",
            animationDuration: '4s',
            color: '#FFF9E5',
            filter: 'drop-shadow(0 0 20px rgba(255,249,229,0.9)) drop-shadow(0 0 40px rgba(255,255,255,0.5)) drop-shadow(0 0 60px rgba(170,29,29,0.3))',
            opacity: 0.85
          }}
        >
          <Music className="h-18 w-18" />
        </div>

        <div
          className="hidden sm:block absolute top-1/2 right-1/4 animate-pulse"
          style={{
            animationDelay: "0.5s",
            color: '#6A6A6A',
            filter: 'drop-shadow(0 0 15px rgba(106,106,106,0.8)) drop-shadow(0 0 30px rgba(255,249,229,0.3))',
            opacity: 0.7
          }}
        >
          <Star className="h-14 w-14" />
        </div>

        {/* Elegant floating vintage particles - Hidden on mobile */}
        <div
          className="hidden sm:block absolute top-1/3 left-1/3 w-4 h-4 rounded-full animate-pulse"
          style={{
            background: `radial-gradient(circle, rgba(255,249,229,0.8), rgba(255,255,255,0.4))`,
            boxShadow: `
              0 0 15px rgba(255,249,229,0.6),
              0 0 30px rgba(255,255,255,0.3),
              0 0 45px rgba(170,29,29,0.2)
            `
          }}
        ></div>

        <div
          className="hidden sm:block absolute top-2/3 right-1/3 w-3 h-3 rounded-full animate-pulse"
          style={{
            background: `radial-gradient(circle, rgba(255,255,255,0.9), rgba(106,106,106,0.5))`,
            boxShadow: `
              0 0 12px rgba(255,255,255,0.7),
              0 0 25px rgba(106,106,106,0.4),
              0 0 40px rgba(255,249,229,0.2)
            `,
            animationDelay: "2s"
          }}
        ></div>

        <div
          className="hidden sm:block absolute top-1/4 right-1/2 w-5 h-5 rounded-full animate-pulse"
          style={{
            background: `radial-gradient(circle, rgba(255,249,229,0.7), transparent)`,
            boxShadow: `
              0 0 18px rgba(255,249,229,0.5),
              0 0 35px rgba(255,255,255,0.3),
              0 0 50px rgba(170,29,29,0.1)
            `,
            animationDelay: "1s"
          }}
        ></div>
      </div>

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div
          className={`mb-6 sm:mb-8 transition-all duration-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <img
            src="/images/logos_kyle_and_kylie_word.png"
            alt="Kyle & Kylie"
            className="h-16 sm:h-24 md:h-28 lg:h-36 xl:h-40 w-auto mx-auto hover:scale-105 transition-all duration-500 cursor-default drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(255,249,229,0.6)) drop-shadow(0 0 60px rgba(255,255,255,0.3))'
            }}
          />
          <div
            className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] mt-4 sm:mt-6 relative"
            style={{
              color: '#FFF9E5'
            }}
          >
            <span className="relative">
              PIANOFORTE
              <div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(255,249,229,0.8), rgba(255,255,255,0.6), rgba(255,249,229,0.8), transparent)`
                }}
              ></div>
            </span>
          </div>
        </div>

        <p
          className={`font-montserrat text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-10 sm:mb-12 text-pretty font-light leading-relaxed transition-all duration-1500 delay-600 px-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{
            color: '#FFF9E5'
          }}
        >
          Your trusted partner for{" "}
          <span
            className="font-semibold"
            style={{
              color: '#FFFFFF'
            }}
          >
            premium pianos
          </span>{" "}
          in Sri Lanka
          <br />
          <span
            className="font-montserrat text-sm sm:text-base md:text-lg lg:text-xl font-medium block mt-2"
            style={{
              color: '#d6d5d5ff'
            }}
          >
            Since 2015 • Luxury • Excellence
          </span>
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-8 sm:mb-12 px-4 transition-all duration-1500 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Button
            size="lg"
            className="text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full shadow-2xl hover:scale-105 transition-all duration-500 group border-2 font-semibold tracking-wide w-full sm:w-auto"
            style={{
              background: 'white',
              borderColor: '#AA1D1D',
              color: '#AA1D1D',
              boxShadow: `
                0 10px 25px rgba(170,29,29,0.3),
                0 0 20px rgba(170,29,29,0.2),
                inset 0 1px 0 rgba(255,255,255,0.2)
              `
            }}
            onClick={() => {
              const collectionSection = document.getElementById('collection')
              if (collectionSection) {
                collectionSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#AA1D1D';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.boxShadow = `
                0 15px 35px rgba(170,29,29,0.4),
                0 0 30px rgba(170,29,29,0.3),
                inset 0 1px 0 rgba(255,255,255,0.3)
              `;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#AA1D1D';
              e.currentTarget.style.boxShadow = `
                0 10px 25px rgba(170,29,29,0.3),
                0 0 20px rgba(170,29,29,0.2),
                inset 0 1px 0 rgba(255,255,255,0.2)
              `;
            }}
          >
            <Music className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-sm sm:text-base">Explore Our Collection</span>
          </Button>

          {/* <Button
            size="lg"
            variant="outline"
            className="hidden sm:flex text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full hover:scale-105 transition-all duration-500 group shadow-xl font-semibold tracking-wide w-full sm:w-auto"
            style={{
              background: 'white',
              borderColor: '#AA1D1D',
              borderWidth: '3px',
              color: '#AA1D1D',
              boxShadow: `
                0 8px 20px rgba(170,29,29,0.25),
                0 0 15px rgba(170,29,29,0.15),
                inset 0 1px 0 rgba(255,255,255,0.2)
              `
            }}
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#AA1D1D';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.boxShadow = `
                0 12px 30px rgba(170,29,29,0.35),
                0 0 25px rgba(170,29,29,0.25),
                inset 0 1px 0 rgba(255,255,255,0.3)
              `;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#AA1D1D';
              e.currentTarget.style.boxShadow = `
                0 8px 20px rgba(170,29,29,0.25),
                0 0 15px rgba(170,29,29,0.15),
                inset 0 1px 0 rgba(255,255,255,0.2)
              `;
            }}
          >
            <Phone className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-500" />
            <span className="text-sm sm:text-base" >Contact Us Today</span>
          </Button> */}
        </div>

        
      </div>

      {/* Floating WhatsApp Icon - Mobile Only */}
      <div
        onClick={() => {
          const phoneNumber = "94718661068" // Remove spaces and special characters
          const message = "Hello! I'm interested in your piano collection."
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
          window.open(whatsappUrl, '_blank')
        }}
        className="fixed bottom-6 right-6 z-50 sm:hidden"
        >
        <a

          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-amber-100 hover:bg-amber-200 rounded-full shadow-2xl hover:shadow-amber-200/50 transition-all duration-300 hover:scale-110"
          style={{
            boxShadow: `
              0 8px 25px rgba(245, 158, 11, 0.4),
              0 0 20px rgba(245, 158, 11, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.2)
            `
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `
              0 12px 35px rgba(245, 158, 11, 0.6),
              0 0 30px rgba(245, 158, 11, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.3)
            `;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = `
              0 8px 25px rgba(245, 158, 11, 0.4),
              0 0 20px rgba(245, 158, 11, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.2)
            `;
          }}
        >
          <svg
            className="w-7 h-7 text-amber-800 group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </a>
      </div>
    </section>
  )
}
