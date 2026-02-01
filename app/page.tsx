import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <section className="relative overflow-hidden py-24 px-6 bg-foreground" id="video">
          <div className="absolute top-0 left-0 right-0 h-20 bg-background">
            <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
              <path
                fill="hsl(var(--foreground))"
                d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
              />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="text-gradient">How</span>{" "}
                <span className="text-background">InterviewIQ Works</span>
              </h2>
              <p className="text-muted-background max-w-2xl mx-auto">
                Video coming soon. We’ll place it here once it’s ready.
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="relative w-full aspect-video rounded-2xl border border-border bg-secondary/40 flex items-center justify-center">
                <span className="text-sm font-medium text-muted-background">
                  Video coming soon
                </span>
              </div>
            </div>
          </div>
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
        <CTASection />
        <FAQSection />
        
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
