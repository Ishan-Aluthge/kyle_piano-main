"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    // Set current page on mount
    setCurrentPage(window.location.pathname)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Detect current page
  const isHolidayPage = currentPage === '/holidays'
  const isEntertainmentPage = currentPage === '/entertainment'
  const isPianofortePage = currentPage === '/pianoforte'

  // Get page background color
  const getNavBackground = () => {
    if (isHolidayPage) return 'bg-[#045C5A]'
    if (isEntertainmentPage) return 'bg-[#C98304]'
    if (isPianofortePage) return 'bg-[#AA1D1D]'
    return 'bg-transparent'
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 shadow-lg -mt-0 ${getNavBackground()}`}
      style={{ marginTop: 0, paddingTop: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex-shrink-0 group cursor-pointer">
            <img
              src="/images/logos  kyle and kylie.png"
              alt="Kyle & Kylie"
              className="h-16 w-auto group-hover:scale-110 transition-transform duration-300 brightness-0 invert"
            />
          </a>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {isHolidayPage ? (
                // Holiday page navigation
                <>
                  <a
                    href="/"
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group text-white hover:text-[#8FB8B7]"
                  >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="#about"
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group text-white hover:text-[#8FB8B7]"
                  >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="#packages"
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group text-white hover:text-[#8FB8B7]"
                  >
                    Packages
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="#gallery"
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group text-white hover:text-[#8FB8B7]"
                  >
                    Gallery
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="#contact"
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group text-white hover:text-[#8FB8B7]"
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </>
              ) : isEntertainmentPage ? (
                // Entertainment page navigation
                <>
                  <a
                    href="/"
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group text-white hover:text-[#F5DBC2]"
                  >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="#services"
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group text-white hover:text-[#F5DBC2]"
                  >
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="#about"
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group text-white hover:text-[#F5DBC2]"
                  >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="#contact"
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group text-white hover:text-[#F5DBC2]"
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </>
              ) : isPianofortePage ? (
                // Pianoforte page navigation
                <>
                  <a
                    href="/"
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group text-white hover:text-pink-200"
                  >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="#story"
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group text-white hover:text-pink-200"
                  >
                    Our Story
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="#collection"
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group text-white hover:text-pink-200"
                  >
                    Collection
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="#why-choose-us"
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group text-white hover:text-pink-200"
                  >
                    Why Choose Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="#contact"
                    className="relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group text-white hover:text-pink-200"
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </>
              ) : (
                // Main page navigation - No menu items, just logo and WhatsApp
                <></>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div
              className="flex items-center space-x-2 text-sm px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer text-white bg-white/20 hover:bg-white/30 border border-white/30"
              onClick={() => {
                const phoneNumber = "94718661068"
                const message = isHolidayPage 
                  ? "Hello! I'm interested in your Sri Lanka holiday packages."
                  : isEntertainmentPage
                  ? "Hello! I'm interested in your entertainment services."
                  : isPianofortePage
                  ? "Hello! I'm interested in your piano collection."
                  : "Hello! I'd like to inquire about your services."
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span className="font-medium">+94 71 866 1068</span>
            </div>

            {/* <div
              onClick={() => {
                const phoneNumber = "94718661068" // Remove spaces and special characters
                const message = "Hello! I'm interested in your piano collection."
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
              className={`flex items-center space-x-2 text-sm px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer ${isScrolled
                  ? "text-foreground bg-green-500/10 hover:bg-green-500/20 border border-green-500/20"
                  : "text-white bg-green-500/20 hover:bg-green-500/30 drop-shadow-md border border-white/20"
                }`}
              style={{
                background: isScrolled
                  ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(34, 197, 94, 0.25) 0%, rgba(34, 197, 94, 0.15) 100%)',
                boxShadow: '0 4px 12px rgba(34, 197, 94, 0.15)'
              }}
            >
              <MessageCircle className="h-4 w-4" style={{ color: '#22C55E' }} />
              <span className="font-medium">WhatsApp</span>
            </div> */}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-xl rounded-lg mt-2 shadow-xl border border-white/20">
              {isHolidayPage ? (
                // Holiday mobile menu
                <>
                  <a href="/" className="block px-4 py-3 text-white hover:text-[#8FB8B7] hover:bg-white/10 transition-all duration-300 rounded-lg font-medium" onClick={() => setIsOpen(false)}>Home</a>
                  <a href="#about" className="block px-4 py-3 text-white hover:text-[#8FB8B7] hover:bg-white/10 transition-all duration-300 rounded-lg font-medium" onClick={() => setIsOpen(false)}>About</a>
                  <a href="#packages" className="block px-4 py-3 text-white hover:text-[#8FB8B7] hover:bg-white/10 transition-all duration-300 rounded-lg font-medium" onClick={() => setIsOpen(false)}>Packages</a>
                  <a href="#gallery" className="block px-4 py-3 text-white hover:text-[#8FB8B7] hover:bg-white/10 transition-all duration-300 rounded-lg font-medium" onClick={() => setIsOpen(false)}>Gallery</a>
                  <a href="#contact" className="block px-4 py-3 text-white hover:text-[#8FB8B7] hover:bg-white/10 transition-all duration-300 rounded-lg font-medium" onClick={() => setIsOpen(false)}>Contact</a>
                </>
              ) : isEntertainmentPage ? (
                // Entertainment mobile menu
                <>
                  <a href="/" className="block px-4 py-3 text-white hover:text-[#F5DBC2] hover:bg-white/10 transition-all duration-300 rounded-lg font-medium" onClick={() => setIsOpen(false)}>Home</a>
                  <a href="#services" className="block px-4 py-3 text-white hover:text-[#F5DBC2] hover:bg-white/10 transition-all duration-300 rounded-lg font-medium" onClick={() => setIsOpen(false)}>Services</a>
                  <a href="#about" className="block px-4 py-3 text-white hover:text-[#F5DBC2] hover:bg-white/10 transition-all duration-300 rounded-lg font-medium" onClick={() => setIsOpen(false)}>About</a>
                  <a href="#contact" className="block px-4 py-3 text-white hover:text-[#F5DBC2] hover:bg-white/10 transition-all duration-300 rounded-lg font-medium" onClick={() => setIsOpen(false)}>Contact</a>
                </>
              ) : isPianofortePage ? (
                // Pianoforte mobile menu
                <>
                  <a href="/" className="block px-4 py-3 text-white hover:text-pink-200 hover:bg-white/10 transition-all duration-300 rounded-lg font-medium" onClick={() => setIsOpen(false)}>Home</a>
                  <a href="#story" className="block px-4 py-3 text-white hover:text-pink-200 hover:bg-white/10 transition-all duration-300 rounded-lg font-medium" onClick={() => setIsOpen(false)}>Our Story</a>
                  <a href="#collection" className="block px-4 py-3 text-white hover:text-pink-200 hover:bg-white/10 transition-all duration-300 rounded-lg font-medium" onClick={() => setIsOpen(false)}>Collection</a>
                  <a href="#why-choose-us" className="block px-4 py-3 text-white hover:text-pink-200 hover:bg-white/10 transition-all duration-300 rounded-lg font-medium" onClick={() => setIsOpen(false)}>Why Choose Us</a>
                  <a href="#contact" className="block px-4 py-3 text-white hover:text-pink-200 hover:bg-white/10 transition-all duration-300 rounded-lg font-medium" onClick={() => setIsOpen(false)}>Contact</a>
                </>
              ) : (
                // Main page mobile menu - No menu items
                <></>
              )}
              <div
                onClick={() => {
                  const phoneNumber = "94718661068"
                  const message = isHolidayPage 
                    ? "Hello! I'm interested in your Sri Lanka holiday packages."
                    : isEntertainmentPage
                    ? "Hello! I'm interested in your entertainment services."
                    : isPianofortePage
                    ? "Hello! I'm interested in your piano collection."
                    : "Hello! I'd like to inquire about your services."
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, '_blank')
                  setIsOpen(false)
                }}
                className="flex items-center space-x-2 px-4 py-3 text-sm text-white bg-white/20 rounded-lg mt-2 border border-white/30 hover:bg-white/30 cursor-pointer transition-all">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span className="font-medium">+94 71 866 1068</span>
              </div>

              {/* <div 
                onClick={() => {
                  const phoneNumber = "94718661068"
                  const message = "Hello! I'm interested in your piano collection."
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, '_blank')
                  setIsOpen(false)
                }}
                className="flex items-center space-x-2 px-4 py-3 text-sm text-white bg-green-500/90 hover:bg-green-500 rounded-lg mt-2 border border-green-500/30 cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                  boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)'
                }}
              >
                <MessageCircle className="h-4 w-4 text-white" />
                <span className="font-medium">WhatsApp Us</span>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
