"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Clock, Calendar, XCircle, AlertTriangle } from "lucide-react";
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
                Career Advice
              </span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                Jan 20, 2026
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                7 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Common Interview Mistakes to Avoid
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn about the most common pitfalls candidates face and how to avoid them.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <div className="w-full h-64 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
              <FileText className="w-16 h-16 text-primary" />
            </div>

            <p className="text-muted-foreground text-lg">
              Even the most qualified candidates can fail interviews due to common mistakes. Understanding 
              and avoiding these pitfalls can significantly improve your chances of success.
            </p>

            <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
              <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold m-0 mb-2">1. Arriving Unprepared</h2>
                <p className="text-muted-foreground m-0">
                  Not researching the company or role is a critical mistake. Always study the company's 
                  mission, recent news, and the job description thoroughly before the interview.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
              <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold m-0 mb-2">2. Speaking Negatively About Previous Employers</h2>
                <p className="text-muted-foreground m-0">
                  Badmouthing former employers or colleagues reflects poorly on you. Focus on what you 
                  learned and how you grew from past experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
              <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold m-0 mb-2">3. Being Too Vague or Generic</h2>
                <p className="text-muted-foreground m-0">
                  Generic answers like "I'm a hard worker" don't stand out. Provide specific examples 
                  and quantifiable achievements that demonstrate your value.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
              <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold m-0 mb-2">4. Not Asking Questions</h2>
                <p className="text-muted-foreground m-0">
                  Failing to ask questions suggests lack of interest. Prepare thoughtful questions about 
                  the role, team culture, and company direction.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
              <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold m-0 mb-2">5. Poor Body Language</h2>
                <p className="text-muted-foreground m-0">
                  Avoiding eye contact, slouching, or fidgeting can undermine your credibility. Maintain 
                  good posture, make eye contact, and project confidence.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
              <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold m-0 mb-2">6. Rambling or Going Off-Topic</h2>
                <p className="text-muted-foreground m-0">
                  Keep your answers concise and relevant. Use the STAR method (Situation, Task, Action, Result) 
                  to structure your responses effectively.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
              <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold m-0 mb-2">7. Lying or Exaggerating</h2>
                <p className="text-muted-foreground m-0">
                  Be honest about your skills and experience. Lies can be easily uncovered and will 
                  disqualify you immediately.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
              <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold m-0 mb-2">8. Not Following Up</h2>
                <p className="text-muted-foreground m-0">
                  Always send a thank-you email within 24 hours. It shows professionalism and keeps you 
                  top of mind with the interviewer.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-500/10 rounded-xl border border-amber-500/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pro Tip</h3>
                  <p className="text-muted-foreground">
                    Practice these scenarios with AI-powered mock interviews to identify and correct 
                    these mistakes before your actual interview.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Perfect Your Interview Skills</h3>
              <p className="text-muted-foreground mb-4">
                Practice with InterviewIQ to avoid these common mistakes and build confidence.
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
