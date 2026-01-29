import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative bg-foreground text-background overflow-hidden">
      {/* Wave decoration at top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-background">
        <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path 
            fill="hsl(var(--foreground))" 
            d="M0,60 C320,20 640,80 960,40 C1200,10 1360,50 1440,30 L1440,80 L0,80 Z"
          />
        </svg>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Start Your Journey</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="text-background">Ready to Ace Your</span>
            <br />
            <span className="text-primary">Next Interview?</span>
          </h2>

          <p className="text-lg text-background/70 mb-10 max-w-2xl mx-auto">
            Join thousands of candidates who have improved their interview skills with our AI-powered platform. Start practicing today and get the feedback you need to succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full px-8 gap-2 group bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 border-background/30 text-background hover:bg-background/10 hover:text-background">
              View Pricing
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-background/60">Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">1M+</div>
              <div className="text-sm text-background/60">Sessions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-background/60">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
