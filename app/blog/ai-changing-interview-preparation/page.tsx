"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Video, Clock, Calendar, Cpu, Brain, Target } from "lucide-react";
import Link from "next/link";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="text-primary text-sm hover:underline mb-6 inline-block">
            ← Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Technology
              </span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                Jan 25, 2026
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                6 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              How AI is Changing Interview Preparation
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover how artificial intelligence is revolutionizing the way we prepare for job interviews.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <div className="w-full h-64 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
              <Video className="w-16 h-16 text-primary" />
            </div>

            <p className="text-muted-foreground text-lg">
              The landscape of interview preparation is undergoing a dramatic transformation, powered by 
              artificial intelligence. Let's explore how AI is making interview prep more effective, 
              accessible, and personalized than ever before.
            </p>

            <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl">
              <Cpu className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Personalized Learning Paths</h2>
            </div>
            <p className="text-muted-foreground">
              AI algorithms analyze your performance, identify weak areas, and create customized practice 
              plans tailored to your specific needs. No more one-size-fits-all approaches – every candidate 
              gets a unique learning experience.
            </p>

            <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl">
              <Brain className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Real-Time Feedback</h2>
            </div>
            <p className="text-muted-foreground">
              Gone are the days of waiting for feedback. AI-powered systems provide instant analysis of your 
              responses, highlighting strengths and areas for improvement. This immediate feedback loop 
              accelerates learning and skill development.
            </p>

            <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Realistic Practice Scenarios</h2>
            </div>
            <p className="text-muted-foreground">
              AI can simulate realistic interview scenarios, adapting questions based on your responses just 
              like a real interviewer would. This dynamic interaction prepares you for the unpredictability 
              of actual interviews.
            </p>

            <h2 className="text-2xl font-semibold">24/7 Availability</h2>
            <p className="text-muted-foreground">
              Practice whenever it suits you. AI-powered platforms are available round the clock, allowing 
              you to prepare at your own pace and on your own schedule. No need to coordinate with human 
              interviewers or wait for office hours.
            </p>

            <h2 className="text-2xl font-semibold">Data-Driven Insights</h2>
            <p className="text-muted-foreground">
              AI tracks your progress over time, providing detailed analytics on your performance trends. 
              See exactly how you're improving and where you need to focus more attention.
            </p>

            <h2 className="text-2xl font-semibold">The Human Touch Still Matters</h2>
            <p className="text-muted-foreground">
              While AI is transforming interview preparation, it complements rather than replaces human 
              interaction. The best preparation combines AI-powered practice with real conversations, 
              mentorship, and human feedback.
            </p>

            <h2 className="text-2xl font-semibold">The Future is Here</h2>
            <p className="text-muted-foreground">
              As AI technology continues to evolve, we can expect even more sophisticated tools for interview 
              preparation. Natural language processing, emotion recognition, and advanced analytics will 
              further enhance the preparation experience.
            </p>

            <div className="mt-12 p-6 bg-primary/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Experience AI-Powered Preparation</h3>
              <p className="text-muted-foreground mb-4">
                Try InterviewIQ's cutting-edge AI interview simulation and see the difference for yourself.
              </p>
              <Link 
                href="/ai-interview" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Start AI Interview
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
