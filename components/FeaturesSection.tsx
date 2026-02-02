import { Brain, LineChart, MessageSquare, Shield, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart AI Analysis",
    description: "Our AI evaluates your responses in real-time, providing instant feedback on clarity, confidence, and content."
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Experience realistic interview scenarios with our conversational AI that adapts to your responses."
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    description: "Monitor your improvement over time with detailed analytics and personalized recommendations."
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Get immediate, actionable feedback after each response to continuously improve your skills."
  },
  {
    icon: Shield,
    title: "Practice Safely",
    description: "Build confidence in a judgment-free environment before facing real interviews."
  },
  {
    icon: Sparkles,
    title: "Industry Specific",
    description: "Prepare for interviews in tech, finance, consulting, and more with tailored question sets."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative" id="features">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/30 to-background" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-gradient">Why Choose</span>{" "}
            <span className="text-foreground">InterviewIQ?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powered by advanced AI to help you ace every interview with confidence and clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay
}: { 
  icon: typeof Brain; 
  title: string; 
  description: string;
  delay: number;
}) => (
  <div 
    className="group glass-card rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:scale-[1.02] bg-secondary hover:bg-emerald-500/15"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 bg-button-gradient group-hover:scale-110 group-hover:shadow-glow">
      <Icon className="w-6 h-6 text-primary-foreground" />
    </div>
    <h3 className="text-lg font-display font-semibold mb-2 transition-colors duration-300 text-foreground group-hover:text-primary">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default FeaturesSection;
