import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="relative py-20 md:py-24 overflow-hidden" ref={ref}>
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{
              transform: isVisible ? 'perspective(1000px) rotateY(0deg)' : 'perspective(1000px) rotateY(-15deg)',
            }}
          >
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6" 
              data-testid="text-about-title"
            >
              About Founders Club
            </h2>
            <div className="space-y-6 text-base md:text-lg text-foreground/80">
              <p data-testid="text-about-line1">
                Led by  Dr Muhammad Yousaf, we create and scale global e-commerce brands.
              With 23+ successful stores, we turn ideas into profitable digital ventures.
            Innovation, design, and growth define everything we do.
             </p>
             
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{
              transform: isVisible ? 'perspective(1000px) rotateY(0deg)' : 'perspective(1000px) rotateY(15deg)',
            }}
          >
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: '23+', label: 'Active Stores', testId: 'stores' },
                { value: '8', label: 'Categories', testId: 'categories' },
                { value: '10+', label: 'Countries', testId: 'countries' },
                { value: '5+', label: 'Years', testId: 'years' },
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="relative bg-gradient-to-br from-card/80 to-card/40 p-6 rounded-xl border border-primary/30 backdrop-blur-sm float-3d"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.2)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl" />
                  <div className="relative">
                    <div 
                      className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2" 
                      data-testid={`text-stat-${stat.testId}`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}