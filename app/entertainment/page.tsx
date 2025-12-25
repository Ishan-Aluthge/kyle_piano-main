"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Music, Users, Mic2, Radio, Calendar, Award, Star, Sparkles, Zap, Play, ArrowRight, CheckCircle, Trophy, Headphones } from "lucide-react"

export default function EntertainmentPage() {
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

  return (
    <PageTransition>
      <div className="min-h-screen" style={{ margin: 0, padding: 0 }}>
        <Navigation />
      
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/Entertainment-hero.png"
            alt="Entertainment Performance"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#C96304]/20 via-transparent to-[#C96304]/20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#C96304]/20 backdrop-blur-md border border-[#C96304]/50 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Sparkles className="w-4 h-4" />
              Est. 1993 - 30+ Years of Excellence
            </div>
            
            <img
              src="/images/logos_kyle_and_kylie_word.png"
              alt="Kyle & Kylie Entertainment"
              className="h-20 sm:h-28 md:h-32 lg:h-40 w-auto mx-auto mb-6 hover:scale-105 transition-all duration-500 drop-shadow-2xl"
            />
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-[#C96304] via-[#E39C5C] to-[#F5DBC2] bg-clip-text text-transparent">
                Entertainment
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Bringing World-Class Entertainment to Sri Lanka's Leading Venues Since 1993
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              {[
                { num: "30+", label: "Years Experience" },
                { num: "500+", label: "Events Annually" },
                { num: "50+", label: "Artists Network" },
                { num: "4.9", label: "Client Rating" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                  <div className="text-4xl font-bold text-[#C96304]">{stat.num}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <a 
                href="#services" 
                className="group inline-flex items-center justify-center bg-gradient-to-r from-[#C96304] via-[#E39C5C] to-[#ECB478] text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-[#C96304]/50 hover:scale-105 transition-all"
              >
                <Play className="w-5 h-5 mr-2" />
                Explore Services
              </a>
              <a 
                href="https://wa.me/94718661068" 
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/20 hover:scale-105 transition-all"
              >
                Book Your Event
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      <section id="services" className="py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Entertainment <span className="text-[#C96304]">Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive services to make every moment unforgettable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Mic2 className="w-12 h-12" />,
                title: "Live Performers",
                desc: "Talented singers, pianists, violinists, saxophonists, and guitarists. Customizable themes and genres.",
                image: "/images/liveperfome2.png",
                features: ["Male & Female Singers", "Multiple Instruments", "Custom Themes"]
              },
              {
                icon: <Radio className="w-12 h-12" />,
                title: "Pro DJ Services",
                desc: "High-energy DJs for parties, weddings, and corporate events with latest equipment.",
                image: "/images/DJ.png",
                features: ["Latest Music", "Professional Equipment", "Event Coordination"]
              },
              {
                icon: <Headphones className="w-12 h-12" />,
                title: "Sound & Lighting",
                desc: "State-of-the-art sound systems and lighting equipment with expert technicians.",
                image: "/images/sounds1.png",
                features: ["Modern Equipment", "Expert Engineers", "Full Setup"]
              },
              {
                icon: <Calendar className="w-12 h-12" />,
                title: "Weekly Packages",
                desc: "Comprehensive entertainment programs for hotels with scheduling and management.",
                image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80",
                features: ["Roster Management", "Monthly Billing", "Stress-Free"]
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl scroll-animate" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="absolute inset-0">
                  <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
                </div>
                <div className="relative p-8 min-h-[400px] flex flex-col justify-end">
                  <div className="text-[#C96304] mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-[#C96304] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C96304] via-[#E39C5C] to-[#ECB478]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden scroll-animate">
              <Image
                src="/images/Founder.png"
                alt="Founder performing at piano"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            <div className="scroll-animate">
              <div className="inline-flex items-center gap-2 bg-[#C96304]/20 text-[#C96304] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Trophy className="w-4 h-4" />
                Our Story
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Founder's Journey
              </h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  My journey began in <strong className="text-white">1993</strong> as a passionate band member. Within years, I evolved into a professional piano singer, performing at Sri Lanka's most prestigious venues.
                </p>
                <p className="text-lg">
                  By <strong className="text-white">1999</strong>, I expanded to provide international-quality live music across Sri Lanka, Maldives, UAE, and Oman. Our three-piece band won the <strong className="text-[#C96304]">Golden Chef Award for Best Sri Lankan Trio</strong>.
                </p>
                <p className="text-lg">
                  Today, <strong className="text-white">Kyle and Kylie Entertainment</strong> is the trusted music provider for Shangri-La Hotels, The Kingsbury, Cinnamon Hotels & Resorts, and many more.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <Award className="w-8 h-8" />, title: "Golden Chef Award", desc: "Best Sri Lankan Trio" },
                  { icon: <Star className="w-8 h-8" />, title: "International", desc: "Sri Lanka, Maldives, UAE" },
                  { icon: <Users className="w-8 h-8" />, title: "Premium Hotels", desc: "Shangri-La, Kingsbury" },
                  { icon: <Zap className="w-8 h-8" />, title: "Full Service", desc: "Complete solutions" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                    <div className="text-[#C96304] mb-2">{item.icon}</div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Sri Lanka's <span className="text-[#C96304]">Finest</span>
            </h2>
            <p className="text-xl text-gray-400">Proud partners with prestigious hotels and resorts</p>
          </motion.div>

          <div className="relative overflow-hidden py-8">
            <motion.div 
              className="flex gap-16 items-center"
              animate={{ 
                x: [0, -1920],
              }}
              transition={{ 
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...Array(4)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-16 items-center flex-shrink-0">
                  {[
                    "/images/1.png",
                    "/images/2.png",
                    "/images/3.png",
                    "/images/4.png",
                    "/images/5.png",
                    "/images/6.png"
                  ].map((logo, idx) => (
                    <motion.div 
                      key={`${setIndex}-${idx}`}
                      className="flex-shrink-0 w-64 h-32 flex items-center justify-center bg-white rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 10px 30px rgba(201, 131, 4, 0.3)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <img
                        src={logo}
                        alt={`Hotel partner ${idx + 1}`}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      </div>
    </PageTransition>
  )
}
