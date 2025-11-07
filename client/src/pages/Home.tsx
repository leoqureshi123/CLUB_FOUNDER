import { Link } from "wouter";
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import StoresSection from '@/components/StoresSection';
import Footer from '@/components/Footer';
import profilePhoto from "@/assets/profile-photo.jpg";
import doctorImage from "@/assets/DOCTOR.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      {/* Partner Section */}
      <section className="relative py-20 md:py-24 overflow-hidden" id="partner">
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-12 text-center"
          >
            Our Team Members
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
          
            {/* Dr. Yousuf Card */}
            <Link href="/doctor2#top" className="block group w-full max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl h-full border-2 border-purple-500">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={profilePhoto} 
                    alt="Dr. Yousuf - Our Partner" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Purple shine effect overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Dr. Yousuf</h3>
                    <p className="mt-1">Ceo & Founder</p>
                    <p className="mt-1">E-Commerce Expert & Entrepreneur</p>
                  </div>
                </div>
              </div>
            </Link>
            
              {/* Dr. Sidra Card */}
            <Link href="/doctor#top" className="block group w-full max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl h-full border-2 border-purple-500">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={doctorImage}
                    alt="Dr. Sidra Tul Muntaha - Our Partner" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Purple shine effect overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Dr. Sidra Tul Muntaha</h3>
                    <p className="mt-1">Co-Founder</p>
                    <p className="mt-1">Physiotherapist & Health Specialist</p>
                  </div>
                </div>
              </div>
            </Link>
          
          </div>
        </div>
      </section>
      <StoresSection />
      <Footer />
    </div>
  );
}