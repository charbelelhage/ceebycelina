"use client"

import { Music, Waves, Eye, Sparkles, Heart } from "lucide-react"

const meanings = [
  {
    icon: Music,
    title: "Si",
    subtitle: "The Music Note",
    description: "The seventh note of the musical scale - a foundation of harmony and melody that resonates through every lesson.",
  },
  {
    icon: Waves,
    title: "Sea",
    subtitle: "The Unlimited",
    description: "Like the boundless ocean, your vocal potential has no limits. We help you explore the depths of your voice.",
  },
  {
    icon: Eye,
    title: "See",
    subtitle: "The Vision",
    description: "We see the artist within you. Our vision is to reveal your unique voice and help you see your true potential.",
  },
  {
    icon: Sparkles,
    title: "Si",
    subtitle: "What If... (French)",
    description: "What if you could sing that song? What if you could perform on stage? We turn your 'what ifs' into reality.",
  },
  {
    icon: Heart,
    title: "Celina",
    subtitle: "The Founder",
    description: "Cee is born from Celina's passion for music and her dedication to nurturing voices and dreams.",
  },
]

export function MeaningSection() {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            The Story Behind Cee
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            More than just a name, Cee embodies a philosophy of music, possibility, and personal connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {meanings.map((meaning, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl bg-background border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 ${
                index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <meaning.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-1">
                {meaning.title}
              </h3>
              <p className="text-accent font-medium mb-3">{meaning.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed">
                {meaning.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
