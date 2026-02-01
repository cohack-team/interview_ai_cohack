"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Clock, Calendar } from "lucide-react";
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
                Interview Tips
              </span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                Jan 28, 2026
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                8 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              10 Tips to Ace Your Technical Interview
            </h1>
            <p className="text-lg text-muted-foreground">
              Essential strategies to prepare for coding interviews and impress your interviewers.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6">
            <div className="w-full h-64 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
              <BookOpen className="w-16 h-16 text-primary" />
            </div>

            <h2 className="text-2xl font-semibold">1. Master the Fundamentals</h2>
            <p className="text-muted-foreground">
              Before diving into complex algorithms, ensure you have a solid understanding of data structures 
              like arrays, linked lists, trees, graphs, and hash tables. These form the foundation of most 
              technical interview questions.
            </p>

            <h2 className="text-2xl font-semibold">2. Practice Problem-Solving Daily</h2>
            <p className="text-muted-foreground">
              Consistency is key. Solve at least one coding problem every day on platforms like LeetCode, 
              HackerRank, or CodeSignal. Start with easy problems and gradually increase difficulty.
            </p>

            <h2 className="text-2xl font-semibold">3. Understand Time and Space Complexity</h2>
            <p className="text-muted-foreground">
              Learn to analyze the efficiency of your solutions. Be comfortable discussing Big O notation 
              and explaining the trade-offs between different approaches.
            </p>

            <h2 className="text-2xl font-semibold">4. Think Out Loud</h2>
            <p className="text-muted-foreground">
              Communicate your thought process clearly. Interviewers want to understand how you approach 
              problems, not just see the final solution. Explain your reasoning at each step.
            </p>

            <h2 className="text-2xl font-semibold">5. Ask Clarifying Questions</h2>
            <p className="text-muted-foreground">
              Never assume. Ask about input constraints, edge cases, and expected output format. This shows 
              attention to detail and helps you avoid misunderstandings.
            </p>

            <h2 className="text-2xl font-semibold">6. Test Your Code</h2>
            <p className="text-muted-foreground">
              After writing your solution, walk through it with example inputs. Check for edge cases like 
              empty inputs, single elements, and boundary conditions.
            </p>

            <h2 className="text-2xl font-semibold">7. Learn Common Patterns</h2>
            <p className="text-muted-foreground">
              Familiarize yourself with common problem-solving patterns like two pointers, sliding window, 
              dynamic programming, and backtracking. Recognizing patterns helps you solve problems faster.
            </p>

            <h2 className="text-2xl font-semibold">8. Practice Mock Interviews</h2>
            <p className="text-muted-foreground">
              Simulate real interview conditions with friends or on platforms like Pramp or InterviewIQ. 
              This helps reduce anxiety and improves your performance under pressure.
            </p>

            <h2 className="text-2xl font-semibold">9. Review and Learn from Mistakes</h2>
            <p className="text-muted-foreground">
              After each practice session, review your solutions and alternative approaches. Understanding 
              why certain solutions work better helps you grow as a problem solver.
            </p>

            <h2 className="text-2xl font-semibold">10. Stay Calm and Confident</h2>
            <p className="text-muted-foreground">
              Remember that interviews are learning experiences. Even if you don't know the answer immediately, 
              showing a positive attitude and willingness to work through the problem goes a long way.
            </p>

            <div className="mt-12 p-6 bg-primary/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Ready to Practice?</h3>
              <p className="text-muted-foreground mb-4">
                Start your AI-powered interview preparation journey with InterviewIQ today.
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
