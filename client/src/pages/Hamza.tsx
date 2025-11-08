"use client"

import { MessageCircle, Code, Shield, Network, Cloud, Zap, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"
import whatsappIcon from "@/assets/whatsApp.png"
import hamzaImage from "@/assets/HAMZA.jpg"
import TeamMemberCard from '@/components/TeamMemberCard'
import Navigation from '@/components/Navigation'


export default function MalikHamaza() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    // Also set a small delay to ensure scroll happens after render
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
    setIsLoaded(true)
    
    return () => clearTimeout(timer)
  }, [])

  const whatsappNumber = "+923326940932"
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Hi%20Malik,%20I%20need%20IT%20services`

  // Add keyframes for blinking animation
  const blinkKeyframes = `
    @keyframes blink {
      0% { background-color: #008000; transform: scale(1); }
      25% { background-color: #a855f7; transform: scale(1.1); }
      50% { background-color: #008000; transform: scale(1); }
      75% { background-color: #a855f7; transform: scale(1.1); }
      100% { background-color: #008000; transform: scale(1); }
    }
  `;

  const expertiseAreas = [
    "Software & Web Development",
    "Database Management & Data Security",
    "Network Setup & Troubleshooting",
    "Cybersecurity Support",
    "Hosting, Domains & Server Management",
    "IT Infrastructure Optimization",
    "Digital Transformation Support",
  ]

  const responsibilities = [
    "Build & maintain software systems",
    "Develop websites & e-commerce stores",
    "Manage networks and IT infrastructure",
    "Ensure system security & backups",
    "Provide technical support (remote/onsite)",
    "Deploy hosting, email & cloud systems",
    "Optimize business processes using IT tools",
  ]

  const services = [
    { name: "WordPress & Shopify Stores", icon: Code },
    { name: "Custom Websites", icon: Code },
    { name: "Graphic Design & Branding", icon: Zap },
    { name: "Digital Marketing & SEO", icon: Zap },
    { name: "Software & App Development", icon: Code },
    { name: "Data & Cloud Management", icon: Cloud },
    { name: "Networking Support", icon: Network },
    { name: "System Installation & Maintenance", icon: Shield },
  ]

  return (
    <div className="min-h-screen bg-background" id="top">
      <Navigation />
      <style>{blinkKeyframes}</style>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 liquid-ether opacity-20" />
        
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 bg-gradient-to-b from-transparent via-accent to-transparent hyperspeed-line"
              style={{
                height: '200%',
                left: `${Math.random() * 100}%`,
                top: '-50%',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 text-foreground">Malik Hamza Ahmad</h1>
                <p className="text-2xl font-semibold text-primary">IT Director – Founder Club</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                IT Specialist | Software Solutions | Digital Systems Expert
              </p>

              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                IT professional with strong expertise in software solutions, digital systems, e-commerce technologies,
                and IT infrastructure. Skilled in building secure, scalable platforms.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 ease-in-out"
                style={{
                  backgroundColor: '#25D366',
                  animation: 'blink 1s infinite',
                }}
              >
                <div className="w-6 h-6 relative">
                  <img 
                    src={whatsappIcon} 
                    alt="WhatsApp" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Contact on WhatsApp</span>
              </a>
              <p className="text-sm text-muted-foreground">📞 {whatsappNumber}</p>
            </div>

            {/* Right - Profile Picture */}
            <div className="flex justify-center">
              <TeamMemberCard
                name="Malik Hamza"
                title="IT Director"
                role="IT Specialist & Digital Systems Expert"
                imageUrl={hamzaImage}
                link="#top"
                altText="Malik Hamza - IT Director"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="px-6 py-16 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">Professional Summary</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            IT professional with strong expertise in software solutions, digital systems, e-commerce technologies, and
            IT infrastructure. Skilled in building secure, scalable platforms and optimizing business workflows through
            modern IT tools and automation.
          </p>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="px-6 py-16 bg-card/50 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">Core Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {expertiseAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1 flex-shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-lg font-semibold text-foreground">{area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="px-6 py-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">What I Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {responsibilities.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-primary font-bold text-lg mt-1 w-6 flex-shrink-0">✓</div>
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {responsibilities.slice(4).map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-primary font-bold text-lg mt-1 w-6 flex-shrink-0">✓</div>
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="px-6 py-16 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">IT Services Offered</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {services.map((service, idx) => {
              const IconComponent = service.icon
              return (
                <div
                  key={idx}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary hover:shadow-md transition-all text-center"
                >
                  <div className="text-primary mb-4 flex justify-center">
                    <IconComponent size={32} />
                  </div>
                  <p className="font-semibold text-foreground text-sm">{service.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 liquid-ether opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Need IT Services?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Get in touch directly on WhatsApp for quick response and solutions
          </p>

          <div className="space-y-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-200 ease-in-out w-full md:w-auto"
              style={{
                backgroundColor: '#25D366',
                animation: 'blink 1s infinite',
              }}
            >
              <div className="w-8 h-8 relative">
                <img 
                  src={whatsappIcon} 
                  alt="WhatsApp" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span>Contact on WhatsApp</span>
            </a>
            <p className="text-muted-foreground">
              📞 <span className="font-mono text-lg">{whatsappNumber}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Direct messaging available • Quick response time • Professional consultation
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border text-muted-foreground px-6 py-8">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>© 2025 Malik Hamza Ahmad - IT Director & Consultant</p>
        </div>
      </footer>
    </div>
  )
}