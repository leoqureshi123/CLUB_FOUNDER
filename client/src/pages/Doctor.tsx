"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, Award, Zap, BookOpen, Stethoscope, MessageCircle } from "lucide-react"
import doctorImage from "../assets/DOCTOR.png"

export default function ProfilePage() {
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
    "Electrotherapy",
    "Manual Therapy",
    "Hydrotherapy",
    "Cryotherapy",
    "Thermotherapy",
    "Mobilization",
    "Taping Techniques",
    "Traction",
    "Dry Needling",
    "Ultrasound Therapy",
    "Stretching & Strengthening",
    "Gait Training",
    "Posture Analysis",
  ]

  const certifications = [
    {
      title: "Principles & Practice of Fitness Training & Nutrition",
      institute: "Fitness & Health Care Gym",
      year: "Jan 2022",
    },
    {
      title: "Osteoarthritis & Its Physical Therapy Management & Prevention",
      institute: "NCS University System, Peshawar",
      year: "Sep 2022",
    },
    { title: "Certified Fitness Trainer", institute: "Fitness Academy Pvt. Ltd", year: "Oct 2023" },
    { title: "Basic Life Support (BLS)", institute: "Girls Cadet College System, Peshawar", year: "Sep 2023" },
    { title: "Dry Needling", institute: "Pakistan Medical & Rehabilitation Organization", year: "Mar 2024" },
    {
      title: "Hamstring Injuries & Sports Rehabilitation",
      institute: "Rahman College of Rehabilitation Sciences",
      year: "Feb 2024",
    },
    {
      title: "Kinesio Taping for Musculoskeletal Rehabilitation",
      institute: "Medic Pro International Academy (UK)",
      year: "May 2024",
    },
    {
      title: "7th International Conference on Patient Safety",
      institute: "Riphah International University",
      year: "May 2024",
    },
    { title: "Spinal Manipulation", institute: "Polycare Physio Association", year: "Jul 2024" },
  ]

  // WhatsApp link function with correct API format
  const handleWhatsAppClick = () => {
    const phoneNumber = "923119628159"; // Remove + sign for WhatsApp API
    const message = "Hello Dr. Sidra, I would like to book an appointment.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Function to scroll to Professional Overview section
  const scrollToProfessionalOverview = () => {
    const element = document.getElementById("professional-overview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Function to handle email click
  const handleEmailClick = () => {
    const email = "sidramuntaha446@gmail.com";
    const subject = "Appointment Inquiry - Dr. Sidra Tul Muntaha";
    const body = "Dear Dr. Sidra,\n\nI would like to schedule an appointment with you.\n\nBest regards,\n[Your Name]";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Function to scroll to hero section
  const scrollToHeroSection = () => {
    const element = document.getElementById("hero-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary to-transparent rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-l from-accent to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section id="hero-section" className="relative pt-20 px-4 md:px-8 lg:px-16 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className={`flex justify-center lg:justify-start ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-40 animate-glow"></div>
                <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl border border-primary/30">
                  <img
                    src={doctorImage}
                    alt="Dr. Sidra Tul Muntaha"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className={`${isLoaded ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-block">
                  <span className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-semibold animate-pulse-glow">
                    ✨ Healthcare Professional
                  </span>
                </div>

                {/* Name and Title */}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    Dr. Sidra Tul Muntaha
                  </h1>
                  <p className="text-2xl text-primary font-semibold">Physiotherapist | Doctor of Physical Therapy</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-lg hover:text-primary transition-colors cursor-pointer group">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">+92 311 9628159</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg hover:text-accent transition-colors cursor-pointer group">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium">sidramuntaha446@gmail.com</span>
                  </div>
                  {/* WhatsApp Contact */}
                  <div 
                    className="flex items-center gap-3 text-lg hover:text-green-500 transition-colors cursor-pointer group"
                    onClick={handleWhatsAppClick}
                  >
                    <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                      <MessageCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="font-medium">WhatsApp: +92 311 9628159</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-4">
                  <button 
                    className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/40 transition-all transform hover:scale-105 duration-300 flex items-center gap-2"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Appointment
                  </button>
                  <button 
                    className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
                    onClick={scrollToProfessionalOverview}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Overview */}
      <section id="professional-overview" className="relative py-20 px-4 md:px-8 lg:px-16 z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`${isLoaded ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground">Professional Overview</h2>
            <p className="text-lg text-foreground/80 leading-relaxed text-center">
              Dr. Sidra Tul Muntaha is a skilled physiotherapist committed to restoring mobility and enhancing quality
              of life. With diverse clinical experience and international certifications, she provides advanced,
              evidence-based physical therapy treatments tailored to each patient's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Expertise */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground flex items-center justify-center gap-3">
            <Stethoscope className="w-8 h-8 text-primary" />
            Core Competencies
          </h2>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border-2 border-primary/30 hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 cursor-pointer transform hover:-translate-y-1"
                style={{ animationDelay: `${0.4 + index * 0.08}s` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
                    <Zap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{skill}</h3>
                </div>
                <div className="h-1 bg-gradient-to-r from-primary to-accent rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 z-10 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8 text-accent" />
            Professional Qualifications & Certifications
          </h2>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.6s" }}
          >
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:translate-x-2 group"
                style={{
                  animationDelay: `${0.6 + (index % 6) * 0.08}s`,
                  borderLeftColor: index % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
                    <p className="text-sm text-foreground/60 mt-1">{cert.institute}</p>
                    <p className="text-xs text-primary font-semibold mt-2">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Statement */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`${isLoaded ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.8s" }}>
            <div className="relative p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border-2 border-primary/30 hover:border-accent transition-all duration-300">
              <p className="text-2xl italic text-foreground font-light leading-relaxed text-center">
                "As a clinical physical therapist, my goal is to help patients achieve optimal physical health through
                evidence-based rehabilitation, functional training, and personalized care."
              </p>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`${isLoaded ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "1s" }}>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Ready for Professional Care?</h2>
            <p className="text-xl text-foreground/80 mb-8">Get started with a consultation today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105 duration-300 flex items-center justify-center gap-2"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-6 h-6" />
                Book Appointment via WhatsApp
              </button>
              <button 
                className="px-10 py-4 bg-card border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary/10 transition-all duration-300"
                onClick={scrollToHeroSection}
              >
                Email Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 text-center text-foreground/60 border-t border-primary/20 z-10">
        <p>© 2025 Dr. Sidra Tul Muntaha. All rights reserved.</p>
      </footer>
    </div>
  )
}