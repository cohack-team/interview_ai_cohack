"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, MessageCircle, Mail, Phone } from "lucide-react";

const HelpCenterPage = () => {
  const faqs = [
    {
      question: "How do I start an AI interview practice session?",
      answer: "Navigate to the Practice page, select your interview type, and click 'Start Interview' to begin.",
    },
    {
      question: "Can I get feedback on my interview responses?",
      answer: "Yes! Our AI provides instant feedback on your answers, including areas for improvement and strengths.",
    },
    {
      question: "What types of interviews can I practice?",
      answer: "We support technical, behavioral, case study, and industry-specific interview preparation.",
    },
    {
      question: "Is my interview data kept private?",
      answer: "Absolutely. All your practice sessions and data are encrypted and kept completely confidential.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Help Center
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              How Can We <span className="text-gradient">Help You?</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions and get support for your interview preparation journey.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Live Chat</CardTitle>
                <CardDescription>Chat with our support team</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Email Support</CardTitle>
                <CardDescription>hello@interviewiq.ai</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Phone</CardTitle>
                <CardDescription>+1 (555) 123-4567</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <CardTitle className="text-lg mb-2">{faq.question}</CardTitle>
                        <CardDescription>{faq.answer}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HelpCenterPage;
