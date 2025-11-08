import { Mail, Linkedin, Twitter, Facebook, Link as LinkIcon, Globe, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-card/50 to-background border-t border-primary/20 py-12 overflow-hidden">
      <div className="absolute inset-0 liquid-ether opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="bg-gradient-to-r from-green-500 to-white bg-clip-text text-transparent font-extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                Founders Club
              </span>
            </h3>
            <p className="text-sm text-foreground/70">
              Empowering digital reach through innovative e-commerce solutions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Features', 'Stores'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="block text-sm text-foreground/70 hover:text-primary transition-colors"
                  data-testid={`link-footer-${link.toLowerCase()}`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Categories</h4>
            <div className="space-y-2">
              <a 
                href="https://www.aabirah.boutique/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                Fashion
              </a>
              <a 
                href="https://www.bqwatches.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                Watches
              </a>
              <a 
                href="https://qamaash.co.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                Bridal
              </a>
              <a 
                href="https://www.laptopoutlet.co.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                Electronics
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Want to Join?</h4>
            <a
              href="https://www.foundersclubofficial.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-lg transition-all hover:shadow-lg hover:shadow-primary/50"
              data-testid="link-join-us"
            >
              <LinkIcon className="w-4 h-4" />
              Connect With Us
            </a>
            <div className="flex gap-2 mt-4">
              <Button variant="ghost" size="icon" className="hover:text-primary" data-testid="button-social-mail" asChild>
                <a href="https://linktr.ee/dryousi77" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" data-testid="button-social-linkedin" asChild>
                <a href="https://www.foundersclubofficial.com/" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" data-testid="button-social-twitter" asChild>
                <a href="https://foundersclub.com" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" data-testid="button-social-facebook" asChild>
                <a href="https://www.facebook.com/share/1FdNYFQzwX/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 text-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Founders Club by Dr Muhammad Yousuf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
