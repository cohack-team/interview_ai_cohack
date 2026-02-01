"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>Last updated: February 1, 2026</p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, including your name, email address, 
                and interview practice data. We also automatically collect certain information about your 
                device when you use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, 
                to develop new features, and to protect InterviewIQ and our users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
              <p>
                We do not share your personal information with third parties except as described in this 
                privacy policy. We may share information with service providers who help us operate our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">4. Data Security</h2>
              <p>
                We take reasonable measures to help protect your personal information from loss, theft, 
                misuse, unauthorized access, disclosure, alteration, and destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information at any time. 
                You can also opt out of marketing communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at: 
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

export default PrivacyPage;
