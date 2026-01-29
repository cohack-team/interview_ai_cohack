"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Navbar = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const pathname = usePathname();

  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-button-gradient flex items-center justify-center shadow-glow">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-display font-bold text-gradient">InterviewIQ</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center nav-glass rounded-full px-2 py-1.5">
          <a
            href="#about"
            onClick={(e) => handleScrollToSection(e, "features")}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            About Us
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleScrollToSection(e, "pricing")}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            Pricing
          </a>
          <Link
            href="/practice"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            Practice
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            Contact Us
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {/* Login Dialog */}
          <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="rounded-full px-4">
                Login
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-display">Welcome Back</DialogTitle>
                <DialogDescription>
                  Login to continue your interview preparation journey
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input id="login-email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input id="login-password" type="password" placeholder="Enter your password" />
                </div>
                <Button type="submit" variant="hero" className="w-full rounded-full">
                  Login
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsLoginOpen(false);
                      setIsSignInOpen(true);
                    }}
                    className="text-primary hover:underline font-medium"
                  >
                    Sign Up
                  </button>
                </p>
              </form>
            </DialogContent>
          </Dialog>

          {/* Sign In Dialog */}
          <Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
            <DialogTrigger asChild>
              <Button variant="hero" size="sm" className="rounded-full px-6">
                Sign Up
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-display">Create Account</DialogTitle>
                <DialogDescription>
                  Join InterviewIQ and ace your next interview
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input id="signup-name" type="text" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" placeholder="Create a password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-confirm">Confirm Password</Label>
                  <Input id="signup-confirm" type="password" placeholder="Confirm your password" />
                </div>
                <Button type="submit" variant="hero" className="w-full rounded-full">
                  Create Account
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignInOpen(false);
                      setIsLoginOpen(true);
                    }}
                    className="text-primary hover:underline font-medium"
                  >
                    Login
                  </button>
                </p>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
