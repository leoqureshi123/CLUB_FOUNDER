import { ExternalLink, Mail, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"
import amnaImage from "@/assets/AMNA.jpg"
import amnaResume from "@/assets/My Resume.pdf_20241003_004315_0000.pdf"
import whatsappIcon from "@/assets/whatsApp.png"
import Navigation from '@/components/Navigation'
import { useParallax } from '@/hooks/useParallax'
import heroVideo from '@/assets/video.mp4'

export default function PortfolioPage() {
  const parallaxOffset = useParallax(-0.5)
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
  
  const skills = [
    { name: "React.js", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "HTML & CSS", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
  ]

  const projects = [
    {
      title: "Library Management System",
      description: "Full-stack web and Android application with MongoDB integration for library resource management",
      tech: ["React", "MongoDB", "Node.js", "Android"],
      year: "2022",
      featured: true,
    },
    {
      title: "Travel & Tour Website",
      description: "Complete MERN stack travel booking platform with interactive UI and real-time features",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      year: "2023",
      featured: true,
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce website built with React and responsive design principles",
      tech: ["React", "CSS", "JavaScript"],
      year: "2022",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and technical skills",
      tech: ["HTML", "CSS", "JavaScript"],
      year: "2022",
    },
  ]

  const experience = [
    {
      role: "MERN Stack Developer",
      company: "AL-Buraq Institute (BITSOL Technology)",
      period: "Internship",
      description: "Full-stack development using MERN technologies, built responsive websites and components",
    },
    {
      role: "HTML & CSS Developer",
      company: "Ezline Software House",
      period: "06/2022 - 08/2022",
      description: "Worked on HTML and CSS projects with focus on responsive design",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <style>
        {`
          @keyframes blink {
            0% { background-color: #008000; transform: scale(1); }
            25% { background-color: #a855f7; transform: scale(1.1); }
            50% { background-color: #008000; transform: scale(1); }
            75% { background-color: #a855f7; transform: scale(1.1); }
            100% { background-color: #008000; transform: scale(1); }
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
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">Amna Shahid</h1>
                <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">MERN Stack Developer</p>
                <p className="text-lg text-foreground/90 leading-relaxed text-balance">
                  I'm a keen learner passionate about building modern web applications. Specialized in full-stack
                  development with React, Node.js, and MongoDB. Always exploring new technologies and growing with the
                  community.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={amnaResume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:from-primary/90 hover:to-accent/90 transition-colors"
                >
                  Let's Connect
                </a>
                <a
                  href="https://wa.me/923125960614?text=Hi%20Amna,%20I%20would%20like%20to%20discuss%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ease-in-out"
                  style={
                    {
                      backgroundColor: '#25D366',
                      animation: 'blink 1s infinite',
                    }
                  }
                >
                  <div className="w-5 h-5 relative">
                    <img 
                      src={whatsappIcon} 
                      alt="WhatsApp" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right - Profile Image Placeholder */}
            <div className="relative hidden md:block">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img src={amnaImage} alt="Amna Shahid" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 md:px-8 py-16 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.level}</p>
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
                   href="https://wa.me/923125960614?text=Hi%20Amna,%20I%20would%20like%20to%20discuss%20your%20services"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-3 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 ease-in-out"
                   style={
                     {
                       backgroundColor: '#25D366',
                       animation: 'blink 1s infinite',
                     }
                   }
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
               </div>
               <p className="text-sm text-muted-foreground mt-6">+92-327-5925739 • Narowal, Pakistan</p>
             </div>
           </section>
    </main>
  )
}