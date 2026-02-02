import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ChatMockup from "./ChatMockup";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden" id="home">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-emerald-100/40 blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      
      {/* Decorative lines */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-emerald-300/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-emerald-200/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">AI-Powered Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              <span className="text-gradient">Ace Your Next Interview</span>
              <br />
              <span className="text-foreground">With AI-Powered</span>
              <br />
              <span className="text-foreground">Mock Practice.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Practice makes perfect. Our AI interviewer simulates real interview scenarios, provides instant feedback, and helps you build confidence to land your dream job.
            </p>
            
            <Link href="/ai-interview">
              <Button variant="default" size="lg" className="rounded-full px-8 gap-2 group shadow-lg hover:shadow-xl transition-all bg-emerald-600 hover:bg-emerald-700 text-white">
                Start My Interview
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right content - Chat mockup */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
