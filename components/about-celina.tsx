"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

// UPDATE THIS: Replace with Celina's WhatsApp number
const WHATSAPP_NUMBER = "1234567890"
const WHATSAPP_MESSAGE = "Hello Celina! I'd like to learn more about vocal coaching at Cee."

export function AboutCelina() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Meet Your Vocal Coach
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Avatar placeholder */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full bg-accent/20 flex items-center justify-center border-4 border-accent/30">
                  <span className="text-6xl font-serif text-accent">C</span>
                </div>
              </div>

              {/* Bio */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                  Celina
                </h3>
                <p className="text-accent font-medium mb-4">
                  Founder & Vocal Coach
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With years of experience in vocal training and a deep passion for music, 
                  Celina founded Cee to create a space where aspiring singers can discover 
                  and develop their unique voice. Her personalized approach ensures that 
                  every student receives the attention and guidance they need to flourish.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you&apos;re a complete beginner or looking to refine your technique, 
                  Celina&apos;s patient and encouraging teaching style will help you reach 
                  your vocal goals.
                </p>
                <Button asChild size="lg">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Connect with Celina
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
