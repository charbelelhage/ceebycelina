"use client"

import { Mic, Users, Music2, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

// UPDATE THIS: Replace with Celina's WhatsApp number
const WHATSAPP_NUMBER = "1234567890"

const services = [
  {
    icon: Mic,
    title: "Private Vocal Lessons",
    description: "One-on-one sessions tailored to your voice, goals, and learning pace. Perfect for focused development.",
    message: "Hello! I'm interested in private vocal lessons.",
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "Learn alongside fellow music enthusiasts in a supportive group environment. Great for beginners.",
    message: "Hello! I'd like to know more about group vocal classes.",
  },
  {
    icon: Music2,
    title: "Performance Coaching",
    description: "Prepare for auditions, performances, or recordings with specialized coaching sessions.",
    message: "Hello! I need help preparing for a performance.",
  },
  {
    icon: GraduationCap,
    title: "Beginner Programs",
    description: "Starting your vocal journey? Our beginner-friendly programs will set you on the right path.",
    message: "Hello! I'm a beginner interested in starting vocal lessons.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the perfect program to unlock your vocal potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.message)}`
            
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-background border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Book Now
                  </a>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
