"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>Last updated: February 1, 2026</p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using InterviewIQ, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on InterviewIQ 
                for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and password. 
                You agree to accept responsibility for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">4. Prohibited Uses</h2>
              <p>
                You may not use our service for any illegal or unauthorized purpose. You must not 
                transmit any worms or viruses or any code of a destructive nature.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">5. Service Modifications</h2>
              <p>
                We reserve the right to modify or discontinue, temporarily or permanently, the service 
                with or without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
              <p>
                InterviewIQ shall not be liable for any indirect, incidental, special, consequential 
                or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">7. Contact Information</h2>
              <p>
                Questions about the Terms of Service should be sent to us at: hello@interviewiq.ai
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
