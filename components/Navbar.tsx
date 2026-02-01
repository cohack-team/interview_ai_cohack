"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Bot, ChevronDown, LogOut, User } from "lucide-react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/client";
import { useUserStore } from "@/hooks/userUser";
import { toast } from "sonner";
import type { UserProfile } from "@/types";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated, setUser, setIsAuthenticated } = useUserStore();

  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getProvider = (providerId?: string): UserProfile["provider"] => {
    if (providerId === "google.com") return "google";
    if (providerId === "github.com") return "github";
    return "email";
  };

  const getInitial = (name?: string, email?: string) => {
    const base = name?.trim() || email?.trim() || "U";
    return base.charAt(0).toUpperCase();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userRef = doc(db, "users", firebaseUser.uid);
        const userSnap = await getDoc(userRef);
        const providerId = firebaseUser.providerData[0]?.providerId;

        const baseProfile: UserProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email ?? "",
          displayName: firebaseUser.displayName ?? "",
          provider: getProvider(providerId),
          profilePicture: firebaseUser.photoURL ?? "",
        };

        const profile = userSnap.exists()
          ? { ...baseProfile, ...(userSnap.data() as Partial<UserProfile>) }
          : baseProfile;

        setUser(profile);
        setIsAuthenticated();
      } else {
        setUser(null);
        setIsAuthenticated();
      }
    });

    return () => unsubscribe();
  }, [setUser, setIsAuthenticated]);

  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      const profile: UserProfile = {
        uid: user.uid,
        email: user.email ?? "",
        displayName: user.displayName ?? "",
        provider: "google",
        profilePicture: user.photoURL ?? "",
      };

      if (!userSnap.exists()) {
        await setDoc(userRef, profile, { merge: true });
      }

      setUser(profile);
      setIsAuthenticated();
      setIsLoginOpen(false);
      setIsSignInOpen(false);
      toast.success("Signed in with Google");
    } catch (err: any) {
      toast.error(err?.message || "Google sign-in failed");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsAuthenticated();
      toast.success("Logged out successfully");
    } catch (err: any) {
      toast.error(err?.message || "Logout failed");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-5 my-4 p-3 rounded-2xl bg-background/70 shadow-gray-600 border-2 border-foreground/10 backdrop-blur-md">
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
            href="#home"
            onClick={(e) => handleScrollToSection(e, "home")}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleScrollToSection(e, "features")}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            About Us
          </a>
          <Link
            href="/pricing"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            Pricing
          </Link>
          <Link
            href="/practice"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            Practice
          </Link>
          <Link
            href="/jobs"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            Jobs
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50"
          >
            Contact Us
          </Link>
        </div>

        {/* Auth Buttons */}
        {isAuthenticated && user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 rounded-full bg-muted/40 px-3 py-1.5 hover:bg-muted/60 transition-colors">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt={user.displayName || "User"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-sm font-semibold text-primary">
                      {getInitial(user.displayName, user.email)}
                    </span>
                  )}
                </div>
                <span className="text-sm font-medium text-foreground hidden sm:inline">
                  {user.displayName || user.email}
                </span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-xl border border-border p-2">
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Signed in as
              </DropdownMenuLabel>
              <div className="px-2 pb-2 text-sm font-medium text-foreground truncate">
                {user.displayName || user.email}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                variant="destructive"
                className="cursor-pointer"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
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
                <DialogTitle className="text-xl font-display">Welcome Back</DialogTitle>
                <DialogDescription className="text-sm">
                  Login to continue your interview preparation journey
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-3 mt-3">
                <div className="space-y-1">
                  <Label htmlFor="login-email" className="text-sm">Email</Label>
                  <Input id="login-email" type="email" placeholder="Enter your email" className="h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="login-password" className="text-sm">Password</Label>
                  <Input id="login-password" type="password" placeholder="Enter your password" className="h-9" />
                </div>
                <Button type="submit" className="w-full rounded-full h-10 bg-teal-500 hover:bg-teal-600 text-white">
                  Login
                </Button>
                <div className="relative my-3">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or</span>
                  </div>
                </div>
                <Button
                  onClick={handleGoogleAuth}
                  type="button"
                  variant="outline"
                  className="w-full rounded-full h-10 border-2 hover:bg-secondary/50"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsLoginOpen(false);
                      setIsSignInOpen(true);
                    }}
                    className="text-primary hover:underline font-medium py-3 m-2"
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
              <Button size="sm" className="rounded-full px-6 bg-teal-500 hover:bg-teal-600 text-white">
                Sign Up
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl font-display">Create Account</DialogTitle>
                <DialogDescription className="text-sm">
                  Join InterviewIQ and ace your next interview
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-3 mt-3">
                <div className="space-y-1">
                  <Label htmlFor="signup-name" className="text-sm">Full Name</Label>
                  <Input id="signup-name" type="text" placeholder="Enter your name" className="h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signup-email" className="text-sm">Email</Label>
                  <Input id="signup-email" type="email" placeholder="Enter your email" className="h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signup-password" className="text-sm">Password</Label>
                  <Input id="signup-password" type="password" placeholder="Create a password" className="h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signup-confirm" className="text-sm">Confirm Password</Label>
                  <Input id="signup-confirm" type="password" placeholder="Confirm your password" className="h-9" />
                </div>
                <Button type="submit" className="w-full rounded-full h-10 bg-teal-500 hover:bg-teal-600 text-white py-3 m-2">
                  Create Account
                </Button>
                <div className="relative my-3">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or</span>
                  </div>
                </div>
                <Button
                  onClick={handleGoogleAuth}
                  type="button"
                  variant="outline"
                  className="w-full rounded-full h-10 border-2 hover:bg-secondary/50 py-3 m-2"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignInOpen(false);
                      setIsLoginOpen(true);
                    }}
                    className="text-primary hover:underline font-medium py-3 m-2"
                  >
                    Login
                  </button>
                </p>
              </form>
            </DialogContent>
          </Dialog>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
