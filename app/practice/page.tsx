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
  ArrowRight,
  Play,
  Lock
} from "lucide-react";

const practiceCategories = [
  {
    icon: Code,
    title: "Frontend Developer",
    description: "React, Vue, Angular, HTML/CSS, JavaScript interview questions",
    questions: 85,
    difficulty: "Intermediate",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code,
    title: "Backend Developer",
    description: "Node.js, Python, Java, APIs, Database design questions",
    questions: 95,
    difficulty: "Advanced",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Brain,
    title: "Python Developer",
    description: "Python programming, Django, Flask, data structures",
    questions: 70,
    difficulty: "Intermediate",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Data Scientist",
    description: "ML, Statistics, Python, R, Data analysis questions",
    questions: 80,
    difficulty: "Advanced",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Brain,
    title: "Machine Learning Engineer",
    description: "Deep Learning, NLP, Computer Vision, Model deployment",
    questions: 75,
    difficulty: "Advanced",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Code,
    title: "Full Stack Developer",
    description: "Frontend + Backend, DevOps, System design",
    questions: 120,
    difficulty: "Advanced",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Briefcase,
    title: "Product Manager",
    description: "Product strategy, roadmap, user research, metrics",
    questions: 60,
    difficulty: "Intermediate",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "DevOps Engineer",
    description: "CI/CD, Docker, Kubernetes, Cloud platforms",
    questions: 65,
    difficulty: "Advanced",
    color: "from-emerald-500 to-teal-500"
  }
];

// Secret key for behavioral interview access
const BEHAVIORAL_SECRET_KEY = ""; // Add your secret key here

// Map categories to job IDs
const categoryJobMap: Record<number, string> = {
  0: "frontend-developer",
  1: "backend-developer",
  2: "python-developer",
  3: "data-scientist",
  4: "ml-engineer",
  5: "fullstack-developer",
  6: "product-manager",
  7: "devops-engineer"
};

export default function Practice() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [isSecretDialogOpen, setIsSecretDialogOpen] = useState(false);
  const [secretKeyInput, setSecretKeyInput] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const handleStartPractice = () => {
    // Open secret dialog for any category
    setIsSecretDialogOpen(true);
  };

  const handleSecretKeySubmit = () => {
    if (selectedCategory === null) return;
    
    const jobId = categoryJobMap[selectedCategory];
    
    if (BEHAVIORAL_SECRET_KEY === "") {
      // No secret key defined yet - go to job detail page
      router.push(`/jobs/${jobId}`);
      setIsSecretDialogOpen(false);
      setSecretKeyInput("");
    } else if (secretKeyInput === BEHAVIORAL_SECRET_KEY) {
      router.push(`/jobs/${jobId}`);
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

            {/* Categories Grid */}
            <h2 className="text-xl font-semibold mb-6 text-foreground">Choose Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {practiceCategories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
                  className={`p-6 rounded-xl border bg-card cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-emerald-500 ${
                    selectedCategory === index ? 'ring-2 ring-emerald-500 border-emerald-500' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              ))}
            </div>

            {/* Start Practice Button */}
            {selectedCategory !== null && (
              <div className="text-center animate-fade-in">
                <Button 
                  className="rounded-full px-8 gap-2 bg-button-gradient hover:opacity-90" 
                  size="lg"
                  onClick={handleStartPractice}
                >
                  <Lock className="w-4 h-4" />
                  <Play className="w-5 h-5" />
                  Start {practiceCategories[selectedCategory].title} Practice
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Secret Key Dialog */}
            <Dialog open={isSecretDialogOpen} onOpenChange={setIsSecretDialogOpen}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-display flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    Enter Secret Key
                  </DialogTitle>
                  <DialogDescription>
                    Enter the secret key to access the AI Interview practice session.
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
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
