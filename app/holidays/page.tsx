"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer, StaggerItem } from "@/components/stagger-container"
import { MapPin, Users, Clock, Heart, Mountain, Waves, CheckCircle2, Star, Compass, Shield, Award, Plane, Calendar, ArrowRight } from "lucide-react"

export default function HolidaysPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.scroll-animate')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
  const couplePackages = [
    {
      title: "Romantic Beach Escape",
      description: "Sunset walks, candlelight dinners, and private stays in stunning coastal hideaways",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      price: "From $899",
      duration: "5 Days"
    },
    {
      title: "Mountain Bliss",
      description: "Misty mountains, tea plantations, and romantic hill country getaways",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
      price: "From $799",
      duration: "4 Days"
    },
    {
      title: "Cultural Romance",
      description: "UNESCO heritage sites, ancient cities, and timeless temples",
      image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&q=80",
      price: "From $1,099",
      duration: "6 Days"
    },
    {
      title: "Adventure for Two",
      description: "Safari rides, hiking trails, and water sports",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      price: "From $1,299",
      duration: "7 Days"
    },
    {
      title: "Wellness Retreat",
      description: "Ayurveda spa sessions, yoga retreats, and serene getaways",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
      price: "From $999",
      duration: "5 Days"
    }
  ]

  const groupPackages = [
    {
      title: "Cultural Highlights",
      description: "Sigiriya, Dambulla, Kandy, Yala, and the south coast",
      duration: "7-10 Days",
      image: "/images/sigiriya.png",
      price: "From $1,599"
    },
    {
      title: "Wildlife Adventure",
      description: "Safari in Yala, whale watching in Mirissa, hiking in Knuckles",
      duration: "8-12 Days",
      image: "/images/holiday6.png",
      price: "From $1,899"
    },
    {
      title: "Heritage Journey",
      description: "Ancient cities of Anuradhapura, Polonnaruwa, and Kandy",
      duration: "6-8 Days",
      image: "/images/holiday4.png",
      price: "From $1,399"
    },
    {
      title: "Beach & Leisure",
      description: "Relax in Bentota, Hikkaduwa, Mirissa, and Trincomalee",
      duration: "5-7 Days",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      price: "From $1,199"
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen" style={{ margin: 0, padding: 0 }}>
        <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-[#F6F6F6] via-white to-[#F6F6F6] py-20 md:py-32 -mt-20 pt-32 md:pt-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-left">
              <div className="animate-slide-down">
                <span className="inline-block bg-[#045C5A] text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                  Kyle & Kylie Holidays
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#045C5A] leading-tight mb-6">
                Discover the Pearl of the Indian Ocean
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Experience Sri Lanka like never before with personalized tours crafted by local experts
              </p>
              
              {/* Key Features */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#045C5A]/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#045C5A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">100+ Destinations - Options</h3>
                    <p className="text-sm text-gray-600">Trusted experiences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#045C5A]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#045C5A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">5.0 Rating</h3>
                    <p className="text-sm text-gray-600">Excellent reviews</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a 
                  href="#packages" 
                  className="inline-flex items-center justify-center bg-[#045C5A] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#034947] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Compass className="w-5 h-5 mr-2" />
                  Explore Tours
                </a>
                <a 
                  href="https://wa.me/94718661068" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-[#045C5A] px-8 py-4 rounded-lg text-lg font-semibold border-2 border-[#045C5A] hover:bg-[#045C5A] hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="grid grid-cols-2 gap-4 h-full animate-fade-in-right">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/holiday5.png"
                    alt="Sri Lankan Beach Paradise"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/holiday1.png"
                    alt="Traditional Sri Lankan Dancer"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/holiday2.png"
                    alt="Nine Arch Bridge Train Journey"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/holiday3.png"
                    alt="Sigiriya Rock Fortress"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Own Trip Section - Enhanced */}
      <section id="plan" className="relative py-24 bg-gradient-to-br from-[#045C5A] via-[#034947] to-[#045C5A] text-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold mb-6">
              <Compass className="w-4 h-4 inline mr-2" />
              Complete Flexibility
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Plan Your Own<br />
              <span className="bg-gradient-to-r from-white via-[#8FB8B7] to-white bg-clip-text text-transparent">
                Sri Lankan Adventure
              </span>
            </h2>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              At KYLE AND KYLIE HOLIDAYS, <strong className="text-[#8FB8B7]">you are in charge</strong>. We believe every journey should reflect your style, your pace, and your interests.
            </p>
          </div>

          {/* Main Customization Grid */}
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Travel Style */}
              <StaggerItem direction="up">
                <motion.div 
                  className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl h-full"
                  whileHover={{ y: -8, scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="absolute top-4 right-4 bg-[#8FB8B7] text-[#045C5A] px-3 py-1 rounded-full text-xs font-bold">
                    Step 1
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">Choose Your Travel Style</h3>
                  <p className="text-white/80 mb-4">Whether you travel solo, as a couple, or in a group — the choice is entirely yours.</p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Solo adventures for self-discovery
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Romantic escapes for couples
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Family and group expeditions
                    </li>
                  </ul>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl h-full"
                  whileHover={{ y: -8, scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="absolute top-4 right-4 bg-[#8FB8B7] text-[#045C5A] px-3 py-1 rounded-full text-xs font-bold">
                    Step 2
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Plane className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">Select Your Transport</h3>
                  <p className="text-white/80 mb-4">Travel in comfort and style with your preferred mode of transportation.</p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Private air-conditioned vehicles
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Luxury vans for groups
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Adventure-style options
                    </li>
                  </ul>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl h-full"
                  whileHover={{ y: -8, scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="absolute top-4 right-4 bg-[#8FB8B7] text-[#045C5A] px-3 py-1 rounded-full text-xs font-bold">
                    Step 3
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">Pick Your Accommodation</h3>
                  <p className="text-white/80 mb-4">From charming boutique hotels to luxurious beach resorts — stay your way.</p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Boutique heritage hotels
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      5-star luxury resorts
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Eco-lodges and homestays
                    </li>
                  </ul>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl h-full"
                  whileHover={{ y: -8, scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="absolute top-4 right-4 bg-[#8FB8B7] text-[#045C5A] px-3 py-1 rounded-full text-xs font-bold">
                    Step 4
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">Choose Your Destinations</h3>
                  <p className="text-white/80 mb-4">Explore the places that capture your imagination and curiosity.</p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Ancient cultural cities
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Pristine coastal paradises
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Wildlife sanctuaries & hidden gems
                    </li>
                  </ul>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl h-full"
                  whileHover={{ y: -8, scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="absolute top-4 right-4 bg-[#8FB8B7] text-[#045C5A] px-3 py-1 rounded-full text-xs font-bold">
                    Step 5
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Mountain className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">Design Your Activities</h3>
                  <p className="text-white/80 mb-4">Create experiences that match your passion and energy level.</p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Historical & cultural immersion
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Adventure sports & hiking
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Culinary tours & relaxation
                    </li>
                  </ul>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl h-full"
                  whileHover={{ y: -8, scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="absolute top-4 right-4 bg-[#8FB8B7] text-[#045C5A] px-3 py-1 rounded-full text-xs font-bold">
                    Step 6
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">Savor Your Meals</h3>
                  <p className="text-white/80 mb-4">Enjoy dining experiences tailored to your tastes and dietary needs.</p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Authentic Sri Lankan cuisine
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      International dining options
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-[#8FB8B7]" />
                      Special dietary accommodations
                    </li>
                  </ul>
                </motion.div>
              </StaggerItem>
            </div>
          </StaggerContainer>

          {/* CTA Box */}
          <div className="bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-3xl p-10 text-center scroll-animate">
            <Star className="w-16 h-16 mx-auto mb-6 text-[#8FB8B7]" />
            <h3 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Journey?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We make it possible for you to plan a journey that's <strong className="text-[#8FB8B7]">truly yours</strong>. Let's start designing your dream Sri Lankan adventure today.
            </p>
            <a
              href="https://wa.me/94718661068?text=I'd like to plan my own custom Sri Lankan trip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#045C5A] px-10 py-5 rounded-full text-lg font-bold hover:bg-[#8FB8B7] hover:scale-105 transition-all shadow-2xl"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Start Planning Now
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center scroll-animate">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#045C5A]/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#045C5A]" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div className="text-center scroll-animate delay-100">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#045C5A]/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-[#045C5A]" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">12+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center scroll-animate delay-200">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#045C5A]/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-[#045C5A]" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div className="text-center scroll-animate delay-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#045C5A]/10 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-[#045C5A]" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5.0</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-[#F6F6F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Your Journey, Your Way
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At <strong>Kyle & Kylie Holidays</strong>, every journey is uniquely yours. Founded by Lakmal Weerakkoon, a licensed tour guide and former musician, we specialize in personalized Sri Lankan tours that match your style and interests.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From romantic escapes to cultural explorations and thrilling natural adventures, we create unforgettable travel experiences your trip, your way.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Shield className="w-10 h-10 text-[#045C5A] mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Licensed Guide</h3>
                  <p className="text-sm text-gray-600">Professional & authorized</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Award className="w-10 h-10 text-[#045C5A] mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Fully Insured</h3>
                  <p className="text-sm text-gray-600">Your safety first</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Star className="w-10 h-10 text-[#045C5A] mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">5-Star Service</h3>
                  <p className="text-sm text-gray-600">Exceptional quality</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <Heart className="w-10 h-10 text-[#045C5A] mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Personal Care</h3>
                  <p className="text-sm text-gray-600">Attention to detail</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl scroll-animate">
              <Image
                src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80"
                alt="Tour Guide"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solo Traveller Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              FOR SOLO TRAVELLERS
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Exploring Sri Lanka on your own is a journey of freedom, discovery, and self-connection. Our solo travel packages are designed to offer safety, flexibility, and unforgettable experiences.
            </p>
            <div className="mt-6 inline-block bg-[#045C5A] text-white px-6 py-3 rounded-full font-semibold">
              Starting from $840 for 7 Days
            </div>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StaggerItem direction="up">
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg h-full"
                  whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="w-16 h-16 bg-[#045C5A]/10 rounded-full flex items-center justify-center mb-6">
                    <Compass className="w-8 h-8 text-[#045C5A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Island Discovery Solo Tour</h3>
                  <p className="text-gray-600 mb-4">
                    A balanced journey through Sri Lanka's must-see destinations — Sigiriya, Kandy, Ella, and the southern beaches — crafted for solo explorers who want to see it all at their own pace.
                  </p>
                  <a href="https://wa.me/94718661068?text=I'm interested in the Island Discovery Solo Tour" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#045C5A] font-semibold hover:underline">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg h-full"
                  whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="w-16 h-16 bg-[#045C5A]/10 rounded-full flex items-center justify-center mb-6">
                    <Mountain className="w-8 h-8 text-[#045C5A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Adventure Solo Escape</h3>
                  <p className="text-gray-600 mb-4">
                    From hiking Adam's Peak to surfing in Weligama and safaris in Yala, this package is built for thrill-seekers ready to challenge themselves and embrace new adventures.
                  </p>
                  <a href="https://wa.me/94718661068?text=I'm interested in the Adventure Solo Escape" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#045C5A] font-semibold hover:underline">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg h-full"
                  whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="w-16 h-16 bg-[#045C5A]/10 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-[#045C5A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Immersion Solo Journey</h3>
                  <p className="text-gray-600 mb-4">
                    Experience Sri Lanka like a local. Join cooking classes, explore ancient cities with expert guides, take part in village walks, and connect with the island's rich heritage.
                  </p>
                  <a href="https://wa.me/94718661068?text=I'm interested in the Cultural Immersion Solo Journey" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#045C5A] font-semibold hover:underline">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg h-full"
                  whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="w-16 h-16 bg-[#045C5A]/10 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-[#045C5A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Wellness & Mindfulness Retreat</h3>
                  <p className="text-gray-600 mb-4">
                    Ayurveda healing, meditation retreats, yoga sessions, and peaceful eco-stays designed to help solo travellers reset, relax, and rejuvenate.
                  </p>
                  <a href="https://wa.me/94718661068?text=I'm interested in the Wellness & Mindfulness Retreat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#045C5A] font-semibold hover:underline">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg h-full"
                  whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="w-16 h-16 bg-[#045C5A]/10 rounded-full flex items-center justify-center mb-6">
                    <Waves className="w-8 h-8 text-[#045C5A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Coastal Freedom Escape</h3>
                  <p className="text-gray-600 mb-4">
                    Travel along Sri Lanka's most beautiful beaches — Unawatuna, Mirissa, Arugam Bay, and Nilaveli. Perfect for sun-chasers and ocean lovers seeking a laid-back solo getaway.
                  </p>
                  <a href="https://wa.me/94718661068?text=I'm interested in the Coastal Freedom Escape" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#045C5A] font-semibold hover:underline">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="bg-gradient-to-br from-[#045C5A] to-[#034947] text-white rounded-2xl p-8 shadow-lg h-full"
                  whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Custom Solo Travel Experience</h3>
                  <p className="text-white/90 mb-4">
                    Tell us your style — adventure, culture, relaxation, or a mix of everything — and we'll craft a personalized itinerary tailored just for you.
                  </p>
                  <a href="https://wa.me/94718661068?text=I want to create a custom solo travel experience" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white font-semibold hover:underline">
                    Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Couple Packages Section */}
      <section id="couple-packages" className="py-20 bg-[#F6F6F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Couple Tour Packages in Sri Lanka
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Sri Lanka is the perfect romantic getaway for couples seeking adventure, relaxation, and intimacy. Our couple packages are designed to create unforgettable moments together.
            </p>
            <div className="mt-6 inline-block bg-[#045C5A] text-white px-6 py-3 rounded-full font-semibold">
              Starting from $1,050 for 7 Days
            </div>
          </div>

          <StaggerContainer staggerDelay={0.12}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {couplePackages.slice(0, 3).map((pkg, index) => (
                <StaggerItem key={index} direction="up">
                  <motion.div 
                    className="bg-white rounded-2xl overflow-hidden shadow-lg group flex flex-col h-full"
                    whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{pkg.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{pkg.description}</p>
                      <a
                        href={`https://wa.me/94718661068?text=${encodeURIComponent(`I'm interested in the ${pkg.title} package`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block text-center bg-[#045C5A] text-white px-6 py-3 rounded-lg hover:bg-[#034947] transition-colors font-semibold"
                      >
                        Book Now
                      </a>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <StaggerContainer staggerDelay={0.15}>
            <div className="grid md:grid-cols-2 gap-8">
              {couplePackages.slice(3).map((pkg, index) => (
                <StaggerItem key={index} direction="up">
                  <motion.div 
                    className="bg-white rounded-2xl overflow-hidden shadow-lg group flex flex-col h-full"
                    whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{pkg.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{pkg.description}</p>
                      <a
                        href={`https://wa.me/94718661068?text=${encodeURIComponent(`I'm interested in the ${pkg.title} package`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block text-center bg-[#045C5A] text-white px-6 py-3 rounded-lg hover:bg-[#034947] transition-colors font-semibold"
                      >
                        Book Now
                      </a>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Group Packages Section */}
      <section id="group-packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              FOR GROUP TRAVELLERS
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Traveling with friends, family, or colleagues? Our group tours combine fun, culture, and comfort with plenty of flexibility.
            </p>
            <div className="mt-6 inline-block bg-[#045C5A] text-white px-6 py-3 rounded-full font-semibold">
              10 Person Group Starting from $10,500
            </div>
          </div>

          <StaggerContainer staggerDelay={0.15}>
            <div className="grid md:grid-cols-2 gap-8">
              {groupPackages.map((pkg, index) => (
                <StaggerItem key={index} direction="up">
                  <motion.div 
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg group flex flex-col h-full"
                    whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="relative h-80 w-full overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-3xl font-bold text-white mb-2">{pkg.title}</h3>
                        <p className="text-white/90">{pkg.description}</p>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <a
                        href={`https://wa.me/94718661068?text=${encodeURIComponent(`I'm interested in the ${pkg.title} tour`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block text-center bg-[#045C5A] text-white px-6 py-3 rounded-lg hover:bg-[#034947] transition-colors font-semibold mt-auto"
                      >
                        Book Now
                      </a>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section id="why-choose" className="py-24 bg-gradient-to-b from-[#F6F6F6] via-white to-[#F6F6F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-animate">
            <div className="inline-block bg-[#045C5A]/10 text-[#045C5A] px-6 py-3 rounded-full text-sm font-bold mb-6">
              <Award className="w-4 h-4 inline mr-2" />
              Your Trusted Travel Partner
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Why Choose <span className="text-[#045C5A]">Kyle & Kylie Holidays</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We bring together <strong>expertise, passion, and personalized service</strong> to create your perfect Sri Lankan adventure
            </p>
          </div>

          {/* Main Benefits Grid */}
          <StaggerContainer staggerDelay={0.12}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <StaggerItem direction="up">
                <motion.div 
                  className="group bg-white p-10 rounded-3xl shadow-lg h-full"
                  whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#045C5A] to-[#034947] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Licensed & Experienced</h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    Fully authorized Sri Lankan tour operator with comprehensive insurance coverage and 12+ years of proven track record in creating memorable journeys.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-[#045C5A] font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Government Certified</span>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="group bg-white p-10 rounded-3xl shadow-lg h-full"
                  whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#045C5A] to-[#034947] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">100% Personalized</h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    No two tours are the same. Every itinerary is meticulously crafted to match your unique interests, pace, preferences, and dreams for the perfect vacation.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-[#045C5A] font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Tailored Just for You</span>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="group bg-white p-10 rounded-3xl shadow-lg h-full"
                  whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#045C5A] to-[#034947] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Local Insider Knowledge</h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    Born and raised in Sri Lanka, we share authentic experiences, hidden gems, secret viewpoints, and local stories that guidebooks simply can't provide.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-[#045C5A] font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Authentic Experiences</span>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="group bg-white p-10 rounded-3xl shadow-lg h-full"
                  whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#045C5A] to-[#034947] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Warm Hospitality</h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    We treat every traveler as family. Enjoy intimate group sizes, personal attention, and the genuine warmth of Sri Lankan hospitality throughout your journey.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-[#045C5A] font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Like Family</span>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="group bg-white p-10 rounded-3xl shadow-lg h-full"
                  whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#045C5A] to-[#034947] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Star className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">5-Star Rated Service</h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    Consistently rated excellent by travelers from around the world. Read our glowing reviews and see why visitors choose us again and again.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-[#045C5A] font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>500+ Happy Travelers</span>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem direction="up">
                <motion.div 
                  className="group bg-white p-10 rounded-3xl shadow-lg h-full"
                  whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#045C5A] to-[#034947] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Total Flexibility</h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    Easy booking process with flexible payment options, adjustable dates, customizable itineraries, and hassle-free modifications whenever needed.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-[#045C5A] font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Easy & Flexible</span>
                  </div>
                </motion.div>
              </StaggerItem>
            </div>
          </StaggerContainer>

          {/* Testimonial Highlight Box */}
          {/* <div className="bg-gradient-to-br from-[#045C5A] to-[#034947] rounded-3xl p-12 text-white text-center scroll-animate">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 fill-[#8FB8B7] text-[#8FB8B7]" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl italic font-serif mb-6 leading-relaxed">
              "An absolutely unforgettable experience! Lakmal's knowledge, warmth, and attention to detail made our Sri Lankan adventure perfect. Every moment was magical."
            </blockquote>
            <p className="text-lg font-semibold text-[#8FB8B7]">— Sarah & Michael, Australia</p>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/90 text-lg mb-6">Join hundreds of satisfied travelers who've discovered the real Sri Lanka with us</p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-[#045C5A] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#8FB8B7] hover:scale-105 transition-all"
              >
                Start Your Journey Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div> */}
        </div>
      </section>

      {/* Owner Message Section */}
      <section id="owner" className="py-20 bg-gradient-to-br from-[#045C5A] to-[#034947] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-serif font-bold mb-4">A Message from Our Founder</h2>
          </div>
          
          <blockquote className="text-xl italic text-center leading-relaxed mb-8 scroll-animate">
            "I'm Lakmal Weerakoon. I'm an authorized Sri Lankan tour driver and general guide with years of experience. After spending a long time working as an international musician, I discovered my true calling — sharing the beauty, culture, and hidden gems of Sri Lanka with travelers from around the world. My passion is creating unique, flexible, and personalized tours where every traveler feels comfortable, inspired, and deeply connected to the island. My only goal is your complete satisfaction and an unforgettable journey."
          </blockquote>
          
          <div className="text-center scroll-animate">
            <p className="text-2xl font-bold">Lakmal Weerakoon</p>
            <p className="text-white/80">Authorized Tour Driver & General Guide</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Experience the Beauty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into the wonders that await you in Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/holiday1.png",
              "/images/holiday2.png",
              "/images/holiday3.png",
              "/images/holiday7.png",
              "/images/holiday9.png",
              "/images/holiday11.png",
              "/images/holiday10.png",
              "/images/holiday12.png"
            ].map((src, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden group cursor-pointer scroll-animate" style={{ animationDelay: `${index * 0.05}s` }}>
                <Image
                  src={src}
                  alt={`Sri Lanka ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#045C5A] to-[#034947] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 scroll-animate">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-12 text-gray-300 scroll-animate">
            Let's create your perfect Sri Lankan journey together. Contact us today for a personalized itinerary.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center scroll-animate">
            <a
              href="https://wa.me/94718661068"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Chat on WhatsApp
            </a>
            
            <a
              href="tel:+94718661068"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      </div>
    </PageTransition>
  )
}
