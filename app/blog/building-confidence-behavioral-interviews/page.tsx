"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Clock, Calendar, Lightbulb, MessageSquare } from "lucide-react";
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
                Soft Skills
              </span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                Jan 15, 2026
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                5 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Building Confidence for Behavioral Interviews
            </h1>
            <p className="text-lg text-muted-foreground">
              Master the art of storytelling and showcase your experience effectively.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <div className="w-full h-64 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
              <Users className="w-16 h-16 text-primary" />
            </div>

            <p className="text-muted-foreground text-lg">
              Behavioral interviews can be intimidating, but with the right preparation and mindset, 
              you can turn them into opportunities to shine. Here's how to build genuine confidence 
              for these crucial conversations.
            </p>

            <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl">
              <MessageSquare className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Understanding Behavioral Questions</h2>
            </div>
            <p className="text-muted-foreground">
              Behavioral questions assess how you've handled situations in the past. Common prompts include 
              "Tell me about a time when..." or "Describe a situation where...". These questions reveal 
              your problem-solving skills, teamwork abilities, and professional maturity.
            </p>

            <h2 className="text-2xl font-semibold">The STAR Method: Your Framework for Success</h2>
            <p className="text-muted-foreground">
              Structure your responses using STAR:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Situation:</strong> Set the context for your story</li>
              <li><strong>Task:</strong> Describe your responsibility or challenge</li>
              <li><strong>Action:</strong> Explain the steps you took</li>
              <li><strong>Result:</strong> Share the outcomes and lessons learned</li>
            </ul>

            <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold m-0">Prepare Your Story Bank</h2>
            </div>
            <p className="text-muted-foreground">
              Create a collection of 5-7 detailed stories from your professional experience that demonstrate:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Leadership and initiative</li>
              <li>Problem-solving and critical thinking</li>
              <li>Teamwork and collaboration</li>
              <li>Conflict resolution</li>
              <li>Adaptability and learning from failure</li>
              <li>Project management and execution</li>
              <li>Innovation and creativity</li>
            </ul>

            <h2 className="text-2xl font-semibold">Practice Makes Permanent</h2>
            <p className="text-muted-foreground">
              Don't just think about your stories—practice telling them out loud. Record yourself or 
              practice with friends. The more you rehearse, the more natural and confident you'll sound 
              during the actual interview.
            </p>

            <h2 className="text-2xl font-semibold">Focus on Your Impact</h2>
            <p className="text-muted-foreground">
              Quantify your results whenever possible. Instead of saying "I improved team performance," 
              say "I implemented a new process that increased team productivity by 25% over three months." 
              Numbers make your achievements concrete and memorable.
            </p>

            <h2 className="text-2xl font-semibold">Be Authentic</h2>
            <p className="text-muted-foreground">
              Confidence comes from authenticity. Share real experiences and genuine reflections. 
              Interviewers can tell when you're being honest versus when you're trying to give the 
              "perfect" answer. Real stories, even with imperfect outcomes, are more compelling.
            </p>

            <h2 className="text-2xl font-semibold">Handle Difficult Questions with Grace</h2>
            <p className="text-muted-foreground">
              When asked about failures or weaknesses, frame them as learning opportunities. Show 
              self-awareness and growth. The goal isn't to be perfect—it's to demonstrate resilience 
              and the ability to learn from challenges.
            </p>

            <h2 className="text-2xl font-semibold">Build Confidence Through Preparation</h2>
            <p className="text-muted-foreground">
              Confidence isn't about faking it—it's about being well-prepared. When you have solid 
              stories ready and have practiced delivering them, you'll naturally feel more confident 
              in the interview room.
            </p>

            <div className="mt-12 p-6 bg-primary/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Practice Behavioral Interviews</h3>
              <p className="text-muted-foreground mb-4">
                Use InterviewIQ's AI to practice common behavioral questions and get instant feedback 
                on your responses.
              </p>
              <Link 
                href="/practice" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Start Practicing
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
