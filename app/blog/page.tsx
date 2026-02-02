"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Video, FileText, Users } from "lucide-react";

const blogPosts = [
  {
    title: "10 Tips to Ace Your Technical Interview",
    description: "Essential strategies to prepare for coding interviews and impress your interviewers.",
    date: "Jan 28, 2026",
    category: "Interview Tips",
    icon: BookOpen,
    slug: "10-tips-technical-interview",
  },
  {
    title: "How AI is Changing Interview Preparation",
    description: "Discover how artificial intelligence is revolutionizing the way we prepare for job interviews.",
    date: "Jan 25, 2026",
    category: "Technology",
    icon: Video,
    slug: "ai-changing-interview-preparation",
  },
  {
    title: "Common Interview Mistakes to Avoid",
    description: "Learn about the most common pitfalls candidates face and how to avoid them.",
    date: "Jan 20, 2026",
    category: "Career Advice",
    icon: FileText,
    slug: "common-interview-mistakes",
  },
  {
    title: "Building Confidence for Behavioral Interviews",
    description: "Master the art of storytelling and showcase your experience effectively.",
    date: "Jan 15, 2026",
    category: "Soft Skills",
    icon: Users,
    slug: "building-confidence-behavioral-interviews",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Blog
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Interview <span className="text-gradient">Insights & Tips</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest interview strategies, career advice, and industry insights.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <post.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-medium text-primary">{post.category}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={`/blog/${post.slug}`} className="text-primary text-sm font-medium hover:underline">
                    Read more →
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

export default BlogPage;
