"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  CheckCircle2
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@interviewiq.ai",
    subtitle: "We'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    subtitle: "Mon-Fri 9am-6pm EST"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Tech Street, SF",
    subtitle: "San Francisco, CA 94102"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Get in Touch</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <span className="text-foreground">We'd Love to</span>{" "}
                <span className="text-gradient">Hear From You</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have questions about InterviewIQ? Want to partner with us? We're here to help.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground text-center">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                        <Input
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-muted/50 border-border/50 focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-muted/50 border-border/50 focus:border-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <Input
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="bg-muted/50 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <Textarea
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-muted/50 border-border/50 focus:border-primary min-h-[150px]"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full rounded-full bg-button-gradient hover:opacity-90 gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="glass-card rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                    <div className="w-12 h-12 rounded-xl bg-button-gradient flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-primary font-medium">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                ))}

                {/* FAQ Card */}
                <div className="glass-card rounded-2xl p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Quick Support</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need immediate help? Check out our FAQ section for instant answers to common questions.
                  </p>
                  <Button variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary/10" asChild>
                    <a href="/#faq">View FAQ</a>
                  </Button>
                </div>

                {/* Social Links */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        {social[0]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
