import { ServiceCard } from "@/components/service-card"
import { ImageSlider } from "@/components/image-slider"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import LiquidEther from "@/components/LiquidEther"
import Image from "next/image"

export default function Home() {
  // Piano collection images
  const pianoImages = ["/images/Piano.png", "/images/Grand piano.png", "/images/upright piano.png", "/images/electric piano.png"]
  const holidayImages = ["/images/holiday1.png", "/images/holiday2.png", "/images/holiday3.png", "/images/holiday4.png", "/images/holiday5.png", "/images/holiday6.png", "/images/holiday7.png", "/images/holiday8.png", "/images/holiday9.png"]
  const entertainmentImages = ["/images/liveperfome1.png", "/images/liveperfome2.png", "/images/liveperfome3.png", "/images/liveperfome4.png"]

  return (
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
            <div className="inline-block mb-8">
              <div className="flex items-center gap-4 mb-4 opacity-70">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-400"></div>
                <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold">Welcome to</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-400"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight animate-fade-in-up">
              <span className="inline-block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Kyle & Kylie
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-500">
              Premium Services for Your Lifestyle
            </p>
            
            {/* Decorative element */}
            <div className="flex items-center justify-center gap-3 mt-8 animate-fade-in-up animation-delay-1000">
              <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse-slow"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-slow animation-delay-1000"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow animation-delay-2000"></div>
            </div>
          </div>

          {/* Service Cards Grid with Stagger Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="animate-fade-in-up animation-delay-1500">
              <ServiceCard
                title="Kyle & Kylie Pianoforte"
                description="Looking to buy or rent a piano in Sri Lanka? Kyle & Kylie Pianoforte is your trusted partner since 2015. We provide high-quality cottage, upright, and grand pianos imported from Japan and Singapore, perfect for beginners, students, teachers, and professionals. Enjoy free delivery, free tuning, and a 5-year warranty with every purchase. We also offer flexible piano rental options for events, hotels, and concerts. With honest advice and expert support, we make finding the perfect piano simple and stress-free."
                href="/pianoforte"
                color="red"
              />
            </div>
            <div className="animate-fade-in-up animation-delay-2000">
              <ServiceCard
                title="Kyle & Kylie Holidays"
                description="At KYLE AND KYLIE HOLIDAYS, every journey is uniquely yours. Founded by Lakmal Weerakoon, a licensed tour guide and former musician, we specialize in personalized Sri Lankan tours that match your style and interests. From romantic escapes to cultural adventures, we combine local expertise, flexibility, and warm hospitality to create unforgettable travel experiences—your trip, your way."
                href="/holidays"
                color="green"
              />
            </div>
            <div className="animate-fade-in-up animation-delay-2500">
              <ServiceCard
                title="Kyle & Kylie Entertainment"
                description="Welcome to Kyle and Kylie Entertainment, one of Sri Lanka's most established live entertainment providers. With over 30 years of experience in the music industry, we specialize in offering professional musicians, singers, DJs, sound systems, lighting, and entertainment planning for hotels, corporate events, weddings, and private functions. Our mission is to create memorable musical experiences that elevate every occasion."
                href="/entertainment"
                color="blue"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Slideshows */}
      <section className="relative py-24 px-4 z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div>
            <ImageSlider images={pianoImages} title="Our Piano Collection" />
          </div>
          <div>
            <ImageSlider images={holidayImages} title="Sri Lankan Attractions" />
          </div>
          <div>
            <ImageSlider images={entertainmentImages} title="Live Performances" />
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
