"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Briefcase, FileText } from "lucide-react";

const guides = [
  {
    title: "Complete Interview Preparation Guide",
    description: "A comprehensive guide covering everything from resume preparation to follow-up strategies.",
    icon: BookOpen,
    duration: "30 min read",
  },
  {
    title: "Technical Interview Mastery",
    description: "Master data structures, algorithms, and system design questions with our detailed guide.",
    icon: Code,
    duration: "45 min read",
  },
  {
    title: "Behavioral Interview Framework",
    description: "Learn the STAR method and craft compelling stories about your experience.",
    icon: Briefcase,
    duration: "20 min read",
  },
  {
    title: "Resume & Cover Letter Tips",
    description: "Create standout application materials that get you noticed by recruiters.",
    icon: FileText,
    duration: "15 min read",
  },
];

const GuidesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Guides
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Comprehensive <span className="text-gradient">Interview Guides</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Step-by-step guides to help you prepare for every aspect of the interview process.
            </p>
          </div>

          {/* Guides Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <guide.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{guide.duration}</span>
                  </div>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="/practice" className="text-primary text-sm font-medium hover:underline">
                    Read guide →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GuidesPage;
