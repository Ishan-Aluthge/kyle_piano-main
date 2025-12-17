import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/hero-section"
import { OurStory } from "@/components/our-story"
import { Collection } from "@/components/collection"
import { WhyChooseUs } from "@/components/why-choose-us"

export default function PianofortePage() {
  return (
    <main className="min-h-screen" style={{ margin: 0, padding: 0 }}>
      <Navigation />
      <HeroSection />
      <OurStory />
      <Collection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  )
}
