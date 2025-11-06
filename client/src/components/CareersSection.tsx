import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle, Briefcase, TrendingUp, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const benefits = [
  { icon: Briefcase, text: 'Work with global e-commerce brands' },
  { icon: TrendingUp, text: 'Grow your skills and career' },
  { icon: Globe, text: 'Remote-friendly opportunities' },
];

export default function CareersSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Application submitted:', formData);
    toast({
      title: 'Application Submitted!',
      description: 'Thank you for your interest. We\'ll be in touch soon.',
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="careers" className="py-24 md:py-32 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-careers-title">
            Join Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be part of a team that's building the future of e-commerce
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-career-name"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-career-email"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message">Tell us about yourself</Label>
                <Textarea
                  id="message"
                  placeholder="Share your experience and why you'd like to join our team..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  data-testid="textarea-career-message"
                  className="mt-2"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-submit-application"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-background p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Why Join Us?</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start gap-4" data-testid={`benefit-${index}`}>
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground pt-2">{benefit.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-semibold text-foreground mb-4">What We Look For</h4>
                <ul className="space-y-3">
                  {['Passion for e-commerce', 'Strong work ethic', 'Creative problem solving', 'Team collaboration'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3" data-testid={`quality-${index}`}>
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
