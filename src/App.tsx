import { SmoothScroll } from "@/components/SmoothScroll"
import { CursorGlow } from "@/components/CursorGlow"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/sections/Hero"
import { TrustBar } from "@/sections/TrustBar"
import { ScrollStorytelling } from "@/sections/ScrollStorytelling"
import { ServicesBento } from "@/sections/ServicesBento"
import { TransformationEngine } from "@/sections/TransformationEngine"
import { ProcessJourney } from "@/sections/ProcessJourney"
import { Stats } from "@/sections/Stats"
import { WhyChooseUs } from "@/sections/WhyChooseUs"
import { CaseStudies } from "@/sections/CaseStudies"
import { Testimonials } from "@/sections/Testimonials"
import { CTA } from "@/sections/CTA"
import { Footer } from "@/sections/Footer"

function App() {
  return (
    <>
      <SmoothScroll />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ScrollStorytelling />
        <ServicesBento />
        <TransformationEngine />
        <ProcessJourney />
        <Stats />
        <WhyChooseUs />
        <CaseStudies />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
