"use client"

import { useState, useEffect } from "react"
import TeamMemberCard from '@/components/TeamMemberCard';
import Navigation from '@/components/Navigation';
import profilePhoto from "@/assets/profile-photo.jpg";
import doctorImage from "@/assets/DOCTOR.png";
import hamzaImage from "@/assets/HAMZA.jpg";
import kinzaImage from "@/assets/KINZA.jpeg";
import amnaImage from "@/assets/Amna.jpg";
import maheenImage from "@/assets/MAHEEN.jpeg";
import noorImage from "@/assets/NOOR.png";

const TeamPage = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Data for leadership team
  const officials = [
    {
      id: 1,
      name: "Dr. Muhammad Yousuf",
      title: "CEO & Founder",
      role: "E-Commerce Expert & Entrepreneur",
      image: profilePhoto,
      delay: 0,
      link: "/doctor2"
    },
    {
      id: 2,
      name: "Dr. Sidra Tul Muntaha",
      title: "Regional Manager",
      role: "DPT Department (UAE)",
      image: doctorImage,
      delay: 0.1,
      link: "/doctor"
    },
    {
      id: 3,
      name: "Malik Hamza Ahmad",
      title: "IT Director",
      role: "IT Specialist & Digital Systems Expert",
      image: hamzaImage,
      delay: 0.2,
      link: "/it-director"
    },
  ]

  // Data for team members (excluding regional managers)
  const teamMembers = [
    {
      id: 4,
      name: "Maheen Javed",
      title: "Graphic Designer",
      role: "UI/UX & Brand Designer",
      image: maheenImage,
      delay: 0.3,
      link: "https://www.behance.net/maheenjaved3"
    },
    {
      id: 5,
      name: "Noor Faisal",
      title: "Web Developer",
      role: "Proficient in MS Office (Word, PowerPoint, Excel)",
      image: noorImage,
      delay: 0.35,
     
    }
    
  ]

  // Data for regional managers
  const regionalManagers = [
    {
      id: 10,
      name: "Amna Shahid",
      title: "Regional Manager - Web Development",
      role: "MERN Stack Developer",
      image: amnaImage,
      delay: 0.7,
      link: "/amna"
    },
    {
      id: 11,
      name: "Kinza Tariq",
      title: "Regional Manager - Graphic Design",
      role: "Senior Graphic Designer",
      image: kinzaImage,
      delay: 0.8,
      link: "/kinza"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <style>
        {`
          @keyframes blink {
            0% { transform: scale(1); background-color: #ef4444; }
            25% { transform: scale(1.05); background-color: #fbbf24; }
            50% { transform: scale(1); background-color: #ef4444; }
            75% { transform: scale(1.05); background-color: #fbbf24; }
            100% { transform: scale(1); background-color: #ef4444; }
          }
        `}
      </style>
      <Navigation />
      {/* Header Section */}
      <div className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-4 tracking-tight">
            Meet Our <span className="text-accent">Team</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Talented professionals dedicated to delivering exceptional results and innovation
          </p>
        </div>

        {/* Decorative Line */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-1 w-12 bg-accent rounded-full"></div>
          <div className="h-2 w-2 bg-primary rounded-full"></div>
          <div className="h-1 w-12 bg-accent rounded-full"></div>
        </div>
      </div>

      {/* Officials Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className={`mb-12 text-center ${mounted ? "animate-slide-in-right" : "opacity-0"}`}>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">Our Officials</h2>
          <p className="text-muted-foreground">Our executive leadership driving innovation</p>
        </div>

        {/* Using the same card style as home page */}
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto mb-20">
          {officials.map((official) => (
            <div
              key={official.id}
              style={{
                animation: mounted ? `fadeInUp 0.6s ease-out ${official.delay}s backwards` : "none",
              }}
              className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
            >
              <TeamMemberCard
                name={official.name}
                title={official.title}
                role={official.role}
                imageUrl={official.image}
                link={official.link}
                altText={`${official.name} - ${official.role}`}
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-20 flex items-center gap-4 max-w-5xl mx-auto">
          <div className="flex-1 h-px bg-border"></div>
          <div className="text-muted-foreground text-sm font-medium">Regional Managers</div>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Regional Managers Section */}
        <div>
          <div className={`mb-12 text-center ${mounted ? "animate-slide-in-right" : "opacity-0"}`}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">Regional Managers</h2>
            <p className="text-muted-foreground">Leadership across key regions and departments</p>
          </div>

          {/* Using the same card style as home page */}
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {regionalManagers.map((manager) => (
              <div
                key={manager.id}
                style={{
                  animation: mounted ? `fadeInUp 0.6s ease-out ${manager.delay}s backwards` : "none",
                }}
                className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)]"
              >
                <TeamMemberCard
                  name={manager.name}
                  title={manager.title}
                  role={manager.role}
                  imageUrl={manager.image}
                  link={manager.link}
                  altText={`${manager.name} - ${manager.role}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 flex items-center gap-4 max-w-5xl mx-auto">
          <div className="flex-1 h-px bg-border"></div>
          <div className="text-muted-foreground text-sm font-medium">Team Members</div>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Team Members Section */}
        <div>
          <div className={`mb-12 text-center ${mounted ? "animate-slide-in-right" : "opacity-0"}`}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">Our Team</h2>
            <p className="text-muted-foreground">Exceptional talent across all departments</p>
          </div>

          {/* Using the same card style as home page */}
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                style={{
                  animation: mounted ? `fadeInUp 0.6s ease-out ${member.delay}s backwards` : "none",
                }}
                className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)]"
              >
                <TeamMemberCard
                  name={member.name}
                  title={member.title}
                  role={member.role}
                  imageUrl={member.image}
                  link={member.link}
                  altText={`${member.name} - ${member.role}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
  {/* Footer */}
      <footer className="bg-card border-t border-border text-muted-foreground px-6 py-8">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>© Founders Club by Dr. Muhammad Yousuf. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default TeamPage