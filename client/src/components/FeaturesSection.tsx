import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TrendingUp, ShoppingBag, Palette, Globe, Sparkles, Users } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Digital Brand Development',
    description: 'Building strong online brands that inspire global trust.',
    direction: 'left',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce Expertise',
    description: 'Creating and scaling high-performing online stores.',
    direction: 'right',
  },
  {
    icon: Palette,
    title: 'Creative Design Solutions',
    description: 'Modern, impactful visuals that boost your brand image.',
    direction: 'left',
  },
  {
    icon: Globe,
    title: 'Global Business Strategy',
    description: 'Helping founders grow across borders with confidence.',
    direction: 'right',
  },
  {
    icon: Sparkles,
    title: 'Innovation & Technology',
    description: 'Smart tools that drive growth and digital success.',
    direction: 'left',
  },
  {
    icon: Users,
    title: 'Dedicated Team Support',
    description: 'Reliable professionals focused on your brand\'s success.',
    direction: 'right',
  },
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="features" className="relative py-16 md:py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-card/30 to-background/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4" 
            data-testid="text-features-title"
          >
            What We Do
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions for building and scaling your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const translateX = feature.direction === 'left' ? '-translate-x-12' : 'translate-x-12';
            
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-card/20 to-card/10 p-8 rounded-xl border border-primary/10 hover-elevate active-elevate-2 transition-all duration-700 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${translateX}`
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transform: isVisible ? 'perspective(1000px) rotateY(0deg) rotateX(0deg)' : 'perspective(1000px) rotateY(5deg) rotateX(5deg)',
                  boxShadow: '0 0 40px rgba(168, 85, 247, 0.1)',
                }}
                data-testid={`card-feature-${index}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Animated snake border */}
                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-green-500 origin-left scale-x-0 group-hover:snake-animation transition-transform duration-1000 ease-linear"></div>
                </div>
                
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="relative text-xl font-semibold text-foreground mb-3" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="relative text-foreground/70" data-testid={`text-feature-desc-${index}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}