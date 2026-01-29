import { Bot, User, CheckCircle2 } from "lucide-react";

const ChatMockup = () => {
  return (
    <div className="relative">
      {/* Glow effect behind card */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-emerald-300/10 to-transparent blur-2xl scale-110" />
      
      {/* Main chat card */}
      <div className="relative glass-card rounded-3xl p-6 max-w-md mx-auto animate-float">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
          <div className="w-10 h-10 rounded-xl bg-button-gradient flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">AI Interviewer</h3>
            <span className="text-xs text-emerald-600 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Online
            </span>
          </div>
        </div>

        {/* Chat messages */}
        <div className="space-y-4 mb-6">
          {/* AI message */}
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-secondary rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
              <p className="text-sm text-foreground">
                Tell me about a time you solved a difficult problem.
              </p>
            </div>
          </div>

          {/* User message */}
          <div className="flex gap-3 justify-end">
            <div className="bg-button-gradient rounded-2xl rounded-tr-md px-4 py-3 max-w-[80%] shadow-glow">
              <p className="text-sm text-primary-foreground">
                <strong>Certainly.</strong> In my previous role as software engineer, we faced a critical issue where our system was regularly crashing under heavy load during peak transaction times. This was causing customer complaints and revenue loss...
              </p>
            </div>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <User className="w-4 h-4 text-emerald-700" />
            </div>
          </div>
        </div>

        {/* AI Feedback section */}
        <div className="bg-card rounded-2xl p-4 border border-border/50">
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            AI Feedback
          </h4>
          
          {/* Score badges */}
          <div className="flex gap-3 mb-4">
            <ScoreBadge label="Clarity" score={8.2} color="emerald" />
            <ScoreBadge label="Confidence" score={7.9} color="teal" />
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Good example!</strong> You clearly explained the issue, your role, and actions taken to resolve it. Consider adding specific metrics to strengthen your response.
          </p>
        </div>
      </div>
    </div>
  );
};

const ScoreBadge = ({ label, score, color }: { label: string; score: number; color: 'emerald' | 'teal' }) => {
  const bgColor = color === 'emerald' ? 'bg-emerald-100' : 'bg-teal-100';
  const textColor = color === 'emerald' ? 'text-emerald-700' : 'text-teal-700';
  const ringColor = color === 'emerald' ? 'ring-emerald-200' : 'ring-teal-200';
  
  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${bgColor} ring-1 ${ringColor}`}>
      <span className={`text-xs font-medium ${textColor}`}>{label}</span>
      <span className={`text-sm font-bold ${textColor}`}>{score}</span>
    </div>
  );
};

export default ChatMockup;
