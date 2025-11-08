import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import StoreCard from './StoreCard';
import { stores } from '@/lib/stores';

export default function StoresSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="stores" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4" 
            data-testid="text-stores-title"
          >
            Our Portfolio
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            25+ successful e-commerce stores across fashion, technology, and lifestyle
          </p>
        </div>

        {/* Changed the animation classes to always show cards on mobile */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
          }`}
        >
          {stores.map((store, index) => (
            <StoreCard
              key={store.id}
              name={store.name}
              url={store.url}
              category={store.category}
              imageType={store.imageType}
              delay={index * 50}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}