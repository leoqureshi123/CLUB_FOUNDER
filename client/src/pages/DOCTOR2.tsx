import { useState, useEffect } from "react";
import { Mail, Globe, Link as LinkIcon, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import profilePhoto from "@/assets/profile-photo.jpg";
import amazonLogo from "@/assets/amazon-logo.png";
import fiverrLogo from "@/assets/fiverr-logo.png";
import shopifyLogo from "@/assets/shopify-logo.png";
import facebookLogo from "@/assets/Facbook.png";

const ProfileCard = () => {
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

  const partners = [
    { src: amazonLogo, name: "Amazon" },
    { src: shopifyLogo, name: "Shopify" },
    { src: fiverrLogo, name: "Fiverr" },
  ];

  const roles = [
    { title: "Amazon Emerald Partner", location: "UK, USA, UAE" },
    { title: "Shopify Country Director", location: "UK, USA, UAE" },
    { title: "Fiverr Director", location: "International" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Background effects similar to Home.tsx */}
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
      
      <div className="relative z-10 w-full max-w-6xl">
        {/* Main Profile Card */}
        <Card className={`professional-card overflow-hidden ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
          <div className="grid lg:grid-cols-[400px_1fr] gap-0">
            {/* Left Sidebar - Profile */}
            <div className={`bg-gradient-to-br from-primary/5 to-primary/10 p-8 lg:p-12 flex flex-col items-center justify-center border-r border-border ${isLoaded ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              <div className="space-y-8 w-full">
                {/* Profile Photo */}
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                  <img
                    src={profilePhoto}
                    alt="Dr. Yousuf - E-Commerce Expert"
                    className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-xl"
                  />
                </div>

                {/* Name & Title */}
                <div className="text-center space-y-2">
                  <h1 className="text-3xl font-bold text-foreground">Dr. Yousuf</h1>
                  <p className="text-muted-foreground font-medium">E-Commerce Ambassador</p>
                  <p className="text-sm text-muted-foreground">Entrepreneur • Doctor</p>
                </div>

                <Separator />

                {/* Partner Logos */}
                <div className="space-y-4">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center">
                    Our Expertise
                  </h3>
                  <div className="flex flex-col gap-4">
                    {partners.map((partner, index) => (
                      <div
                        key={index}
                        className="w-full h-16 rounded-lg bg-gradient-to-r from-white to-green-100 border border-green-200 px-4 py-2 flex items-center justify-center hover:shadow-md transition-shadow"
                        title={partner.name}
                      >
                        <img
                          src={partner.src}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Details */}
            <CardContent className={`p-8 lg:p-12 space-y-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
              {/* Header */}
              <div className={`space-y-4 ${isLoaded ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Available for Consultation
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  E-Commerce Expert & Business Strategist
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Specializing in Amazon, Shopify, and Fiverr marketplaces with proven expertise
                  across international markets. Helping businesses scale their online presence.
                </p>
              </div>

              <Separator />

              {/* Professional Roles */}
              <div className={`space-y-4 ${isLoaded ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Leadership Positions
                </h3>
                <div className="space-y-4">
                  {roles.map((role, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    >
                      <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">{role.title}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {role.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Contact Information */}
              <div className={`space-y-4 ${isLoaded ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.7s" }}>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Get in Touch
                </h3>
                <div className="grid gap-3">
                  {/* Facebook Link - Moved to first position */}
                  <a
                    href="https://www.facebook.com/share/1FdNYFQzwX/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary transition-all group relative overflow-hidden animate-pulse ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                    style={{ animationDelay: "0.8s" }}
                  >
                    {/* Continuous blinking shine effect for entire section */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-20 animate-pulse rounded-lg"></div>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors relative">
                      <img 
                        src={facebookLogo}
                        alt="Facebook"
                        className="w-full h-full object-contain relative z-10"
                      />
                    </div>
                    <div className="flex-1 relative z-10">
                      <p className="text-xs text-muted-foreground">Facebook</p>
                      <p className="text-sm font-medium text-foreground">Follow on Facebook</p>
                    </div>
                  </a>

                  <a
                    href="mailto:founderscluboffc@gmail.com"
                    className={`flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                    style={{ animationDelay: "0.9s" }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium text-foreground">founderscluboffc@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://foundersclubofficial.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                    style={{ animationDelay: "1.0s" }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Website</p>
                      <p className="text-sm font-medium text-foreground">foundersclubofficial.com</p>
                    </div>
                  </a>

                  <a
                    href="https://linktr.ee/dryousi77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                    style={{ animationDelay: "1.1s" }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <LinkIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Portfolio</p>
                      <p className="text-sm font-medium text-foreground">linktr.ee/dryousi77</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-wrap gap-3 pt-4 ${isLoaded ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "1.1s" }}>
                <button 
                  className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/40 transition-all transform hover:scale-105 duration-300 flex items-center gap-2"
                  onClick={() => window.location.href = "mailto:founderscluboffc@gmail.com"}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </button>
                <button 
                  className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
                  onClick={() => window.open("https://foundersclubofficial.com", "_blank")}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Visit Website
                </button>
              </div>

              {/* Availability Notice */}
              <div className={`mt-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 relative overflow-hidden ${isLoaded ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "1.2s" }}>
                <div className="absolute  "></div>
                <p className="text-sm font-bold text-red-700 relative z-10">
                  <strong>Note:</strong> Office closed on Wednesdays
                </p>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileCard;