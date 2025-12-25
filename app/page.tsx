import { ServiceCard } from "@/components/service-card"
import { ImageSlider } from "@/components/image-slider"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import LiquidEther from "@/components/LiquidEther"
import { AnimatedSection } from "@/components/animated-section"
import { FadeIn } from "@/components/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/stagger-container"
import { PageTransition } from "@/components/page-transition"
import Image from "next/image"

export default function Home() {
  // Piano collection images
  const pianoImages = ["/images/1 piano.png", "/images/2 piano.png", "/images/3 piano.png", "/images/4 piano.png"]
  const holidayImages = [
    "/images/sriLankanAttractions1.png",
    "/images/sriLankanAttractions2.png",
    "/images/sriLankanAttractions3.png",
    "/images/sriLankanAttractions4.png",
    "/images/sriLankanAttractions5.png"
  ]
  const entertainmentImages = ["/images/live1.png", "/images/live2.png", "/images/live3.png"]

  return (
    <PageTransition>
      <main className="relative min-h-screen">
        {/* Global WebGL Fluid Background - Optimized */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <LiquidEther
            colors={['#ffffff', '#fef2f2', '#fce7f3', '#f0f9ff']}
            mouseForce={15}
            cursorSize={80}
            isViscous={false}
            viscous={20}
            iterationsViscous={16}
            iterationsPoisson={16}
            resolution={0.4}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.4}
            autoIntensity={1.5}
            takeoverDuration={0.2}
            autoResumeDelay={3000}
            autoRampDuration={0.5}
          />
        </div>
        
        {/* Enhanced Modern Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full relative z-10">
            {/* Enhanced Hero Title */}
            <div className="text-center mb-24">
              <FadeIn delay={0.1}>
                <div className="inline-block mb-8">
                  <div className="flex items-center gap-4 mb-4 opacity-70">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-400"></div>
                    <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold">Welcome to</span>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-400"></div>
                  </div>
                </div>
              </FadeIn>
              
              <AnimatedSection delay={0.2} direction="up">
                <div className="inline-block mb-6">
                  <Image
                    src="/images/logos_kyle_and_kylie_word_black.png"
                    alt="Kyle & Kylie Logo"
                    width={600}
                    height={200}
                    className="h-auto"
                    priority
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4} direction="up">
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                  Premium Services for Your Lifestyle
                </p>
              </AnimatedSection>
              
              {/* Decorative element */}
              <FadeIn delay={0.6}>
                <div className="flex items-center justify-center gap-3 mt-8">
                  <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse-slow"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-slow animation-delay-1000"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow animation-delay-2000"></div>
                </div>
              </FadeIn>
            </div>

            {/* Service Cards Grid with Stagger Animation */}
            <StaggerContainer staggerDelay={0.15} initialDelay={0.5}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                <StaggerItem direction="up">
                  <ServiceCard
                    title="Kyle & Kylie Pianoforte"
                    description="Looking to buy or rent a piano in Sri Lanka? Kyle & Kylie Pianoforte is your trusted partner since 2015. We provide high-quality cottage, upright, and grand pianos imported from Japan and Singapore, perfect for beginners, students, teachers, and professionals. Enjoy free delivery, free tuning, and a 5-year warranty with every purchase. We also offer flexible piano rental options for events, hotels, and concerts. With honest advice and expert support, we make finding the perfect piano simple and stress-free."
                    href="/pianoforte"
                    color="red"
                  />
                </StaggerItem>
                <StaggerItem direction="up">
                  <ServiceCard
                    title="Kyle & Kylie Holidays"
                    description="At KYLE AND KYLIE HOLIDAYS, every journey is uniquely yours. Founded by Lakmal Weerakoon, a licensed tour guide and former musician, we specialize in personalized Sri Lankan tours that match your style and interests. From romantic escapes to cultural adventures, we combine local expertise, flexibility, and warm hospitality to create unforgettable travel experiences your trip, your way."
                    href="/holidays"
                    color="green"
                  />
                </StaggerItem>
                <StaggerItem direction="up">
                  <ServiceCard
                    title="Kyle & Kylie Entertainment"
                    description="Welcome to Kyle and Kylie Entertainment, one of Sri Lanka's most established live entertainment providers. With over 30 years of experience in the music industry, we specialize in offering professional musicians, singers, DJs, sound systems, lighting, and entertainment planning for hotels, corporate events, weddings, and private functions. Our mission is to create memorable musical experiences that elevate every occasion."
                    href="/entertainment"
                    color="blue"
                  />
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Image Slideshows */}
        <section className="relative py-24 px-4 z-10">
          <div className="max-w-7xl mx-auto space-y-16">
            <AnimatedSection direction="up" delay={0.1}>
              <ImageSlider images={pianoImages} title="Our Piano Collection" />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.1}>
              <ImageSlider images={holidayImages} title="Sri Lankan Attractions" />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.1}>
              <ImageSlider images={entertainmentImages} title="Live Performances" />
            </AnimatedSection>
          </div>
        </section>

        <AnimatedSection direction="up" delay={0.1}>
          <ContactSection />
        </AnimatedSection>
        
        <FadeIn delay={0.1}>
          <Footer />
        </FadeIn>
      </main>
    </PageTransition>
  )
}
