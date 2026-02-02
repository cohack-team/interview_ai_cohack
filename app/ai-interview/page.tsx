"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bot, Mic, MicOff, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AIInterview() {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/practice" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Practice
            </Link>

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Bot className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI Interview Session</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="text-foreground">Behavioral</span>{" "}
                <span className="text-gradient">Interview Practice</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Practice your behavioral interview skills with our AI interviewer. Speak naturally and get real-time feedback.
              </p>
            </div>

            {/* AI Chat Interface */}
            <div className="glass-card rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-button-gradient flex items-center justify-center shrink-0">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">AI Interviewer</h3>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-foreground">
                      Hello! Welcome to your behavioral interview practice session. Let's start with a common question:
                    </p>
                    <p className="text-foreground mt-3 font-medium">
                      "Tell me about a time when you had to work with a difficult team member. How did you handle the situation?"
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Area */}
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-4">
                  <Button
                    variant={isRecording ? "destructive" : "outline"}
                    size="lg"
                    className="rounded-full gap-2"
                    onClick={() => setIsRecording(!isRecording)}
                  >
                    {isRecording ? (
                      <>
                        <MicOff className="w-5 h-5" />
                        Stop Recording
                      </>
                    ) : (
                      <>
                        <Mic className="w-5 h-5" />
                        Start Speaking
                      </>
                    )}
                  </Button>
                  <div className="flex-1 text-center">
                    {isRecording && (
                      <div className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                        <span className="text-sm text-muted-foreground">Recording...</span>
                      </div>
                    )}
                  </div>
                  <Button size="lg" className="rounded-full gap-2 bg-teal-500 hover:bg-teal-600 text-white">
                    <Send className="w-5 h-5" />
                    Submit Answer
                  </Button>
                </div>
              </div>
            </div>

            {/* Tips Card */}
            <div className="glass-card rounded-xl p-4">
              <h4 className="font-semibold text-foreground mb-2">💡 Tips for STAR Method</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><strong className="text-foreground">S</strong>ituation - Set the scene and context</li>
                <li><strong className="text-foreground">T</strong>ask - Describe your responsibility</li>
                <li><strong className="text-foreground">A</strong>ction - Explain what you did</li>
                <li><strong className="text-foreground">R</strong>esult - Share the outcome</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
