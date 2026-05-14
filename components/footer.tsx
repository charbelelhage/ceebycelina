import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <Image
            src="logo.png"
            alt="Cee Music School"
            width={120}
            height={120}
            className="w-20 h-20 object-contain"
          />
          <p className="text-muted-foreground text-center max-w-md">
            Discover the unlimited potential of your voice at Cee Music School.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <p className="text-sm text-muted-foreground/70">
            &copy; {currentYear} Cee by Celi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
