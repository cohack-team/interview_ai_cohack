"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;