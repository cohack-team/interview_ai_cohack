"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Brain, 
  Code, 
  Briefcase, 
  TrendingUp, 
  Users, 
  Clock, 
  ArrowRight,
  Play,
  CheckCircle2,
  Star,
  Lock
} from "lucide-react";

const practiceCategories = [
  {
    icon: Briefcase,
    title: "Behavioral Interview",
    description: "Practice common behavioral questions using the STAR method",
    questions: 50,
    difficulty: "Beginner",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Code,
    title: "Technical Interview",
    description: "Coding challenges and system design questions",
    questions: 120,
    difficulty: "Advanced",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Case Study",
    description: "Business case interviews for consulting roles",
    questions: 35,
    difficulty: "Intermediate",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Management and leadership scenario questions",
    questions: 40,
    difficulty: "Intermediate",
    color: "from-orange-500 to-amber-500"
  }
];

const recentSessions = [
  { title: "Behavioral - Tell me about yourself", score: 85, date: "2 hours ago" },
  { title: "Technical - System Design", score: 72, date: "Yesterday" },
  { title: "Case Study - Market Entry", score: 90, date: "3 days ago" },
];

// Secret key for behavioral interview access - to be defined later
const BEHAVIORAL_SECRET_KEY = ""; // Add your secret key here

export default function Practice() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [isSecretDialogOpen, setIsSecretDialogOpen] = useState(false);
  const [secretKeyInput, setSecretKeyInput] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const handleStartPractice = () => {
    if (selectedCategory === 0) {
      // Behavioral Interview - requires secret key
      setIsSecretDialogOpen(true);
    } else {
      // Other categories - coming soon
      toast({
        title: "Coming Soon",
        description: "This practice category will be available soon!",
      });
    }
  };

  const handleSecretKeySubmit = () => {
    if (BEHAVIORAL_SECRET_KEY === "") {
      // No secret key defined yet - allow access
      router.push("/ai-interview");
      setIsSecretDialogOpen(false);
      setSecretKeyInput("");
    } else if (secretKeyInput === BEHAVIORAL_SECRET_KEY) {
      router.push("/ai-interview");
      setIsSecretDialogOpen(false);
      setSecretKeyInput("");
    } else {
      toast({
        title: "Invalid Key",
        description: "The secret key you entered is incorrect.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Practice</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <span className="text-foreground">Start Your</span>{" "}
                <span className="text-gradient">Practice Session</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose a category and begin practicing with our AI interviewer. Get instant feedback and improve your skills.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: "Sessions Completed", value: "12", icon: CheckCircle2 },
                { label: "Average Score", value: "82%", icon: Star },
                { label: "Practice Hours", value: "8.5", icon: Clock },
                { label: "Questions Answered", value: "156", icon: Brain }
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-xl p-4 text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Categories Grid */}
            <h2 className="text-xl font-semibold mb-6 text-foreground">Choose Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {practiceCategories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
                  className={`glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                    selectedCategory === index ? 'ring-2 ring-primary shadow-glow' : ''
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-primary font-medium">{category.questions} questions</span>
                    <span className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {category.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Start Practice Button */}
            {selectedCategory !== null && (
              <div className="text-center mb-12 animate-fade-in">
                <Button 
                  className="rounded-full px-8 gap-2 bg-button-gradient hover:opacity-90" 
                  size="lg"
                  onClick={handleStartPractice}
                >
                  {selectedCategory === 0 && <Lock className="w-4 h-4" />}
                  <Play className="w-5 h-5" />
                  Start {practiceCategories[selectedCategory].title} Practice
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Secret Key Dialog for Behavioral Interview */}
            <Dialog open={isSecretDialogOpen} onOpenChange={setIsSecretDialogOpen}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-display flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    Enter Secret Key
                  </DialogTitle>
                  <DialogDescription>
                    Enter the secret key to access the Behavioral Interview practice session.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="secret-key">Secret Key</Label>
                    <Input
                      id="secret-key"
                      type="password"
                      placeholder="Enter your secret key"
                      value={secretKeyInput}
                      onChange={(e) => setSecretKeyInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSecretKeySubmit()}
                    />
                  </div>
                  <Button 
                    variant="hero" 
                    className="w-full rounded-full"
                    onClick={handleSecretKeySubmit}
                  >
                    Access Interview
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Recent Sessions */}
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-6 text-foreground">Recent Sessions</h2>
              <div className="space-y-4">
                {recentSessions.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Brain className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{session.title}</h4>
                        <p className="text-xs text-muted-foreground">{session.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={`text-lg font-bold ${session.score >= 80 ? 'text-primary' : session.score >= 60 ? 'text-yellow-500' : 'text-red-500'}`}>
                        {session.score}%
                      </div>
                      <Button variant="outline" size="sm" className="rounded-full">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
