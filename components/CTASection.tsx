import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Rocket className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Start Your Journey</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground">
          Ready to Ace Your
          <br />
          <span className="text-primary">Next Interview?</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join thousands of candidates who have improved their interview skills with our AI-powered platform. Start practicing today and get the feedback you need to succeed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="rounded-full px-8 gap-2 group" size="lg">
            Get Started Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8">
            View Pricing
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-3xl font-bold text-primary">50K+</div>
            <div className="text-sm text-muted-foreground">Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">1M+</div>
            <div className="text-sm text-muted-foreground">Sessions</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
