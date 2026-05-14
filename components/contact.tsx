"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, MapPin } from "lucide-react"

// UPDATE THESE: Replace with actual contact information
const WHATSAPP_NUMBER = "1234567890"
const EMAIL_ADDRESS = "hello@ceemusic.com"
const WHATSAPP_MESSAGE = "Hello! I'd like to book a session at Cee Music School."

export function Contact() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  const emailLink = `mailto:${EMAIL_ADDRESS}?subject=Inquiry about Cee Music School`

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Start Your Musical Journey
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Ready to discover your voice? Reach out to us and take the first step 
            towards unlocking your vocal potential.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* WhatsApp Card */}
            <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-all">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-2">
                Book via WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6">
                Quick and easy booking directly through WhatsApp
              </p>
              <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Reserve Your Spot
                </a>
              </Button>
            </div>

            {/* Email Card */}
            <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-all">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-2">
                Email Us
              </h3>
              <p className="text-muted-foreground mb-6">
                Have questions? Send us an email for more information
              </p>
              <Button asChild variant="outline" size="lg" className="w-full">
                <a href={emailLink}>
                  <Mail className="mr-2 h-5 w-5" />
                  Send an Email
                </a>
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Sessions available in-person and online</span>
          </div>
        </div>
      </div>
    </section>
  )
}
