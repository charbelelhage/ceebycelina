import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MeaningSection } from "@/components/meaning-section"
import { AboutCelina } from "@/components/about-celina"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MeaningSection />
        <AboutCelina />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
