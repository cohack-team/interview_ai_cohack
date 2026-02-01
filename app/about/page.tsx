"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Empowering Your <span className="text-gradient">Interview Success</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to help professionals ace their interviews with AI-powered preparation tools.
            </p>
          </div>

          {/* Story Section */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-2xl font-display font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              InterviewIQ was founded with a simple vision: to make interview preparation accessible, effective, 
              and stress-free for everyone. We understand the anxiety that comes with job interviews, and we 
              believe that with the right preparation and practice, anyone can succeed.
            </p>
            <p className="text-muted-foreground">
              Leveraging cutting-edge AI technology, we've created a platform that provides personalized 
              interview practice, real-time feedback, and comprehensive resources to help you land your dream job.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 rounded-xl border bg-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower every job seeker with AI-driven tools that build confidence and improve interview performance.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Community</h3>
              <p className="text-muted-foreground">
                Join thousands of professionals who have successfully prepared for their interviews using InterviewIQ.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We're committed to providing the highest quality interview preparation experience with continuous improvements.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-muted-foreground">
                We're here to support you every step of the way with personalized guidance and expert resources.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
