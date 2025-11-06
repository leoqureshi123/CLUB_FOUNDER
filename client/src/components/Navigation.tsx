import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [gradientClass, setGradientClass] = useState('text-purple-500');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Change gradient color every 10 seconds
  useEffect(() => {
    const gradientInterval = setInterval(() => {
      setGradientClass(prev => 
        prev === 'text-purple-500' ? 'text-green-500' : 'text-purple-500'
      );
    }, 10000); // Every 10 seconds

    return () => clearInterval(gradientInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'stores', label: 'Stores' },
   
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-transparent' : 'bg-gradient-to-r from-purple-900 to-green-900'
        } py-3`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl lg:text-2xl font-bold text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all"
              data-testid="button-logo"
            >
              <span className="bg-gradient-to-r from-green-500 to-white bg-clip-text text-transparent font-extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                Founders Club
              </span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  onClick={() => scrollToSection(link.id)}
                  data-testid={`link-nav-${link.id}`}
                  className="text-base text-white hover:bg-white/20"
                >
                  {link.label}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 md:hidden pt-20">
          <div className="flex flex-col items-center gap-4 p-6">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                data-testid={`link-mobile-${link.id}`}
                className="w-full text-lg text-white hover:bg-white/20"
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}