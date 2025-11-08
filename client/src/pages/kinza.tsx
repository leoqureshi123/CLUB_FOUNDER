"use client"

import { useState, useEffect } from "react"
import { Mail } from "lucide-react"
import { useParallax } from '@/hooks/useParallax'
import kinzaImage from "@/assets/KINZA.jpeg"
import beianceImage from "@/assets/BEIANCE.jpeg"
import kinzaPdf from "@/assets/Kinza Tariq-2 (1).pdf"
import Navigation from '@/components/Navigation'
import heroVideo from '@/assets/video.mp4'

interface ExperienceItem {
  id: string
  title: string
  company: string
  period: string
  description: string
}

interface SkillItem {
  id: string
  name: string
}

interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  image: string
}

const experiences: ExperienceItem[] = [
  {
    id: "1",
    title: "GRAPHICS DESIGNER",
    company: "Shinwari Fort",
    period: "02 JUNE 2025 - 30 SEPT 2025",
    description: "Handled social media page management, designing posts, banners, and menus to enhance brand presence.",
  },
  {
    id: "2",
    title: "GRAPHICS DESIGNER",
    company: "Enomads LLC",
    period: "16 AUG 2024 - 1 MARCH 2025",
    description: "Worked on Amazon listing and label designs for e-commerce optimization.",
  },
  {
    id: "3",
    title: "GRAPHICS DESIGNER",
    company: "Designular England",
    period: "7 MAR 2024 - 30 JULY 2024",
    description: "Designed logos, social media posts, and a large number of greeting cards.",
  },
  {
    id: "4",
    title: "GRAPHICS DESIGNER INTERN",
    company: "Al-Khair Welfare",
    period: "1 OCT 2023 - 30 MARCH 2024",
    description: "Designed social media posts and banners for the organization.",
  },
]

const skills: SkillItem[] = [
  { id: "1", name: "Adobe Illustrator" },
  { id: "2", name: "Adobe Photoshop" },
  { id: "3", name: "Adobe XD" },
  { id: "4", name: "Figma" },
]

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Branding & Logo Design",
    category: "Logo Design",
    description: "Custom logos and brand identity designs for diverse clients",
    image: "/abstract-logo-branding.png",
  },
  {
    id: "2",
    title: "Social Media Campaigns",
    category: "Social Media",
    description: "Eye-catching posts and campaigns for social platforms",
    image: "/social-media-design-posts.jpg",
  },
  {
    id: "3",
    title: "E-Commerce Design",
    category: "E-Commerce",
    description: "Amazon listings and product labels",
    image: "/ecommerce-product-design.jpg",
  },
  {
    id: "4",
    title: "Greeting Cards",
    category: "Print Design",
    description: "Creative greeting card designs for various occasions",
    image: "/greeting-cards-design.jpg",
  },
]

export default function Portfolio() {
  const parallaxOffset = useParallax(-0.5)
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

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

  return (
    <main className="min-h-screen bg-background text-foreground">
      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>
      <Navigation />

      {/* Hero Section with liquid ether and hyperspeed lines */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 liquid-ether opacity-40" />

        {/* Video Background */}
        <div className="absolute inset-0 z-0 opacity-30 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              transform: `translateY(${parallaxOffset}px)`,
            }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-accent to-transparent hyperspeed-line"
              style={{
                width: '200%',
                left: '-50%',
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">Kinza Tariq</h1>
                <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">Graphic Designer</p>
                <p className="text-lg text-foreground/90 leading-relaxed text-balance">
                  I am an experienced graphic designer focused on creating visually impactful designs. I specialize in logo
                  design, social media content, and branding solutions that meet business objectives.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={kinzaPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:from-primary/90 hover:to-accent/90 transition-colors"
                >
                  <Mail size={20} />
                  Get in Touch
                </a>
                <a
                  href="https://www.behance.net/kinzatariq2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border text-white rounded-lg font-semibold hover:bg-primary/10 transition-colors animate-pulse"
                  style={{
                    background: 'linear-gradient(45deg, #45a1ff, #0066cc)',
                    border: 'none',
                    animation: 'pulse 1s infinite'
                  }}
                >
                  <img src={beianceImage} alt="Behance" className="w-5 h-5" />
                  Behance
                </a>
              </div>
            </div>

            {/* Right - Profile Image with DOCTOR.tsx style */}
            <div className={`flex justify-center lg:justify-start`}>
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-40 animate-glow"></div>
                <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl border border-primary/30">
                  <img
                    src={kinzaImage}
                    alt="Kinza Tariq"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="p-6 rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5"
              >
                <h3 className="text-lg font-bold text-foreground">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="px-4 md:px-8 py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={kinzaPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              <Mail size={20} />
              View CV
            </a>
            <a
              href="https://www.behance.net/kinzatariq2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border text-white rounded-lg font-semibold hover:bg-primary/10 transition"
              style={{
                background: 'linear-gradient(45deg, #45a1ff, #0066cc)',
                border: 'none',
                animation: 'pulse 1s infinite'
              }}
            >
              <img src={beianceImage} alt="Behance" className="w-5 h-5" />
              View Behance Portfolio
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6">+92-327-5925739 • Narowal, Pakistan</p>
        </div>
      </section>


    </main>
  )
}