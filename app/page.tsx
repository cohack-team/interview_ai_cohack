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
        <section className="py-24 px-6" id="video">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="text-gradient">How</span>{" "}
                <span className="text-foreground">InterviewIQ Works</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Video coming soon. We’ll place it here once it’s ready.
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="relative w-full aspect-video rounded-2xl border border-border bg-secondary/40 flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">
                  Video coming soon
                </span>
              </div>
            </div>
          </div>
        </section>
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
