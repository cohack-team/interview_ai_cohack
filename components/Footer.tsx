import { Brain, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-background">
        <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path 
            fill="hsl(var(--foreground))" 
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div>

      <div className="relative pt-32 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to ace your next interview?
            </h3>
            <p className="text-background/70 mb-6 max-w-md mx-auto">
              Join thousands of professionals improving their interview skills with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary"
              />
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-6">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-background/10">
            <div>
              <h4 className="font-semibold mb-4 text-primary">Product</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="/#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="/practice" className="hover:text-primary transition-colors">Demo</a></li>
                <li><a href="/ai-interview" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Company</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="/jobs" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Resources</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="/help-center" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="/guides" className="hover:text-primary transition-colors">Guides</a></li>
                <li><a href="/community" className="hover:text-primary transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Contact</h4>
              <div className="flex items-center gap-2 text-sm text-background/70 mb-2">
                <Mail className="w-4 h-4 text-primary" />
                hello@interviewiq.ai
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  T
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  L
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  G
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Brain className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-background">InterviewIQ</span>
            </div>
            <p>© 2026 InterviewIQ. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
              <a href="/cookies" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
