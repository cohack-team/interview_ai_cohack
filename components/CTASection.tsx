import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative py-24 px-6 bg-foreground overflow-hidden">
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
          <Rocket className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Start Your Journey</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-background">
          Ready to Ace Your
          <br />
          <span className="text-primary">Next Interview?</span>
        </h2>

        <p className="text-lg text-background/85 mb-10 max-w-2xl mx-auto">
          Join thousands of candidates who have improved their interview skills with our AI-powered platform. Start practicing today and get the feedback you need to succeed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice">
            <Button className="rounded-full px-8 gap-2 group bg-primary hover:bg-primary/90 transition-colors text-primary-foreground cursor-pointer" size="lg">
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" size="lg" className=" rounded-full px-8 border-background/30 text-foreground hover:bg-background/10 hover:text-background cursor-pointer">
              View Pricing
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-3xl font-bold text-primary">50K+</div>
            <div className="text-sm text-background/70">Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">1M+</div>
            <div className="text-sm text-background/70">Sessions</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">95%</div>
            <div className="text-sm text-background/70">Success Rate</div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background">
        <svg className="absolute top-0 w-full h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            fill="hsl(var(--foreground))"
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            transform="translate(0, 80) scale(1, -1)"
          />
        </svg>
      </div>
    
    </section>
  );
};

export default CTASection;
