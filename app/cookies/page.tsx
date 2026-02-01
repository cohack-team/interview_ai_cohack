"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-8">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>Last updated: February 1, 2026</p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit a website. They help us provide you with a better experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">How We Use Cookies</h2>
              <p>
                We use cookies to understand how you use our service and to improve your experience. 
                Cookies help us remember your preferences and provide personalized content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Track your activity to show relevant ads</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Managing Cookies</h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are 
                already on your computer and you can set most browsers to prevent them from being placed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at: 
                hello@interviewiq.ai
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiesPage;
